export const TYPE_LABELS = Object.freeze({
  country: 'Länder', city: 'Städte', water: 'Gewässer', river: 'Flüsse',
  region: 'Regionen', island: 'Inseln', peninsula: 'Halbinseln', mountain: 'Gebirge',
});
export const TYPE_ORDER = Object.keys(TYPE_LABELS);
const ID = /^[a-z0-9][a-z0-9_-]*$/;
const text = (value) => typeof value === 'string' && value.trim().length > 0;
const fail = (at, message) => { throw new Error(`${at}: ${message}`); };

export function validateConfig(config) {
  if (config?.schemaVersion !== 1) fail('config.schemaVersion', 'expected 1');
  if (typeof config.id !== 'string' || !ID.test(config.id)) fail('config.id', 'use lowercase letters, digits, hyphens or underscores');
  for (const key of ['title', 'region', 'description']) if (!text(config[key])) fail(`config.${key}`, 'required text');
  if (!/^data\/[a-zA-Z0-9_-]+\.json$/.test(config.data || '')) fail('config.data', 'expected data/<filename>.json');
  return config;
}

export function validateBounds(bounds) {
  if (!Array.isArray(bounds) || bounds.length !== 4 || !bounds.every(Number.isFinite)) fail('bounds', 'expected [west, south, east, north]');
  const [w, s, e, n] = bounds;
  if (w < -180 || e > 540 || e <= w || e - w > 360 || s < -84 || n > 84 || s >= n) {
    fail('bounds', 'require west < east (span <= 360), -180 <= west, east <= 540 and -84 <= south < north <= 84');
  }
}

export function validateGeometry(geometry, at = 'geometry') {
  const pos = (p) => Array.isArray(p) && p.length === 2 && p.every(Number.isFinite) &&
    p[0] >= -180 && p[0] <= 540 && p[1] >= -90 && p[1] <= 90;
  const line = (coords, ring = false) => {
    if (!Array.isArray(coords) || coords.length < (ring ? 4 : 2) || !coords.every(pos)) fail(at, 'invalid coordinates');
    if (ring && (coords[0][0] !== coords.at(-1)[0] || coords[0][1] !== coords.at(-1)[1])) fail(at, 'polygon rings must be closed');
  };
  const list = (coords, visit) => {
    if (!Array.isArray(coords) || !coords.length) fail(at, 'empty coordinate array');
    coords.forEach(visit);
  };
  const polygon = (coords) => list(coords, (ring) => line(ring, true));
  const c = geometry?.coordinates;
  switch (geometry?.type) {
    case 'Point': if (!pos(c)) fail(at, 'invalid Point'); break;
    case 'LineString': line(c); break;
    case 'MultiLineString': list(c, (l) => line(l)); break;
    case 'Polygon': polygon(c); break;
    case 'MultiPolygon': list(c, polygon); break;
    default: fail(at, 'supported: Point, LineString, MultiLineString, Polygon, MultiPolygon');
  }
  return geometry;
}

export function validateDataset(data) {
  validateBounds(data?.bounds);
  if (data.projection !== 'web-mercator') fail('projection', 'expected web-mercator');
  if (!Array.isArray(data.items) || !data.items.length) fail('items', 'at least one learning item is required');
  if (data.baseMap?.type !== 'FeatureCollection' || !data.baseMap.features?.length) fail('baseMap', 'nonempty FeatureCollection required');
  data.baseMap.features.forEach((f, i) => validateGeometry(f.geometry, `baseMap.features[${i}]`));
  const ids = new Set();
  const anchors = new Set();
  for (const [i, item] of data.items.entries()) {
    const at = `items[${i}]`;
    if (typeof item.id !== 'string' || !ID.test(item.id) || ids.has(item.id)) fail(`${at}.id`, 'invalid or duplicate id');
    ids.add(item.id);
    if (!TYPE_ORDER.includes(item.type)) fail(`${at}.type`, `expected one of ${TYPE_ORDER.join(', ')}`);
    if (!text(item.name) || !text(item.source)) fail(at, 'name and source are required');
    if (item.aliases !== undefined && (!Array.isArray(item.aliases) || !item.aliases.every(text))) fail(`${at}.aliases`, 'expected array of nonempty strings');
    validateGeometry({ type: 'Point', coordinates: item.anchor }, `${at}.anchor`);
    const [x, y] = item.anchor, [w, s, e, n] = data.bounds;
    if (x < w || x > e || y < s || y > n) fail(`${at}.anchor`, 'must be inside map bounds');
    const anchorKey = item.anchor.join(',');
    if (anchors.has(anchorKey)) fail(`${at}.anchor`, 'two items share the same point; choose separate teaching anchors');
    anchors.add(anchorKey);
    validateGeometry(item.geometry, `${at}.geometry`);
  }
  if (!Array.isArray(data.sources) || !data.sources.length) fail('sources', 'at least one attribution required');
  for (const source of data.sources) {
    if (!text(source.title)) fail('sources.title', 'required');
    if (source.url) {
      let url;
      try { url = new URL(source.url); } catch { fail('sources.url', 'invalid URL'); }
      if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) fail('sources.url', 'use public HTTP(S) URLs without credentials');
    }
  }
  if (data.typeLabels && (typeof data.typeLabels !== 'object' || Array.isArray(data.typeLabels) ||
    Object.entries(data.typeLabels).some(([type, label]) => !TYPE_ORDER.includes(type) || !text(label)))) fail('typeLabels', 'invalid category labels');
  if (data.notes && (!Array.isArray(data.notes) || !data.notes.every(text))) fail('notes', 'expected text array');
  return data;
}
