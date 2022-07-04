## test solution
##
import sys
# import numpy as np
# import pandas as pd
# from sklearn import 

for line in sys.stdin:
    print(line, end="")
    arr = line.split(" ")
    if len(arr) > 2:
        A = int(arr[0])
        B = int(arr[1])
        C = int(arr[2])
        print(*({0:i, i%A: "F", i%B: "B", i%(A*B): "FB"}[0] for i in range(1, C+1)))

# Java solution:       
#      
# import java.util.*;
# public class Test{
# 	public static void main(String[] args) {
# 		String inp = new Scanner(System.in).nextLine();
# 		String[] inpArray = inp.split(" ");
# 		String outStr = "";
# 		if(inpArray.length > 2) {
# 			int a = Integer.parseInt(inpArray[0]);
# 			int b = Integer.parseInt(inpArray[1]);
# 			int c = Integer.parseInt(inpArray[2]);
# 			for(int i=1; i<=c; i++) {
# 				if(i%a == 0) outStr += "F";
# 				if(i%b == 0) outStr += "B";
# 				if(i%a > 0 && i%b > 0) outStr += i;
# 				outStr += " ";
# 			}
# 			System.out.println("\n" + outStr);
# 		}
# 	}
# }
