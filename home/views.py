from django.shortcuts import render
from home.forms import ContactForm

def homepage(request):
    return render(request, "home.html")

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()  # Save to the database
            return render(request, "contactSuccess.html")
    else:
        form = ContactForm()
    return render(request, "contact.html", {'form': form})

def about(request):
    return render(request, "about.html")