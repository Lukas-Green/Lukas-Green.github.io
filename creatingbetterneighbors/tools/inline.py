#!/usr/bin/env python3
"""
inline.py — build a self-contained, single-file copy of a page.

The source pages reference images as normal files under assets/, which is what
you want for editing, git diffs, and browser caching. This produces the other
thing you sometimes need: ONE html file with every image embedded, that works
with no other files next to it.

Use it when you want to:
  - email a single page to Kirk or Robin for review
  - open a page from a USB stick / anywhere offline
  - publish a preview somewhere that can only take one file

Usage:
    python3 tools/inline.py restorative-reentry.html
    python3 tools/inline.py restorative-reentry.html --out /tmp/for-robin.html
    python3 tools/inline.py --all

Output defaults to dist/<name>.inlined.html. dist/ is gitignored.
Never edit the inlined output — it is a build artifact. Edit the source.
"""
import argparse
import base64
import pathlib
import re
import sys

HERE = pathlib.Path(__file__).resolve().parent.parent
PAGES = ["art-inside-out.html", "restorative-reentry.html"]
MIME = {".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
        ".gif": "image/gif", ".svg": "image/svg+xml", ".webp": "image/webp"}


def inline(page: pathlib.Path, out: pathlib.Path) -> None:
    html = page.read_text()
    refs = sorted(set(re.findall(r'src="(assets/[^"]+)"', html)))
    if not refs:
        print(f"  {page.name}: no asset references found — nothing to inline")

    missing, embedded, total = [], 0, 0
    for ref in refs:
        f = HERE / ref
        if not f.exists():
            missing.append(ref)
            continue
        mime = MIME.get(f.suffix.lower())
        if not mime:
            missing.append(f"{ref} (unknown type)")
            continue
        uri = f"data:{mime};base64," + base64.b64encode(f.read_bytes()).decode()
        html = html.replace(f'src="{ref}"', f'src="{uri}"')
        embedded += 1
        total += f.stat().st_size

    if missing:
        print(f"  ! {page.name}: {len(missing)} asset(s) could not be inlined:")
        for m in missing:
            print(f"      {m}")
        sys.exit(1)

    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(html)
    print(f"  {page.name}: embedded {embedded} image(s), {total // 1024} KB "
          f"-> {out.relative_to(HERE) if out.is_relative_to(HERE) else out} "
          f"({len(html.encode()) // 1024} KB)")


def main() -> None:
    ap = argparse.ArgumentParser(description="Build a single-file copy of a page.")
    ap.add_argument("page", nargs="?", help="page to inline, e.g. restorative-reentry.html")
    ap.add_argument("--out", help="output path (default: dist/<name>.inlined.html)")
    ap.add_argument("--all", action="store_true", help="inline every page")
    a = ap.parse_args()

    if not a.page and not a.all:
        ap.error("give a page, or --all")

    targets = PAGES if a.all else [a.page]
    print("Building self-contained copies:")
    for name in targets:
        src = HERE / name
        if not src.exists():
            print(f"  ! not found: {name}")
            sys.exit(1)
        out = pathlib.Path(a.out) if (a.out and not a.all) else HERE / "dist" / f"{src.stem}.inlined.html"
        inline(src, out)


if __name__ == "__main__":
    main()
