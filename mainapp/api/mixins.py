from rest_framework.decorators import action
from rest_framework.response import Response
from asyst import service


# from .serializers import FanSerializer
class LikedMixin:
    @action(methods=['POST'], detail=True)
    def like(self, request, pk=None):
        """Лайкает `obj`"""
        obj = self.get_object()
        service.add_like(obj, request.user)
        return Response()

    @action(methods=['POST'], detail=True)
    def unlike(self, request, pk=None):
        """Удаляет лайк с `obj`.
        """
        obj = self.get_object()
        service.remove_like(obj, request.user)
        return Response()

    @action(methods=['GET'], detail=True)
    def fans(self, request, pk=None):
        """Получает всех пользователей, которые лайкнули `obj`.
        """
        obj = self.get_object()
        fans = service.get_fans(obj)
        serializer = FanSerializer(fans, many=True)
        return Response(serializer.data)


