n = int(input())
maxi = 0
maxi1 =0
for num in range(1,n+1):
    x = int(input())
    if x > maxi:
        maxi = x
    if x > maxi1 and x < maxi:
        maxi1 = x
print(maxi1)