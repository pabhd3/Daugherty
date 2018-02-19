import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.TreeSet;

public class Main {

	public static void main(String[] args) {
		
		simpleArrayList();
		
		genericArrayList();
		
		overridingEqualsMethod();
		
		lambdaExpressions();
		
		convertingArrayListToArray();
		
		sortingUsingComparableInterface();
		
		sortingUsingComparatorInterface();
	}

	//-----------------------------------
	// 1. Simple ArrayList
	//-----------------------------------
	private static void simpleArrayList() {
		System.out.println("Simple ArrayList");
		// TODO: create an ArrayList
		ArrayList<? super Object> simpleArrayList = new ArrayList();

		// TODO: add "Foo" and "Bar" strings to your ArrayList
		simpleArrayList.add("Foo");
		simpleArrayList.add("Bar");
		
		// TODO: Use the get(...) method to get the first element in the ArrayList as a String
		System.out.println(simpleArrayList.get(0));
	}


	//-----------------------------------
	// 2. Generic ArrayList
	//-----------------------------------
	private static void genericArrayList() {
		System.out.println("\nGeneric ArrayList");
		// TODO: Create a Generic ArrayList of type String
		ArrayList<String> genericArrayList = new ArrayList<>();
		
		// TODO: Add "Foo" and "Bar" strings to the list
		genericArrayList.add("Foo");
		genericArrayList.add("Bar");
				
		// TODO: Print out all the items in the list
		for(String item : genericArrayList)
			System.out.println(item);
		
		// TODO: Print out the size of the list
		System.out.println(genericArrayList.size());
	}
	

	//-----------------------------------
	// 3. Overriding equals() method
	//-----------------------------------
	private static void overridingEqualsMethod() {
		System.out.println("\nOverriding equals() method");
		// TODO: modify the Person class and override the equals method.
		//       Person objects with the same ssn should return true
		// HINT: In Spring Tool Suite, right click on the class name -> Source -> Override / Implement Methods
		
		
		// Adding some people to the person list
		ArrayList<Person> personList = new ArrayList<>();
		personList.add(new Person("John", "Doe", "555-55-5555"));
		personList.add(new Person("John", "Doe", "666-66-6666"));
				
		// Remove a person from the list
		Person personToRemove = new Person("John", "Doe", "555-55-5555");
		personList.remove(personToRemove);
		
		// Display people in the person list
		System.out.println("People in personList:");
		for(Person person : personList) {
			System.out.println(person);
		}
	}

	//-----------------------------------
	// 4. Lambda expressions
	//-----------------------------------
	private static void lambdaExpressions() {
		System.out.println("\nLambda expressions");
		
		ArrayList<Person> personList = new ArrayList<>();
		personList.add(new Person("John", "Doe", "555-55-5555"));
		personList.add(new Person("Jane", "Doe", "777-77-7777"));
		System.out.println("People in list2:");
		
		// TODO: use the forEach method on the personList and a lamba expression to display
		// all the people in the personList
		personList.forEach(item-> System.out.println(item.toString()));
		
	}
	
	//-----------------------------------
	// 5. Converting ArrayList to an Array
	//-----------------------------------
	private static void convertingArrayListToArray() {
		System.out.println("\nConverting ArrayList to an Array");
		// Constructing an ArrayList of Persons
		ArrayList<Person> personList = new ArrayList<>();
		personList.add(new Person("John", "Doe", "555-55-5555"));
		personList.add(new Person("Jane", "Doe", "777-77-7777"));
		
		// TODO: Convert the personList to an array and then display the people
		Person[] personArr = new Person[personList.size()];
		personArr = personList.toArray(personArr);
		for(Person p : personArr) {System.out.println(p.toString());}
	}
	
	//-----------------------------------
	// 6. Sorting using Comparable interface
	//-----------------------------------
	private static void sortingUsingComparableInterface() {
		System.out.println("\nSorting using Comparable interface");
		// TODO: implement the Comparable<> interface on the Fruit class and compare by the fruit name
		TreeSet<Fruit> fruits = new TreeSet<>();
		fruits.add(new Fruit("Orange"));
		fruits.add(new Fruit("Apple"));
		fruits.add(new Fruit("Pear"));
		fruits.add(new Fruit("Pineapple"));
		System.out.println("Fruits:");
		for(Fruit fruit : fruits) {
			System.out.println(fruit);
		}
	}
	
	//-----------------------------------
	// 7. Sorting using the Comparator interface
	//-----------------------------------

	private static void sortingUsingComparatorInterface() {
		System.out.println("\nSorting using the Comparator interface");
		// TODO: Create a new class PersonComparator and implement the Comparator interface
		// to compare by the person's last name
		TreeSet<Person> sortablePersonList = new TreeSet<>(new PersonComparator());
		sortablePersonList.add(new Person("Ted", "Zeiler", "777-77-7777"));
		sortablePersonList.add(new Person("John", "Doe", "555-55-5555"));
		sortablePersonList.add(new Person("Jane", "Day", "777-77-7777"));
		System.out.println("Sortable Person List: ");
		for(Person person : sortablePersonList) {
			System.out.println(person);
		}
	}
}