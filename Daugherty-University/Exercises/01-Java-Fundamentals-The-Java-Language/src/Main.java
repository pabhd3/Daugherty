import com.daugherty.gadgets.CalculatorWatch;

public class Main {

    // Declaration of Calculate Circle Area Exercise
    public static void calculateCircleArea (double radius){
        System.out.println("\tRadius: " + radius);
        // Actual Calculation: A = pi*r^2
        double area = radius * radius * Math.PI;
        System.out.println("\tArea: " + area + "\n");
    }

    // Declaration of Polygon Perimeter Exercise
    public static void calculatePerimeter(float[] sides) {
        // Get the number of sides
        int numSides = sides.length;
        // Initialize Perimeter to 0
        float perimeter = 0;
        for (int i=0; i<numSides; i++) {
            // Output formatting
            if (i==0) {
                System.out.print("\tSides: " + sides[i]);
            } else {
                System.out.print(", " + sides[i]);
            }
            // Add each side length to perimeter
            perimeter += sides[i];
        }
        System.out.println("\n\tPerimeter: " + perimeter + "\n");
    }

    public static void main(String[] args) {
        /* --------------------
        ----- Exercise 01 -----
        -------------------- */
	    System.out.println("01 Circle Area Exercise");
	    calculateCircleArea(15.5);

	    /* --------------------
        ----- Exercise 02 -----
        -------------------- */
        System.out.println("02 Polygon Perimeter Exercise");
        // Make a Pentagon
        float[] polygonSideLengths = {7.5f, 10.4f, 3.7f, 16f, 20f};
        calculatePerimeter(polygonSideLengths);

        /* --------------------
        ----- Exercise 03 -----
        -------------------- */
        System.out.println("03 User Class Exercise");
        // Make a new user
        User sampleUser = new User();
        // Give them a name
        sampleUser.setName("Henry");
        // Set their score
        sampleUser.setScore(1336);
        sampleUser.increaseScoreByOne();
        System.out.println("\tUser " + sampleUser.getName() + " has a score of " + sampleUser.getScore() + "\n");

        /* --------------------
        ----- Exercise 04 -----
        -------------------- */
        System.out.println("04 Multiple Constructors Exercise: Triangle Class");
        // Make a scalene triangle
        Triangle scaleneTriangle = new Triangle(10, 9, 7.5f);
        float scaleneTrianglePerimeter = scaleneTriangle.calculatePerimeter();
        System.out.println("\tScalene triangle perimeter = " + scaleneTrianglePerimeter);
        // Make an equalateral triangle
        Triangle equilateralTriangle = new Triangle(10);
        float equilateralTrianglePerimeter = equilateralTriangle.calculatePerimeter();
        System.out.println("\tEquilateral triangle perimeter = " + equilateralTrianglePerimeter + "\n");

        /* --------------------
        ----- Exercise 05 -----
        -------------------- */
        System.out.println("05 Method Overload Exercise: Shopping Cart Class");
        // Make a shopping cart
        ShoppingCart shoppingCart = new ShoppingCart();
        // Make some items
        Item item1 = new Item(10.5f);
        Item item2 = new Item(20.75f);
        Item item3 = new Item(9.99f);
        Item item4 = new Item(14f);
        Item item5 = new Item(100f);
        Item item6 = new Item(55.5f);
        // Add items to the cart
        shoppingCart.addItems(item1);
        shoppingCart.addItems(item2, item3, item4, item5, item6);
        shoppingCart.addItems(33.5f);
        shoppingCart.addItems(50f, 2);

        System.out.println("\t" + shoppingCart.getNumberOfItems() + " items were added, "
                + "with a total price of $" + shoppingCart.getTotalPrice() + "\n");

        /* --------------------
        ----- Exercise 06 -----
        -------------------- */
        System.out.println("06 Class Inheritance Exercise: Employee Class");
        // Make an Employee, and give them an ID number
        Employee worker = new Employee(1);
        // Make a Boss, and give them an ID number
        Employee theBoss = new Manager(2);
        System.out.println("\tAre these employees the same? " + worker.equals(theBoss));
        // Make another boss, and give them an ID number
        Employee anEqualBoss = new Manager(2);
        System.out.println("\tAre these employees the same? " + theBoss.equals(anEqualBoss));
        System.out.println("\tHas The Boss admin rights? " + theBoss.hasAdministratorRights() + "\n");

        /* --------------------
        ----- Exercise 07 -----
        -------------------- */
        System.out.println("07 Exceptions: Glass Class");
        // Make a glass and put some water in it
        Glass hugeGlass = new Glass(1.5f);
        try{
            // Try to add more water
            hugeGlass.addWater(20f);
        } catch(GlassOverflownException e) {
            // Catch an Overflown Exception
            System.out.println("\t" + e + "\n");
        }

        /* --------------------
        ----- Exercise 08 -----
        -------------------- */
        System.out.println("08 Packages and Interfaces: Building a Calculator Watch");
        // Make a new calculator watch
        CalculatorWatch calculatorWatch = new CalculatorWatch();
        // Have it perform a calculation
        int addedNumbers = calculatorWatch.calculateAdd(2, 2);
        // Have it get the time
        long currentUNIXTime = calculatorWatch.getUNIXEpochTime();

        System.out.println("\tThe result of the addition is " + addedNumbers + " and the current UNIX time is " + currentUNIXTime);

    }
}
