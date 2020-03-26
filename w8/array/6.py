n = int(input())
arr=[]
cnt = 0
for i in input().split():
    arr.append(int(i))
for i in range(1,len(arr) -1):
    if(arr[i]> arr[i-1]) and (arr[i] > arr[i+1]):
        cnt+=1
print(cnt)