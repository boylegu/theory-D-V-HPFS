import json

from django.http import HttpResponse

from events import models


def eventsListView(request):
    """获取活动列表"""
    result = {"status": 200, "data": models.dataJSON}
    return HttpResponse(
        json.dumps(result, ensure_ascii=False),
        content_type="application/json,charset=utf-8"
    )
