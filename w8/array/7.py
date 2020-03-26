n = int(input())
arr=[]
for i in input().split():
    arr.append(int(i))
arr.reverse()
for i in range(len(arr)):
    print(arr[i],end=' ')