from django.shortcuts import render, redirect
from django.contrib import messages
def home(request):
    if request.method =='POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        if name and email and subject and message:
            from home.models import contact
            contact_obj = contact(name=name, email=email, subject=subject, message=message)
            contact_obj.save()
            messages.success(request, 'Your message has been sent successfully!')
            print('form submited')
            return redirect('home')
        else:
            messages.error(request, "All fields are required. Please fill out the form completely.")
            print('Please enter')
            return redirect('home')

    return render(request, 'index.html')
# def base(request):
#     return render(request, 'base.html')
