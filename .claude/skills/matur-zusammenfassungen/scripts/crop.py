"""Abbildungen aus gerenderten Seiten ausschneiden.

Aufruf:  python -I crop.py <seitenordner> <zielordner> <spec.json>
spec.json: {"dateiname-ohne-endung": [seite, [links, oben, rechts, unten]], …}
Koordinaten in Pixeln der gerenderten Seite (render_pdf.py, Standard 200 dpi).
Ergebnis: JPG (Qualität 88) – Fotos und Scans werden so viel kleiner als PNG.

Tipp: Erst grob schneiden, mit contact_sheet.py prüfen, dann nachjustieren.
Mehrere Teile zu einem Bild kombinieren: --join name=teil1,teil2[,…] (nebeneinander).
"""
import argparse
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _deps import Image, need  # noqa: E402

ap = argparse.ArgumentParser()
ap.add_argument("pages")
ap.add_argument("out")
ap.add_argument("spec")
ap.add_argument("--join", action="append", default=[], help="name=teil1,teil2 (nebeneinander, Lücke 30 px)")
a = ap.parse_args()

need(Image, "pillow")
os.makedirs(a.out, exist_ok=True)
with open(a.spec, encoding="utf-8") as f:
    spec = json.load(f)
for name, (page, box) in spec.items():
    im = Image.open(os.path.join(a.pages, f"p{page}.png")).convert("RGB").crop(box)
    im.save(os.path.join(a.out, f"{name}.jpg"), quality=88, optimize=True)
    print(name, im.size)

for j in a.join:
    name, parts = j.split("=", 1)
    ims = [Image.open(os.path.join(a.out, f"{p}.jpg")) for p in parts.split(",")]
    gap = 30
    w = sum(i.width for i in ims) + gap * (len(ims) - 1)
    h = max(i.height for i in ims)
    canvas = Image.new("RGB", (w, h), "white")
    x = 0
    for i in ims:
        canvas.paste(i, (x, 0))
        x += i.width + gap
    canvas.save(os.path.join(a.out, f"{name}.jpg"), quality=90)
    print(name, canvas.size, "(kombiniert)")
