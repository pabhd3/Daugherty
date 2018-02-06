import java.util.Objects;

// Declaration for Class Inheritance Exercise: Employee Class
public class Employee {
    // Members
    private Integer idNumber;

    // Constructors
    // Set idNumber to passed idNumber
    public Employee(Integer idNumber) {
        this.idNumber = idNumber;
    }
    // Empty Constructor
    public Employee() {}

    // Methods
    // Returns idNumber
    public int getIdNumber() {
        return this.idNumber;
    }
    // Returns if calling object has Admin Rights
    public boolean hasAdministratorRights() {
        return false;
    }
    @Override
    // Override the Object.equals(Object o) method
    public boolean equals(Object o) {
        // Check for comparison against itself
        if (this == o) return true;
        // Check if its not null, and same class as calling object
        if (o == null || getClass() != o.getClass()) return false;
        // Cast it to an Employee
        Employee employee = (Employee) o;
        // Return if the idNumbers are the same or not
        return Objects.equals(idNumber, employee.idNumber);
    }
    @Override
    // Created during the Generation of Overriding equals method
    public int hashCode() {
        return Objects.hash(idNumber);
    }
}
