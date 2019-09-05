from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', views.index, name='index'),
    path('order/', views.order, name='order'),
    path('aboutUs/', views.aboutUs, name='about'),
    path('customerservice/', views.customerService, name='customer'),
    path('location/', views.location, name='location'),
    path('signup/', views.signup, name='signup'),
    path('signInPage', views.createUser, name='createuser'),
]
