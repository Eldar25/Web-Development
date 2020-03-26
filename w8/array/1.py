n = int(input())
arr = []
for a in input().split():
    arr.append( int(a) )
for i in range(0 ,len(arr) , 2):
    print(arr[i],end=' ')