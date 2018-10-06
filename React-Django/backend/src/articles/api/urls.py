# from django.urls import path

# from .views import ArticleDetailView, ArticleListView, ArticleCreateView, ArticleDeleteView, ArticleUpdateView

# urlpatterns = [
#     path("", ArticleListView.as_view(), name=""),
#     path('create/', ArticleCreateView.as_view()),
#     path("<pk>", ArticleDetailView.as_view(), name=""),
#     path("<pk>/update", ArticleUpdateView.as_view()),
#     path("<pk>/delete", ArticleDeleteView.as_view())
# ]

from .views import ArticleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ArticleViewSet, base_name="articles")
urlpatterns = router.urls
