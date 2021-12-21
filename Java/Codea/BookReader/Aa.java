public class Aa{
	public class Bb{}	
	public static void main(String[] args){

		Book bk = new Book();
		BookReader br = new BookReader();
		
		br.add(bk);
		br.out();
		
		System.out.println("book" + br.out());
	}
}