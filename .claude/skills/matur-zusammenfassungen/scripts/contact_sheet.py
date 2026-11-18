"""Übersichtsbild (Kontaktabzug) aus vielen Bildern, um sie auf einen Blick zu prüfen.

Aufruf:
  python -I contact_sheet.py <out.jpg> bilder  <datei1> <datei2> …   [--max 500x420]
  python -I contact_sheet.py <out.jpg> seiten  <ordner>:<von>:<bis> … [--cols 4]

«bilder»: jedes Bild verkleinert, darunter Dateiname und Originalgrösse in Rot.
«seiten»: gerenderte PDF-Seiten (p<n>.png) in Spalten, mit Seitennummer – um
          zu sehen, wo auf welcher Seite welche Abbildung steht.
Das Ergebnis danach mit dem Read-Werkzeug ansehen. Bei sehr grossen Blättern
lieber mehrere kleinere erzeugen (über ~1600 px Höhe wird es unleserlich).
"""
import argparse
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _deps import Image, ImageDraw, need  # noqa: E402

ap = argparse.ArgumentParser()
ap.add_argument("out")
ap.add_argument("mode", choices=["bilder", "seiten"])
ap.add_argument("items", nargs="+")
ap.add_argument("--max", default="500x420")
ap.add_argument("--cols", type=int, default=4)
ap.add_argument("--width", type=int, default=1560)
a = ap.parse_args()
need(Image, "pillow")

W = a.width
tiles = []
if a.mode == "bilder":
    mw, mh = (int(v) for v in a.max.split("x"))
    for f in a.items:
        try:
            src = Image.open(f)
            size = src.size
            im = src.convert("RGB")
        except Exception as e:  # z. B. JPEG-2000 mit .png-Endung
            print("NICHT LESBAR:", f, e)
            continue
        im.thumbnail((mw, mh))
        tiles.append((im, f"{os.path.basename(f)} {size[0]}x{size[1]}"))
else:
    tw = W // a.cols - 6
    for spec in a.items:
        folder, start, end = spec.rsplit(":", 2)
        for n in range(int(start), int(end) + 1):
            p = os.path.join(folder, f"p{n}.png")
            if not os.path.exists(p):
                continue
            src = Image.open(p).convert("RGB")
            im = src.resize((tw, int(src.height * tw / src.width)))
            tiles.append((im, f"{os.path.basename(folder)} p{n} {src.width}x{src.height}"))

rows, row, x = [], [], 0
for im, label in tiles:
    if x + im.width > W and row:
        rows.append(row)
        row, x = [], 0
    row.append((im, label))
    x += im.width + 8
if row:
    rows.append(row)

H = sum(max(i.height for i, _ in r) + 22 for r in rows) or 10
sheet = Image.new("RGB", (W, H), "white")
d = ImageDraw.Draw(sheet)
y = 0
for r in rows:
    x = 0
    for im, label in r:
        sheet.paste(im, (x, y))
        d.rectangle([x, y + im.height + 2, x + min(im.width, 7 * len(label)), y + im.height + 16], fill="white")
        d.text((x + 2, y + im.height + 4), label, fill="red")
        x += im.width + 8
    y += max(i.height for i, _ in r) + 22
sheet.save(a.out, quality=82)
print(sheet.size, len(tiles), "Kacheln")
