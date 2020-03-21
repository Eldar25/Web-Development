import math

a = int(input())
b = int(input())

for i in range(a,b):
    if(i == math.sqrt(i) * math.sqrt(i)):
        print(i)