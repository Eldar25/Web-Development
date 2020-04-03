from django.shortcuts import render
from django.http.response import JsonResponse
from django.http import Http404

from api.models import Company,Vacancy
# Create your views here.


def company_list(request):
    companies = Company.objects.all()
    companies_json =[company.to_json() for company in companies]#надо проверить цикл!!!
    return JsonResponse(companies_json,safe = False)

def company_detail(request,company_id):
    try:
        company = Company.objects.get(id = company_id)
    except Company.DoesNotExist as err:
        return JsonResponse({'error' : 'companies does not exists'}) 
    return JsonResponse(company.to_json())

def company_vacancy(request,company_id):
    try:
        comp = Company.objects.get(id = company_id)
    except Company.DoesNotExist as err:
        return JsonResponse({'error' : 'companies does not exists'}) 
    vacancies = Vacancy.objects.filter(company = comp)
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json,safe = False)

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json,safe = False)

def vacancy_details(request,vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id = vacancy_id)
    except Vacancy.DoesNotExist as err:
        return JsonResponse({'error' : 'vacncy does not exists'})
    return JsonResponse(vacancy.to_json())

def vacancy_top_ten(request):
    vacansies = Vacancy.objects.order_by('-salary')
    vacancies_json = []
    if(len(vacansies) >=10):
        for v in range(10):
            vacancies_json.append(vacansies[v].to_json())
    else:
        for v in range(len(vacansies)):
            vacancies_json.append(vacansies[v].to_json())
    return JsonResponse(vacancies_json,safe = False)
    