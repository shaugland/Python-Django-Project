from django.contrib import admin
from .models import *

# Register your models here.

# Used to enter data from the admin site
# Place the model in here to make it appear on localhost:8000/admin
admin.site.register(Information)
admin.site.register(CarInformation)
