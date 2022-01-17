public class ThreeDots{
	public static void main(String... args){
		// for(int i=1; i<main.length && i<6; i+=2) System.out.println(main[i]);
		int ctr = 1;
		while(ctr<args.length){
			if(ctr >= 4) break;
			if(ctr%2 == 0) System.out.println(args[ctr]);
			++ctr;
		}
	}
}
 
// check https://www.mycertnotes.com/en/passed-the-1z0-808-java-se-8-programmer-i-oca-8-exam-with-94-my-experience-with-in-detail/
