from channels.generic.websocket import AsyncWebsocketConsumer
import json


class ChannalConsumer(AsyncWebsocketConsumer):

    async def connect(self):
        self.task_id = self.scope['url_route']['kwargs']['task_id']
        self.room_group_name =self.task_id

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    # 从room group接收到消息
    async def task_message(self, event):
        # 发送消息至WebSocket
        await self.send(text_data=json.dumps(event))
