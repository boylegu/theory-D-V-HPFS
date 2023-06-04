from concurrent import futures
import pytz
import logging
import datetime

import grpc

import transfer_pb2_grpc
import transfer_pb2


def timeStampToLocalDt(dt):
    timeStamp = dt.seconds
    dateArray = datetime.datetime.fromtimestamp(timeStamp, tz=pytz.utc)
    dateArray = dateArray.astimezone(datetime.timezone(datetime.timedelta(hours=8)))
    otherStyleTime = dateArray.strftime("%Y-%m-%d %H:%M:%S")
    return otherStyleTime


class JobServicer(transfer_pb2_grpc.JobServerServicer):

    def PutResults(self, request_iterator, context):
        task_id = None

        for message in request_iterator:
            print(message.host)
            print(message.output)
            print(message.exitcode)
            print(message.task_id)
            print(timeStampToLocalDt(message.end_dt))
            print(message.task_id)

        return transfer_pb2.Result(
            task_id=task_id,
        )


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    transfer_pb2_grpc.add_JobServerServicer_to_server(
        JobServicer(), server)
    server.add_insecure_port('[::]:10800')
    server.start()
    server.wait_for_termination()


if __name__ == '__main__':
    serve()
