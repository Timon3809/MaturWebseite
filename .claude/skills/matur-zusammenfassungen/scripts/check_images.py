"""Bilder prüfen, die der Browser nicht anzeigen kann.

Aufruf:  python -I check_images.py <bildordner> [--fix]

Findet Dateien, deren Inhalt nicht zur Endung passt – vor allem JPEG-2000
(Signatur 00 00 00 0c 6a 50 …), das beim Extrahieren aus PDFs oft mit der
Endung .png gespeichert wird. Chrome und Firefox zeigen es nicht an.
Mit --fix wird jede solche Datei als <name>.jpg neu gespeichert (Original
bleibt liegen); danach den Verweis in data.js auf die neue Datei ändern.
"""
import argparse
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _deps import Image  # noqa: E402

SIGS = {
    b"\x89PNG": "png",
    b"\xff\xd8\xff": "jpeg",
    b"GIF8": "gif",
    b"RIFF": "webp",
    b"<svg": "svg",
    b"<?xm": "svg",
}

ap = argparse.ArgumentParser()
ap.add_argument("folder")
ap.add_argument("--fix", action="store_true")
a = ap.parse_args()

bad = 0
for name in sorted(os.listdir(a.folder)):
    path = os.path.join(a.folder, name)
    ext = name.rsplit(".", 1)[-1].lower()
    if ext not in ("png", "jpg", "jpeg", "gif", "webp", "svg"):
        continue
    head = open(path, "rb").read(12)
    kind = next((k for s, k in SIGS.items() if head.startswith(s)), None)
    if kind is None and head[4:8] == b"jP  ":
        kind = "jpeg2000"
    ok = (kind == "jpeg" and ext in ("jpg", "jpeg")) or kind == ext
    if ok:
        continue
    bad += 1
    print(f"PROBLEM: {name}: Inhalt ist {kind or 'unbekannt'} ({head[:8].hex()})")
    if a.fix and Image is not None:
        target = os.path.join(a.folder, name.rsplit(".", 1)[0] + ".jpg")
        if os.path.exists(target) and target != path:
            target = target[:-4] + "-fix.jpg"
        Image.open(path).convert("RGB").save(target, quality=90)
        print("   → neu gespeichert als", os.path.basename(target))
print("geprüft, Probleme:", bad)
