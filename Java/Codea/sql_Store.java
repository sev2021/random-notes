package logic;
 
import java.util.ArrayList;
 
public class Store {
    private String name;
    private ArrayList<Item> list;
 
 
    public Store(){
        list=new ArrayList<Item>();
    }
 
    public void add(Item item){
        list.add(item);
    }
 
    public void remove(Item item){
        list.remove(item);
    }
 
    public ArrayList<Item> getList(){
        return list;
    }
}
