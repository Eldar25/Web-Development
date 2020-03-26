from django.urls import path
from api.views import product_list,product_detail,category_list,category_detail,product_category

urlpatterns = [
    path('products/', product_list),
    path('products/<int:product_id>/', product_detail),
    path('category/',category_list),
    path('category/<int:category_id>/',category_detail),
    path('category/<int:category_id>/products/', product_category),
]