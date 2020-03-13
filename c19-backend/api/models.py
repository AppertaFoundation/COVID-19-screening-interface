from django.conf import settings
from django.db import models

class C19APIUserProfile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        related_name='c19_api_user_profile',
        on_delete=models.CASCADE)
    clinical_author_name = models.TextField()
    clinical_author_id = models.TextField()

    def __str__(self):
        return str(self.user)

    class Meta:
        verbose_name = 'Covid-19 API User Profile'
        verbose_name_plural = 'Covid-19 API User Profiles'
