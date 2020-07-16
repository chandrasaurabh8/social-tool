from tools.models import Tool
from rest_framework import viewsets, permissions
from .serializers import ToolSerializer


class ToolViewSet(viewsets.ModelViewSet):
    queryset = Tool.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ToolSerializer
