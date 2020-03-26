n = int(input())
cnt =0
arr=[]
for i in input().split():
    arr.append(int(i))
for i in range(1,len(arr)):
    if(arr[i] > arr[i-1]):
        cnt+=1

print(cnt)