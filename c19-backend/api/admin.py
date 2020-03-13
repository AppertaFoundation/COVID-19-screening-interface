from django import forms
from django.contrib import admin

# Register your models here.
from api.models import C19APIUserProfile

class C19APIUserProfileAdminForm(forms.ModelForm):
    class Meta:
        model = C19APIUserProfile
        fields = (
            'user',
            'clinical_author_name',
            'clinical_author_id',
        )
        widgets = {
            'clinical_author_name': forms.TextInput(),
            'clinical_author_id': forms.TextInput(),
        }


class C19APIUserProfileAdmin(admin.ModelAdmin):
    form = C19APIUserProfileAdminForm

admin.site.register(C19APIUserProfile, C19APIUserProfileAdmin)
