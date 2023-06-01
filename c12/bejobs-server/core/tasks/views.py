from rest_framework.views import APIView, Response
from rest_framework import status

from concurrent.futures import as_completed
from requests_futures.sessions import FuturesSession


class CreateTaskView(APIView):

    def post(self, request):
        task_id = request.data.get("task_id")
        cmd = request.data.get('cmd')
        ips = request.data.get('ips')
        ips = ips if ips and isinstance(ips, list) else None
        if not all([task_id, cmd, ips]):
            return Response("参数缺失", status=status.HTTP_400_BAD_REQUEST)

        with FuturesSession() as session:
            futures = [session.post('http://{}:18000/notice'.format(ip),
                                    {"cmd": cmd, "task_id": task_id}) for ip in ips]
            for future in as_completed(futures):
                future.result()

        return Response({'task_id': task_id})
