from django.db import models

class UserInfo(models.Model):
    SEX_CHOICES = (
        ('male', '男'),
        ('female', '女'),
    )

    nickname = models.CharField(max_length=30, verbose_name='昵称')
    sex = models.CharField(choices=SEX_CHOICES, max_length=10, verbose_name='性别', )
    age = models.IntegerField(verbose_name='年龄')
    adasd = models.TextField(max_length=500, null=True, verbose_name='个性签名')
    province = models.ForeignKey('Province', related_name='provinces', on_delete=models.CASCADE)

    class Meta:
        verbose_name = "用户信息"
        verbose_name_plural = '用户信息'

    def __str__(self):
        return self.nickname


class Tag(models.Model):
    name = models.CharField(max_length=10, verbose_name='标签')
    user = models.ManyToManyField(UserInfo, related_name='userinfo')

    class Meta:
        verbose_name = "兴趣组"
        verbose_name_plural = '兴趣组'

    def __str__(self):
        return self.name


class Province(models.Model):
    """省份"""
    name = models.CharField(max_length=10, unique=True)

    class Meta:
        verbose_name = "省份"
        verbose_name_plural = '省份'

    def __str__(self):
        return self.name
