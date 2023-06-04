import json

from aiohttp import web

from rpc.cmd import AsyncRun


class PostNoticeView(web.View):

    async def post(self):
        data = await self.request.post()
        print(data)
        await AsyncRun(**data)
        return web.Response(
            text=json.dumps({'msg': 'ok', "code": 201}),
            status=201,
            content_type='application/json'
        )
