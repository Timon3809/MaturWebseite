"""PDF-Seiten als PNG rendern (Grundlage zum Ansehen und Ausschneiden).

Aufruf:  python -I render_pdf.py <datei.pdf> <zielordner> [--dpi 200]
Ergebnis: <zielordner>/p1.png, p2.png, …  und eine Zeile pro Seite: Nummer, Breite, Höhe.

Ausgefüllte Lösungen (Handschrift, eingefügte Textfelder) und reine Bild-PDFs
(z. B. eingescannte Zeitungsartikel) erscheinen nicht in der Textextraktion –
deshalb immer die gerenderten Seiten ansehen.
"""
import argparse
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _deps import need, pymupdf  # noqa: E402

ap = argparse.ArgumentParser()
ap.add_argument("pdf")
ap.add_argument("out")
ap.add_argument("--dpi", type=int, default=200)
a = ap.parse_args()

need(pymupdf, "pymupdf")
os.makedirs(a.out, exist_ok=True)
doc = pymupdf.open(a.pdf)
for i, page in enumerate(doc, 1):
    pix = page.get_pixmap(dpi=a.dpi)
    pix.save(os.path.join(a.out, f"p{i}.png"))
    print(i, pix.width, pix.height)
