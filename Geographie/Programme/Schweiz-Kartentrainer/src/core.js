const MAP_WIDTH = 1080;
const MAP_HEIGHT = 760;

function matchAnswer(answer, item, allItems = []) {
  const normalizedAnswer = normalizeAnswer(answer);
  if (!normalizedAnswer) return { result: "wrong" };
  const accepted = [...new Set([item.name, ...(item.aliases || [])])];
  const normalizedAccepted = accepted.map((candidate) => ({
    normalized: normalizeAnswer(candidate),
  }));

  const exact = normalizedAccepted.find((candidate) => candidate.normalized === normalizedAnswer);
  if (exact) return { result: "correct" };

  // Do not turn a different valid place (Iran/Irak) into a spelling correction.
  if (allItems.some((other) => other !== item &&
    [other.name, ...(other.aliases || [])].some((name) => normalizeAnswer(name) === normalizedAnswer))) {
    return { result: "wrong" };
  }

  let best = null;
  for (const candidate of normalizedAccepted) {
    const distance = levenshtein(normalizedAnswer, candidate.normalized);
    if (!best || distance < best.distance) {
      best = { ...candidate, distance };
    }
  }

  if (best && best.distance <= typoThreshold(best.normalized.length)) {
    return {
      result: "typo",
      message: `Fast richtig, aber achte auf die Schreibweise: ${item.name}.`,
    };
  }

  return { result: "wrong" };
}

function normalizeAnswer(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/ß/g, "ss")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

function typoThreshold(length) {
  if (length <= 4) return 0;
  if (length <= 9) return 1;
  return 2;
}

function levenshtein(a, b) {
  const previous = Array.from({ length: b.length + 1 }, (_, index) => index);
  const current = Array.from({ length: b.length + 1 }, () => 0);

  for (let i = 1; i <= a.length; i += 1) {
    current[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      current[j] = Math.min(
        current[j - 1] + 1,
        previous[j] + 1,
        previous[j - 1] + cost,
      );
    }
    previous.splice(0, previous.length, ...current);
  }

  return previous[b.length];
}

function createProjector(bounds) {
  const [minLon, minLat, maxLon, maxLat] = bounds;
  const pad = 28;
  const minY = mercatorY(minLat);
  const maxY = mercatorY(maxLat);
  const usableWidth = MAP_WIDTH - pad * 2;
  const usableHeight = MAP_HEIGHT - pad * 2;
  const lonSpan = (maxLon - minLon) * Math.PI / 180;
  const scale = Math.min(usableWidth / lonSpan, usableHeight / (maxY - minY));
  const offsetX = (MAP_WIDTH - lonSpan * scale) / 2;
  const offsetY = (MAP_HEIGHT - (maxY - minY) * scale) / 2;

  return {
    project([lon, lat]) {
      const x = offsetX + (lon - minLon) * Math.PI / 180 * scale;
      const y = offsetY + (maxY - mercatorY(lat)) * scale;
      return [x, y];
    },
  };
}

function mercatorY(lat) {
  const clipped = Math.max(Math.min(lat, 84), -84);
  const radians = (clipped * Math.PI) / 180;
  return Math.log(Math.tan(Math.PI / 4 + radians / 2));
}

function projectedLinePath(points, projector) {
  return points.map((point, index) => {
    const [x, y] = projector.project(point);
    // Split at the opposite longitude seam instead of drawing a line across the viewport.
    const move = index === 0 || Math.abs(point[0] - points[index - 1][0]) > 180;
    return `${move ? 'M' : 'L'}${x.toFixed(2)} ${y.toFixed(2)}`;
  }).join(' ');
}

export { matchAnswer, normalizeAnswer, createProjector, projectedLinePath };
