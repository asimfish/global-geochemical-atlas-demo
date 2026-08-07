#!/usr/bin/env python3
"""Serve the portable demo folder and open it in the default browser."""

from __future__ import annotations

import argparse
import os
import threading
import webbrowser
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--port", type=int, default=0, help="local port; 0 selects an available port")
    parser.add_argument("--no-browser", action="store_true", help="do not open the browser automatically")
    args = parser.parse_args()

    package_dir = Path(__file__).resolve().parent
    os.chdir(package_dir)
    server = ThreadingHTTPServer(("127.0.0.1", args.port), SimpleHTTPRequestHandler)
    url = f"http://127.0.0.1:{server.server_port}/"
    print(f"Demo: {url}", flush=True)
    print("Press Ctrl+C to stop.", flush=True)

    if not args.no_browser:
        threading.Timer(0.4, webbrowser.open, args=(url,)).start()

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
