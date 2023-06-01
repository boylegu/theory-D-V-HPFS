import logging

import purerpc

from rpc import transfer_grpc, transfer_pb2


def make_route_note(**cmdData):
    return transfer_pb2.Data(
        host=cmdData['host'],
        output=cmdData['output'],
        exitcode=cmdData['exitcode'],
        task_id = cmdData['task_id'],
        end_dt = cmdData['end_dt']
    )


async def generate_messages(cmdData):
    messages = [
        make_route_note(**cmdData),
    ]
    for msg in messages:
        print("发送消息 %s ，%s" % (msg.host, msg.exitcode))
        yield msg


async def job_list_params(stub, cmdData):
    features = await stub.PutResults(generate_messages(cmdData))
    features.result()


async def to_rpc(cmdData):
    async with purerpc.insecure_channel('localhost', 10800) as channel:
        stub = transfer_grpc.JobServerStub(channel)
        await job_list_params(stub, cmdData)


if __name__ == '__main__':
    logging.basicConfig()
    """  --debug
    import asyncio

    async def run(cmd):
        proc = await asyncio.create_subprocess_shell(
            cmd,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE)

        stdout, stderr = await proc.communicate()

        print(f'[{cmd!r} exited with {proc.returncode}]')
        if stdout:
            print(f'[stdout]\n{stdout.decode()}')
        if stderr:
            print(f'[stderr]\n{stderr.decode()}')

        data = {
            'host': '1111',
            'output': stdout.decode(),
            'exitcode': proc.returncode
        }
        print(data)
        to_rpc(data)


    loop = asyncio.get_event_loop()
    loop.run_until_complete(run("ls"))
    loop.close()

    # to_rpc({'host':'11', 'output':'444', 'exitcode':55})
    """
