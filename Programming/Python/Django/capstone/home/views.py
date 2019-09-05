from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User


# Create your views here.

# Each of these is used to put the user to the correct website
# documented in the urls page
def index(request):
    return render(request, 'home.htm')

def order(request):
    return render(request, 'order.htm')

def aboutUs(request):
    return render(request, 'aboutus.htm')

def location(request):
    return render(request, 'location.htm')

def customerService(request):
    return render(request, 'customerservice.htm')

def signup(request):
    return render(request, 'signup.htm')

def createUser(request):
    # These get the POST info given from the signin page
    username = request.POST.get('username')
    email = request.POST.get('email')
    password = request.POST.get('psw')
    awk_password = request.POST.get('psw-repeat')

# section to make sure users are doing legal actions
    if password == awk_password:        # Getting the users info and putting it into the users table
        try:
            user = User.objects.create_user(username=username, email=email, password=password)
            user.save()
        except:
            return render(request, 'signup.htm', {"user_no_exists": "user_no_exists"})

        return render(request, 'home.htm')
    else:
        return render(request, 'signup.htm', {"wrong_password": 'wrong_password'})  # allow the wrong_password
        # variable to exist when reloading the page, fix later
