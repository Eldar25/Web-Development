n = int(input())
from math import log

Logn = log(n, 2)
if (Logn == int(Logn)):
  print ("YES")
else:
  print ("NO")