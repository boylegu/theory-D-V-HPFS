import hmac

from django.contrib.auth.models import User
from django.conf import settings
from rest_framework.views import Response
from rest_framework.authentication import BaseAuthentication


def generate_token(username, password):
    user = username.encode()
    passwd = password.encode()
    key = settings.SECRET_KEY.encode()
    h = hmac.new(key, user + passwd)
    return h.hexdigest()


def check_valid(username, password):
    try:
        user = User.objects.get(
            username=username,
            password = password
        )
        resp = Response({
            'msg': 'success',
            'data': {
                "username": user.username,
                "uid": generate_token(username, password),
            }
        })
        return resp
    except User.DoesNotExist:
        return False

def validate_token(token):
    tagetToken = generate_token('gubaoer', '123456')
    return token == tagetToken


class UserAuthentication(BaseAuthentication):
    def authenticate(self, request):
        uid = request.query_params.get('uid')
        if uid:
            token = validate_token(uid)
            if not token:
                return
            user = User.objects.filter(username='gubaoer').first()
            if not user:
                return
            else:
                return (user, uid)
        else:
            return