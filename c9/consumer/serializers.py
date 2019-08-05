from rest_framework import serializers
from rest_framework.fields import get_attribute
from rest_framework.utils.serializer_helpers import ReturnDict

from .models import Tag, UserInfo, Province


class UserInfoListSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInfo
        fields = ('nickname', 'sex')


class TagSerializer(serializers.ModelSerializer):
    # user = serializers.StringRelatedField(many=True)
    user = UserInfoListSerializer(many=True)

    class Meta:
        model = Tag
        fields = ('name', 'user')


class ProvinceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Province
        fields = "__all__"

    def to_internal_value(self, data):
        data_ = {'name': data}
        ret = super(ProvinceSerializer, self).to_internal_value(data_)
        return ret


class CreateUserInfoListSerializer(UserInfoListSerializer):
    province = ProvinceSerializer()

    class Meta(UserInfoListSerializer.Meta):
        fields = (
            'nickname',
            'sex',
            'age',
            'province'
        )

    def create(self, validated_data):
        province = validated_data.pop('province')
        validated_data['province'] = Province.objects.create(**province)
        userinfo = UserInfo.objects.create(**validated_data)
        return userinfo


class UpdateRetrieveUserSerializer(CreateUserInfoListSerializer):
    nickname = serializers.CharField(read_only=True)
    sex = serializers.CharField(read_only=True)
    province = serializers.StringRelatedField()

    class Meta(CreateUserInfoListSerializer.Meta):
        fields = (
            'age',
            'nickname',
            'sex',
            'province'
        )


class BaseGeneratorSerializer(serializers.Serializer):
    def convert_result(self, list_):
        result = []
        for dict_ in list_:
            for k, v in dict_.items():
                v['name']=k
                result.append(dict(**v))
        return result

    @property
    def data(self):
        if not hasattr(self, '_data'):
            if not getattr(self, '_errors', None):
                self._data = self.to_representation(self.instance)
        return self.convert_result([ReturnDict(self._data, serializer=self)])


class TemplateGeneratorSerializer(BaseGeneratorSerializer):pass


class DynamicField(serializers.Field):
    def __init__(self, **kwargs):
        self.subFields = {
            'cn_name': kwargs.pop('cn_name', None),
            'component': kwargs.pop('component', None),
            'type': kwargs.pop('type', 'text'),
            'required': kwargs.pop('is_required', False),
            'placeholder': kwargs.pop('placeholder', None),
            'validator': kwargs.pop('validator', None),
            'cn_description': kwargs.pop('cn_description', None)
        }
        super(DynamicField, self).__init__(**kwargs)

    def get_attribute(self, instance):
        return get_attribute(
            {
                key: True for key in self.source_attrs
            },
            self.source_attrs)

    def to_representation(self, value):
        return self.subFields


class InputField(DynamicField):
    def __init__(self, **kwargs):
        super(InputField, self).__init__(**kwargs)
        self.component = kwargs.pop('component', 'input')


class SelectField(DynamicField):
    def __init__(self, **kwargs):
        super(SelectField, self).__init__(**kwargs)
        self.component = kwargs.pop('component', 'select')


class UploadField(DynamicField):
    def __init__(self, **kwargs):
        super(UploadField, self).__init__(**kwargs)
        self.component = kwargs.pop('component', 'upload')


class EditUserFormTemplateSerializer(TemplateGeneratorSerializer):
    nickname = InputField(cn_name='昵称', is_required=True)
    sex = SelectField(cn_name='性别', is_required=True)
    photo = UploadField(cn_name='照片上传', type='file')

    class Meta:
        form_name = "编辑资料"
