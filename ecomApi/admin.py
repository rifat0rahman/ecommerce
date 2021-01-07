from django.contrib import admin
from .models import Product
from .models import Slider
from .models import User
from .models import Category
from .models import Orders
# Register your models here.
admin.site.register(Product)
admin.site.register(Slider)
admin.site.register(User)
admin.site.register(Category)
admin.site.register(Orders)
