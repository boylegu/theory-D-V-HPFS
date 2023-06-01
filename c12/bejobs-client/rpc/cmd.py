import asyncio
import subprocess
import socket

from google.protobuf.timestamp_pb2 import Timestamp

from rpc import client


def getIp():
    hostname = socket.gethostname()
    ip = socket.gethostbyname(hostname)
    return ip


async def run(**kwargs):
    """
    await asyncio.create_subprocess_shell  会触发下列异常：
    Cannot add child handler, the child watcher does not have a loop attached
    官网描述https://github.com/python/cpython/commit/bf8cb31803558f1105efb15b0ee4bd184f3218c8
    """
    timestamp = Timestamp()

    cmd = kwargs.get('cmd')
    task_id = kwargs.get('task_id')
    proc = subprocess.Popen(
        cmd,
        shell=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE)

    stdout, stderr = proc.communicate()

    print(f'[{cmd!r} 状态返回码 {proc.returncode}]')
    if stdout:
        print(f'[stdout]\n{stdout.decode()}')
    if stderr:
        print(f'[stderr]\n{stderr.decode()}')

    timestamp.GetCurrentTime()

    cmdbData = {
        'host': getIp(),
        'task_id': task_id,
        'output': stdout.decode(),
        'exitcode': proc.returncode,
        "end_dt": timestamp
    }
    await client.to_rpc(cmdbData)


async def AsyncRun(**kwargs):
    await asyncio.gather(
        run(**kwargs)  # literally ANY long process
        # that i need to call
    )
