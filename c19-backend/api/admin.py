from django import forms
from django.contrib import admin

# Register your models here.
from api.models import C19APIPatientProfile

class C19APIPatientProfileAdminForm(forms.ModelForm):
    class Meta:
        model = C19APIPatientProfile
        fields = (
            'user',
            'patient_nhs_number',
        )
        widgets = {
            'patient_nhs_number': forms.TextInput(),
        }


class C19APIPatientProfileAdmin(admin.ModelAdmin):
    form = C19APIPatientProfileAdminForm
    list_display = ('user', 'patient_nhs_number')

admin.site.register(C19APIPatientProfile, C19APIPatientProfileAdmin)
