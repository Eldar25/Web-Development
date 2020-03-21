
a = int(input())
b = int(input())
c = int(input())
d = int(input())

def minimum(a,b,c,d):
    if(a<b) and (c<d):
        if(c > a):
            print(a)
        elif(c<a):
            print(c)
    elif(a>b) and (c<d):
        if(b>c):
            print(c)
        elif(c>b):
            print(b)
    elif(a>b)and (c>d):
        if(b>d):
            print(d)
        elif(d>b):
            print(b)
    elif(a<b)and(c>d):
        if(a>d):
            print(d)
        elif(d>a):
            print(a)

    

minimum(a,b,c,d)


