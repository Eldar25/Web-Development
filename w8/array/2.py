n = int(input())
arr =[]
for i in input().split():
    arr.append(int(i))
for i in range(0,len(arr)):
    if(arr[i]%2 == 0):
        print(arr[i],end= ' ')