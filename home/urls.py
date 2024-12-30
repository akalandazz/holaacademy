from struct import pack
from django.urls import path
from home import views as home_views

app_name = 'accounts'

urlpatterns = [
    path('', home_views.homepage, name="homepage" ),
    path('contact', home_views.contact, name="contact" ),
    path('about', home_views.about, name="about" ),
    
]