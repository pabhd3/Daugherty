
// TODO: implement the Comparable interface to compare fruit by name
public class Fruit implements Comparable {

	private String name;
	
	public Fruit(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return name; 
	}

	@Override
	public int compareTo(Object o) {
		Fruit fruit = (Fruit) o;
		return name.compareTo(fruit.name);
	}
	
}
