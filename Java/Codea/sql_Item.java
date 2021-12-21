package logic;
 
enum Category{
    ELECTRONIC, CLOTHES, FOOD;
 
}
 
public class Item {
 
    public Item(String name, int width, int height, int length){
        
    }
    
 
    public void setWeigth(double weigth){
        this.weigth=weigth;
    }
 
    public void setLength(int length){
        this.length=length;
    }
 
    public void setHeight(int height){
        this.height=height;
    }
 
    public void setWidth(int width){
        this.width=width;
    }
 
    public void setDescription(String description){
        this.description=description;
    }
 
    public void setName(String name){
        this.name=name;
    }
 
    public int getID(){
        return id;
    }
 
    public String getName(){
        return name;
    }
 
    public String getDescription(){
        return description;
    }
 
    public int getWidth(){
        return width;
    }
 
    public int getHeight(){
        return height;
    }
 
    public int getLength(){
        return length;
    }
 
    public double getWeigth(){
        return weigth;
    }
 
    @Override
    public String toString(){
        return name+"(ID: "+id+") : "+description+"\n"+"width: "+width+" height: "+height+" length: "+length;
    }
 
    @Override
    public int hashCode() {
        return name.hashCode()*id*width*height*length*24;
    }
 
    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
 
        if (obj.getClass() != this.getClass()) {
            return false;
        }
 
        final Item other = (Item) obj;
        if ((this.name == null) ? (other.name != null) : !this.name.equals(other.name)) {
            return false;
        }
 
        if (this.width != other.width || this.height != other.height || this.length != other.length) {
            return false;
        }
 
        return true;
    }
}
