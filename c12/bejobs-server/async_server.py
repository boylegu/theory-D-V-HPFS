import pytz
import logging
import datetime

from purerpc import Server
from channels.layers import get_channel_layer
import transfer_grpc
import transfer_pb2


channel_layer = get_channel_layer()

def timeStampToLocalDt(dt):
    timeStamp = dt.seconds
    dateArray = datetime.datetime.fromtimestamp(timeStamp, tz=pytz.utc)
    dateArray = dateArray.astimezone(datetime.timezone(datetime.timedelta(hours=8)))
    otherStyleTime = dateArray.strftime("%Y-%m-%d %H:%M:%S")
    return otherStyleTime


class JobServicer(transfer_grpc.JobServerServicer):

    async def PutResults(
            self,
            request_iterator,
    ) -> None:
        task_id = None

        async for request in request_iterator:
            # print(request.host)
            # print(request.output)
            # print(request.exitcode)
            # print(request.task_id)
            room_group_name = request.task_id
            end_dt = timeStampToLocalDt(request.end_dt)
            await channel_layer.group_send(
                room_group_name,
                {
                    "type": "task_message",
                    "host": request.host,
                    "output": request.output,
                    "exitcode": request.exitcode,
                    "finished_datetime": end_dt
                },
            )

        return transfer_pb2.Result(task_id=task_id)


def serve():
    server = Server(10800)
    server.add_service(JobServicer().service)
    server.serve(backend="asyncio")


if __name__ == '__main__':
    #logging.basicConfig()
    logging.basicConfig(level=logging.INFO)
    serve()