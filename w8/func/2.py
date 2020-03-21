a = float(input())
n = int(input())
def poww(a,n):
    c =1
    for i in range(0,n-1):
        c*=a
    print(c)

poww(a,n)