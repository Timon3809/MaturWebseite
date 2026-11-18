"""Inline-SVGs aus Fragmentdateien offline als Bild rendern (Kontrolle auf Überlappungen).

Aufruf:  python -I svg_preview.py <out.png> <fragment.html> [weitere …] [--dark]

Nutzt pymupdf. Der Renderer kennt kein rgba(), keine fill-/stroke-opacity und
keine Marker/ClipPaths – diese werden für die Vorschau vereinfacht (Pfeilspitzen
fehlen daher). Mit --dark wird currentColor hell auf dunklem Grund gezeichnet,
um die Lesbarkeit im Dark-Mode der Seite zu prüfen.
Gedacht als Ersatz, wenn Browser-Screenshots hängen – nicht als Endkontrolle.
"""
import argparse
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _deps import Image, need, pymupdf  # noqa: E402

ap = argparse.ArgumentParser()
ap.add_argument("out")
ap.add_argument("files", nargs="+")
ap.add_argument("--dark", action="store_true")
ap.add_argument("--dpi", type=int, default=90)
a = ap.parse_args()
need(pymupdf, "pymupdf")
need(Image, "pillow")

BG = (8, 10, 18) if a.dark else (255, 255, 255)
CUR = "#d4d8dd" if a.dark else "#454940"


def tint(m):
    r, g, b, al = [float(x) for x in m.group(1).split(",")]
    return "#%02x%02x%02x" % tuple(int(bg + (c - bg) * al) for c, bg in zip((r, g, b), BG))


ims = []
for f in a.files:
    text = open(f, encoding="utf-8").read()
    for svg in re.findall(r"<svg.*?</svg>", text, re.S):
        svg = re.sub(r"rgba\(([^)]*)\)", tint, svg)
        svg = re.sub(r'\s(fill|stroke)-opacity="[^"]*"', "", svg)
        svg = re.sub(r'\s(clip-path|marker-end|marker-start)="[^"]*"', "", svg)
        svg = svg.replace("currentColor", CUR)
        doc = pymupdf.open(stream=svg.encode("utf-8"), filetype="svg")
        pix = doc[0].get_pixmap(dpi=a.dpi, alpha=True)
        im = Image.frombytes("RGBA", (pix.width, pix.height), pix.samples)
        base = Image.new("RGB", im.size, BG)
        base.paste(im, mask=im.split()[3])
        ims.append(base)

if not ims:
    sys.exit("Keine <svg> gefunden.")
W = max(i.width for i in ims) * 2 + 10
rows = [ims[i:i + 2] for i in range(0, len(ims), 2)]
H = sum(max(i.height for i in r) + 10 for r in rows)
sheet = Image.new("RGB", (W, H), "#999")
y = 0
for r in rows:
    x = 0
    for i in r:
        sheet.paste(i, (x, y))
        x += i.width + 10
    y += max(i.height for i in r) + 10
sheet.save(a.out)
print(sheet.size, len(ims), "SVGs")
