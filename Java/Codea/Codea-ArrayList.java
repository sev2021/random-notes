/*
* Take a look at the code placed in the main() method of the Lunch class.
* Inside the method removeAnts(), use a for loop or a while loop to iterate 
* through lunchBox and remove any element that has the value "ant".
* Outside the loop, return the value of lunchBox.
*/

import java.util.ArrayList;

class Lunch {
 
  public static ArrayList<String> removeAnts(ArrayList<String> lunchBox) {
    // Add your code below
   for(int i=0; i<lunchBox.size(); i++){
     if(lunchBox.get(i).indexOf("ant") > -1){
       lunchBox.remove(i);
       i--;
     }
   }
  return lunchBox;
  }
 
  
  public static void main(String[] args) {
    ArrayList<String> lunchContainer = new ArrayList<String>();
    lunchContainer.add("ant");
    lunchContainer.add("apple");
    lunchContainer.add("ant");
    lunchContainer.add("ant");
    lunchContainer.add("sandwich");
    lunchContainer.add("ant");
    lunchContainer = removeAnts(lunchContainer);
    System.out.println(lunchContainer);

  }
}
