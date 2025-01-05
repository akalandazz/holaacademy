from django import forms
from home.models import Contact

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['name', 'email', 'message']
        widgets = {
            'name': forms.TextInput(attrs={
                'class': 'w-full px-3 py-2 text-gray-900 rounded',
                'placeholder': 'Your Name',
            }),
            'email': forms.EmailInput(attrs={
                'class': 'w-full px-3 py-2 text-gray-900 rounded',
                'placeholder': 'Your Email',
            }),
            'message': forms.Textarea(attrs={
                'class': 'w-full px-3 py-2 text-gray-900 rounded',
                'placeholder': 'Your Message',
                'rows': 5,
                'cols': 40,
            }),
        }