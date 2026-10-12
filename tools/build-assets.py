#!/usr/bin/env python3
"""Bundle the site's CSS and JS into two cached files (no dependencies).

    python tools/build-assets.py

Reads the source files listed below, writes assets/dist/site.css (minified) and assets/dist/site.js, and points every page
at them with a content-hash query string (?v=...) so browsers always fetch the latest version after a change.
Edit the source files in assets/css and assets/js, then re-run this script. Pages never load the source files directly.
"""
import glob
import hashlib
import os
import re

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

# Order matters: later files override earlier ones.
CSS = ["tokens", "vertical", "base", "layout", "components", "header", "hero", "sections", "home", "forms", "pages", "hero-bg", "motion"]
JS = ["header", "reveal", "faq", "audit-form", "motion"]


def read(path):
    with open(os.path.join(ROOT, path), encoding="utf-8") as f:
        return f.read()


def write(path, text):
    full = os.path.join(ROOT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8", newline="\n") as f:
        f.write(text)


def minify_css(css):
    css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)           # comments
    css = re.sub(r"\s+", " ", css)                            # whitespace runs
    css = re.sub(r"\s*([{};,])\s*", r"\1", css)               # around structural characters
    css = css.replace(";}", "}")
    return css.strip()


def build():
    css = "\n".join(minify_css(read(f"assets/css/{n}.css")) for n in CSS)
    js = "\n;\n".join(read(f"assets/js/{n}.js") for n in JS)
    write("assets/dist/site.css", css)
    write("assets/dist/site.js", js)
    return (hashlib.md5(css.encode()).hexdigest()[:8], hashlib.md5(js.encode()).hexdigest()[:8])


def pages():
    out = []
    for path in glob.glob(os.path.join(ROOT, "**", "*.html"), recursive=True):
        rel = os.path.relpath(path, ROOT).replace("\\", "/")
        if rel.startswith(("_astro", "_archive", "node_modules", "assets/")):
            continue
        out.append(rel)
    return out


def link_pages(css_v, js_v):
    css_link = re.compile(r'[ \t]*<link rel="stylesheet" href="([^"]*?)assets/(?:css/[\w-]+|dist/site)\.css(?:\?v=\w+)?">\n?')
    js_script = re.compile(r'[ \t]*<script src="([^"]*?)assets/(?:js/[\w-]+|dist/site)\.js(?:\?v=\w+)?" defer></script>\n?')
    for rel in pages():
        html = read(rel)
        orig = html

        def first_replace(pattern, tag_fn, text):
            matches = list(pattern.finditer(text))
            if not matches:
                return text
            prefix = matches[0].group(1)
            tag = tag_fn(prefix)
            first = matches[0].start()
            text = pattern.sub("", text)
            return text[:first] + tag + text[first:]

        html = first_replace(css_link, lambda p: f'  <link rel="stylesheet" href="{p}assets/dist/site.css?v={css_v}">\n', html)
        html = first_replace(js_script, lambda p: f'  <script src="{p}assets/dist/site.js?v={js_v}" defer></script>\n', html)
        if html != orig:
            write(rel, html)
            print("linked", rel)


if __name__ == "__main__":
    css_v, js_v = build()
    link_pages(css_v, js_v)
    print(f"site.css v={css_v}, site.js v={js_v}")
