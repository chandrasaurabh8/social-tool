from django.db import models

# Create your models here.
class Tool(models.Model):
    logo = models.ImageField()
    name = models.CharField(max_length=50, unique=True)
    url = models.URLField(max_length=500)
    description = models.CharField(max_length=500)
    catagory = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)