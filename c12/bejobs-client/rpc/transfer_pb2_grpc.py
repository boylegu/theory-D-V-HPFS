# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

import rpc.transfer_pb2 as transfer__pb2


class JobServerStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.PutResults = channel.stream_unary(
        '/jobserver.JobServer/PutResults',
        request_serializer=transfer__pb2.Data.SerializeToString,
        response_deserializer=transfer__pb2.Result.FromString,
        )


class JobServerServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def PutResults(self, request_iterator, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_JobServerServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'PutResults': grpc.stream_unary_rpc_method_handler(
          servicer.PutResults,
          request_deserializer=transfer__pb2.Data.FromString,
          response_serializer=transfer__pb2.Result.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'jobserver.JobServer', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
