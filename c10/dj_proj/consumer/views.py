from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated

from consumer import serializers, models, auth


@api_view(['GET'])
def UserInfoTag_list(request):
    quertyset = models.Tag.objects.all()
    serializer = serializers.TagSerializer(quertyset, many=True)
    return Response(serializer.data)


class UserInfoFromTagListAPIView(APIView):
    authentication_classes = (SessionAuthentication, BasicAuthentication)

    def get(self, request):
        print(request.user)
        print(request.auth)
        quertyset = models.Tag.objects.all()
        serializer = serializers.TagSerializer(quertyset, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs): pass

    def put(self, request, *args, **kwargs): pass

    def patch(self, request, *args, **kwargs): pass

    def delete(self, request, *args, **kwargs): pass


class UserInfoFromTagListView(generics.ListAPIView):
    serializer_class = serializers.TagSerializer
    queryset = models.Tag.objects.all()


class CreateListUserInfoView(generics.ListCreateAPIView):
    authentication_classes = (auth.UserAuthentication,)
    permission_classes = (IsAuthenticated,)
    serializer_class = serializers.CreateUserInfoListSerializer
    queryset = models.UserInfo.objects.all()


class UpdateRetrieveUserInfoView(generics.RetrieveUpdateAPIView):
    lookup_field = 'nickname'
    serializer_class = serializers.UpdateRetrieveUserSerializer
    queryset = models.UserInfo.objects.all()


class AuthUserView(APIView):

    def post(self, request):
        username = self.request.data.get('username')
        password = self.request.data.get('password')
        resp = auth.check_valid(username, password)
        if resp:
            return resp
        else:
            return Response({
                'msg': 'failed',
                'data': {}
            })
