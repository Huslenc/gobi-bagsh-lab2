# Zuvhun lokal testend zoriulsan server
from http.server import ThreadingHTTPServer, BaseHTTPRequestHandler
import time

class H(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/slow':
            time.sleep(0.1)  # 100ms hoorondol
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b'ok')
    def log_message(self, *a):  # log hiihgui
        pass

ThreadingHTTPServer(('127.0.0.1', 3000), H).serve_forever()
