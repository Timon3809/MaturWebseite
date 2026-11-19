"""Gerenderte Seiten mit Koordinatengitter verkleinert nebeneinanderstellen – zum Ablesen der
Pixel-Koordinaten für crop.py, ohne zu raten.

Aufruf:  python -I grid.py <out.jpg> <seite1.png> [<seite2.png>] [--scale 0.42]
Linien alle 100 px (rot alle 500 px), Beschriftung alle 200 px – immer in Pixeln der
Originalseite. Bei zwei Seiten nebeneinander: x der rechten Seite = (Bild-x − Breite links − 10) / scale.
Querformat-Seiten mit --scale 0.6 rendern.
"""
import argparse
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _deps import Image, ImageDraw, need  # noqa: E402

ap = argparse.ArgumentParser()
ap.add_argument("out")
ap.add_argument("pages", nargs="+")
ap.add_argument("--scale", type=float, default=0.42)
a = ap.parse_args()
need(Image, "pillow")

sc = a.scale
ims = []
for p in a.pages:
    im = Image.open(p).convert("RGB")
    w, h = im.size
    im = im.resize((int(w * sc), int(h * sc)))
    d = ImageDraw.Draw(im)
    for x in range(0, w, 100):
        d.line([(x * sc, 0), (x * sc, h * sc)], fill=(255, 0, 0) if x % 500 == 0 else (0, 170, 255), width=1)
        if x % 200 == 0:
            d.text((x * sc + 2, 2), str(x), fill=(255, 0, 0))
    for y in range(0, h, 100):
        d.line([(0, y * sc), (w * sc, y * sc)], fill=(255, 0, 0) if y % 500 == 0 else (0, 170, 255), width=1)
        if y % 200 == 0:
            d.text((2, y * sc + 2), str(y), fill=(255, 0, 0))
    ims.append(im)
W = sum(i.width for i in ims) + 10 * (len(ims) - 1)
H = max(i.height for i in ims)
sheet = Image.new("RGB", (W, H), "white")
x = 0
for i in ims:
    sheet.paste(i, (x, 0))
    x += i.width + 10
sheet.save(a.out, quality=85)
print(sheet.size, "– linke Seite", ims[0].width, "px breit")
