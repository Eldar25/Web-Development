n = int(input())
cnt = 0
arr = []
for i in input().split():
    arr.append(int(i))
for i in range(1,len(arr)):
    if(arr[i] >= 0) and (arr[i -1] >=0):
        print("YES")
        cnt+=1
if(cnt >= 1):
    print("YES")
else:
    print("NO")
    