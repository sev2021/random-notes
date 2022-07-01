## test solution
##
import sys
# import numpy as np
# import pandas as pd
# from sklearn import 

for line in sys.stdin:
    print(line, end="")
    arr = line.split(" ")
    A = int(arr[0])
    B = int(arr[1])
    C = int(arr[2])
    print(*({0:i, i%A: "F", i%B: "B", i%(A*B): "FB"}[0] for i in range(1, C+1)))
