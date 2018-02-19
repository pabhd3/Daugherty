
import java.util.Calendar;
import java.util.Formatter;

public class Main {

	public static void main(String[] args) {
		
		//-----------------------------
		// decimals
		//-----------------------------
		int x = 10;
		int y = 20;
		
		// Example of displaying integers
		// X:10 Y:20
		//System.out.printf("", ...);       
		
		// TODO: Format number with 4 places and right justify using spaces
		// X:  10 Y:  20
		System.out.println("Format number with 4 places and right justify using spaces");
		System.out.printf("X:%4d Y:%4d", x, y);
		
		// TODO: Format number with 4 places and pad with zeros
		// X:0010 Y:0020
		System.out.println("\n\nFormat number with 4 places and pad with zeros");
		System.out.printf("X:%04d Y:%04d", x, y);
		
		// TODO: Format number with 4 places and left justify using spaces
		// X:10   Y:20
		System.out.println("\n\nFormat number with 4 places and left justify using spaces");
		System.out.printf("X:%-4d Y:%-4d", x, y);
		
		// TODO: Format number using comma separator
		// X:1,234,567
		x = 1234567;
		System.out.println("\n\nFormat number using comma separator");
		System.out.printf("X:%,d", x);
		
		// TODO: Format number leaving a space placeholder for positive numbers and prefixing with - for negative numbers
		// X: 10 Y:-20
		x = 10; y = -20;
		System.out.println("\n\nFormat number leaving a space placeholder for positive numbers and prefixing with - for negative numbers");
		System.out.printf("X:% d Y:% d", x, y);
		
		// TODO: Format number by placing negative numbers in parenthesis
		// X:10 Y:(20)
		System.out.println("\n\nFormat number by placing negative numbers in parenthesis");
		System.out.printf("X:%(d Y:%(d", x, y);
		
		//-----------------------------
		// float
		//-----------------------------
		double pi = Math.PI;
		
		// TODO: Format floating point number to display only first 2 decimal places
		// 3.14
		System.out.println("\n\nFormat floating point number to display only first 2 decimal places");
		System.out.printf("%.2f", pi);
		
		
		//-----------------------------
		// dates
		//-----------------------------
		Calendar c = Calendar.getInstance();
		c.set(2016, 8, 1, 14, 0, 0);
		
		// TODO: Display date as 'September 01, 2016 at 2pm'
		System.out.println("\n\nDisplay date as 'September 01, 2016 at 2pm'");
		System.out.printf("%tB %<td, %<tY at %<tl%<tp%n", c);
		
		//-----------------------------
		// toString
		//-----------------------------
		// TODO: Override the toString method in the Person class to display the name
		// as 'Doe, John'
		Person person = new Person("John", "Doe");
		System.out.println("\n\nOverride the toString method in the Person class to display the name");
		System.out.printf("%s", person);
	}
	
	
	
}