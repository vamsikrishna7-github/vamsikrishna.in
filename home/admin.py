from django.contrib import admin
from home.models import contact

class contactAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'email', 'subject', 'message', 'created_at', 'updated_at']

admin.site.register(contact,contactAdmin)
