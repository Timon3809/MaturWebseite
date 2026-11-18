"""Gemeinsamer Import-Helfer: macht pymupdf und Pillow auch unter `python -I` verfügbar.

`python -I` (isolierter Modus) blendet die Benutzer-site-packages aus. Dort sind
pymupdf und Pillow auf diesem Rechner installiert. Statt einen festen Pfad
einzutragen, wird der Benutzerpfad hier zur Laufzeit ermittelt.
"""
import site
import sys


def ensure_user_site():
    path = site.getusersitepackages()
    if path not in sys.path:
        sys.path.append(path)


ensure_user_site()

try:  # Umlaute in der Windows-Konsole korrekt ausgeben
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

try:
    import pymupdf  # noqa: F401
except ImportError:  # ältere Installationen heissen nur "fitz"
    try:
        import fitz as pymupdf  # noqa: F401
    except ImportError:
        pymupdf = None

try:
    from PIL import Image, ImageDraw  # noqa: F401
except ImportError:
    Image = ImageDraw = None


def need(module, name):
    if module is None:
        sys.exit(f"Fehlt: {name}. Installieren mit: python -m pip install --user {name}")
    return module
