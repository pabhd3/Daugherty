import java.io.*;
import java.nio.file.Files;
import java.nio.file.OpenOption;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.ArrayList;
import java.util.List;

import javax.management.openmbean.OpenMBeanOperationInfoSupport;

public class Main {

	public static void main(String[] args) {
		
		List<String> lines1 = readLines("InputFile1.txt");
		List<String> lines2 = readLines("InputFile2.txt");
		appendLines("OutputFile.txt", lines1);
		appendLines("OutputFile.txt", lines2);
	}
	
	private static List<String> readLines(String inputFile) {
		// TODO: use a BufferedReader to read data from the inputFile and then returns all the lines
		// HINT: did you implement a try-with-resources block to automatically close the reader?
		// HINT: did you implement a catch block?
		List<String> lines = new ArrayList<>();

		// Try to open the file
		try (BufferedReader read = new BufferedReader(new FileReader(inputFile))) {
			String eachLine = null;
			// While there is more to read
			while((eachLine = read.readLine()) != null) {
				lines.add(eachLine);
			}
			// Close the reader
			read.close();
		} // Handle Exceptions
		catch (IOException err) {
			System.out.println(err);
		}
		return lines;
	}
	
	private static void appendLines(String outputFile, List<String> lines) {
		// TODO: Use a BufferedWriter to write out all the lines to the output file.
		//       If outputFile does not exist, create it
		//       If outputFile does exist, append it
		// HINT: did you implement a try-with-resources block to automatically close the writer?
		// HINT: did you implement a catch block?

		try (BufferedWriter write = new BufferedWriter(new FileWriter(outputFile, true))) {
			File file = new File(outputFile);
			// Check if file exists
			if (!file.exists()) {
				// Create if it doesn't
				System.out.println("File Created");
				file.createNewFile();
			}

			// Append each line to file
			for(String line : lines) {
				write.write(line);
				write.newLine();
				System.out.println(line);
			}
			// Close the writer
			write.close();
		} // Catch any Exceptions
		catch (IOException err) {
			System.out.println(err);
		}
	}
}
