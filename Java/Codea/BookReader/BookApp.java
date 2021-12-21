public class BookApp{
	public static void main(String[] args){

		Book bk = new Book();  // bk is new object from class Book IMPORTANT
		BookReader br = new BookReader();  
		
		// BookReader object uses Book object as a parameter!
		// so we can pass bk object to br onbect below:
		br.add(bk);

		// and we can read bo. object from br object below:
		System.out.println("book" + br.out());
	}
}