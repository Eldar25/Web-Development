a = int(input())
b = int(input())

def xor(a,b):
    if((a==1 and b==0) or (a==0 and b==1)):
        print('1')
    elif((a==0 and b==0) or (b==1 and a==1)):
        print('0')

xor(a,b)