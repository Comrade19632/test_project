from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("apps.reverse_proxy_api.urls"), name="reverse_proxy_api"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
