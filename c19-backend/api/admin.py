from django.contrib import admin

# Register your models here.
from api.models import C19APIUserProfile

class C19APIUserProfileAdmin(admin.ModelAdmin):
    pass

admin.site.register(C19APIUserProfile, C19APIUserProfileAdmin)
