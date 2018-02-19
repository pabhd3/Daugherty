import java.util.Comparator;

// TODO: implement the Comparator interface to compare by a Person's last name
public class PersonComparator implements Comparator{

    @Override
    public int compare(Object o1, Object o2) {
        Person personOne = (Person) o1;
        Person personTwo = (Person) o2;
        return personOne.getLastName().compareTo(personTwo.getLastName());
    }
}

