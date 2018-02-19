import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {

	public static void main(String[] args) {
		
		// TODO: Use a regular expression to replace all whitespace with a single space 
		String s1 = "this   string   has a lot   of extra spaces";
		System.out.println("Use a regular expression to replace all whitespace with a single space");
		System.out.println("\t" + s1);
		// Replace white space with a single space
		System.out.println("\t" + s1.replaceAll("\\s+"," "));
		
		
		// TODO: Use the String.split method and a regular expression to split the comma separated values in the string below
		// and display each part
		String s2 = "a, ab , abc, abcd  , abcde";
		System.out.println("\nUse the String.split method and a regular expression to split the comma separated values in the string below and display each part");
		System.out.println("\ta, ab , abc, abcd  , abcde");
		// Split the string on whitespace(s) followed by comma followed by whitespace(s)
		String[] splitS2 = s2.split("\\s*,\\s*");
		for(String s : splitS2) {
			System.out.println("\t" + s);
		}
		
		// TODO: Use the Pattern and Matcher classes to find and display all the e-mail addresses in the string below
		String s3 = "Emails: joe@yahoo.com; matt@gmail.com, test@daugherty.com";
		System.out.println("\nUse the Pattern and Matcher classes to find and display all the e-mail addresses in the string below");
		System.out.println("\tEmails: joe@yahoo.com; matt@gmail.com, test@daugherty.com");
		// Set the pattern: 1+ word character, an @, 1+ word character, a ., and 2-6 letters
		Pattern pattern = Pattern.compile("[\\w\\._-]+\\@[\\w.-]+\\.[a-z\\.]{2,6}");
		Matcher matcher = pattern.matcher(s3);
		// Pulls the matched patterns from  the original string
		while(matcher.find()) {
			String email = matcher.group();
			System.out.println("\t" + email);
		}
	}
}