// Declaration for Class Inheritance Exercise: Manager Class
public class Manager extends Employee {
    // Constructor
    public Manager(int idNumber){
        super(idNumber);
    }

    // Manager Specific Method
    public boolean hasAdministratorRights() {
        return true;
    }
}
