from rest_framework import routers
from .api import ToolViewSet

router = routers.DefaultRouter()
router.register("api/tools", ToolViewSet, "tools")

urlpatterns = router.urls
