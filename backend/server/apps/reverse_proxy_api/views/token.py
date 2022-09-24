from json import loads

from django.conf import settings
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

import requests


@csrf_exempt
@require_POST
def token(request):
    url = "https://apiproxy.telphin.ru/oauth/token"

    headers = {
        "Content-Type": "application/x-www-form-urlencoded",
    }

    request_body = loads(request.body)

    username = request_body.get("username", "")
    password = request_body.get("password", "")

    data = {
        "grant_type": "password",
        "client_id": settings.TELPHIN_CLIENT_ID,
        "client_secret": settings.TELPHIN_CLIENT_SECRET,
        "username": username,
        "password": password,
    }

    response = requests.post(url, headers=headers, data=data)

    return HttpResponse(response.text, status=response.status_code)
