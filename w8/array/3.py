n = int(input())
cnt = 0
arr= []
for i in input().split():
    arr.append(int(i))
for i in range(len(arr)):
    if(arr[i] > 0):
        cnt+=1
print(cnt)