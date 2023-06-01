import purerpc
from . import transfer_pb2
import google.protobuf.timestamp_pb2


class JobServerServicer(purerpc.Servicer):
    async def PutResults(self, input_messages):
        raise NotImplementedError()

    @property
    def service(self) -> purerpc.Service:
        service_obj = purerpc.Service(
            "jobserver.JobServer"
        )
        service_obj.add_method(
            "PutResults",
            self.PutResults,
            purerpc.RPCSignature(
                purerpc.Cardinality.STREAM_UNARY,
                transfer_pb2.Data,
                transfer_pb2.Result,
            )
        )
        return service_obj


class JobServerStub:
    def __init__(self, channel):
        self._client = purerpc.Client(
            "jobserver.JobServer",
            channel
        )
        self.PutResults = self._client.get_method_stub(
            "PutResults",
            purerpc.RPCSignature(
                purerpc.Cardinality.STREAM_UNARY,
                transfer_pb2.Data,
                transfer_pb2.Result,
            )
        )