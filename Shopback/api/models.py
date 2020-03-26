from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=300)
    price = models.FloatField()
    description= models.TextField(max_length=3000)
    count = models.IntegerField()
    def to_json(self):
            return{
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count
        }

class Category(models.Model):
    name = models.CharField(max_length=300)
    def to_json(self):
            return{
            'id': self.id,
            'name': self.name
        }