from json import loads

from django.conf import settings
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

import requests


@csrf_exempt
@require_POST
def refresh_token(request):
    url = "https://apiproxy.telphin.ru/oauth/token"

    headers = {
        "Content-Type": "application/x-www-form-urlencoded",
    }

    request_body = loads(request.body)
    refresh = request_body.get("refresh", "")

    data = {
        "grant_type": "refresh_token",
        "client_id": settings.TELPHIN_CLIENT_ID,
        "client_secret": settings.TELPHIN_CLIENT_SECRET,
        "refresh_token": refresh,
    }

    response = requests.post(url, headers=headers, data=data)

    return HttpResponse(response.text, status=response.status_code)
