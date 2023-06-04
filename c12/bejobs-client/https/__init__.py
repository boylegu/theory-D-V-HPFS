import asyncio
from aiohttp import web
import threading

from .views import PostNoticeView


def run_server(runner):
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    loop.run_until_complete(runner.setup())
    site = web.TCPSite(runner, '0.0.0.0', 18000)
    loop.run_until_complete(site.start())
    loop.run_forever()


def aiohttp_server():
    app = web.Application()
    app.add_routes([
        web.post('/notice', PostNoticeView)
    ])
    runner = web.AppRunner(app)
    return runner


class AsyncHTTPServer(object):
    def __init__(self):
        self.server_thread = threading.Thread(target=run_server, args=(aiohttp_server(),))
        self.server_thread.setDaemon(True)

    def start(self):
        self.server_thread.start()


def StartHttpService():
    http = AsyncHTTPServer()
    http.start()

"""
if __name__ == "__main__":
    # --debug
    import time
    server_thread = threading.Thread(target=run_server, args=(aiohttp_server(),))
    server_thread.setDaemon(True)
    server_thread.start()
    time.sleep(1000)
"""