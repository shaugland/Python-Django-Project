from django.db import models

# Create your models here.

# Registration for users that enter the site

# Information about each of the users.
class Information(models.Model):        # Going to have to implement a page to get this information 
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=2)
    address = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=6)
    alt_city = models.CharField(max_length=100)
    alt_state = models.CharField(max_length=2)
    alt_address = models.CharField(max_length=100)
    alt_zip_code = models.CharField(max_length=6)

    def __str__(self):
        return print(self.first_name + " " + self.last_name)

class CarInformation(models.Model):
    name_of_car = models.CharField(max_length=200)
    type_of_car = models.CharField(max_length=200)

    def __str__(self):
        return self.name_of_car
