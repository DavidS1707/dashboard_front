from django.urls import path
from app import views

urlpatterns = [
    path("area_chart", views.area_chart, name="app-area-chart"),
    path("datatables", views.datatables, name="app-datatables"),
    path("", views.index, name="app-index")
]
