// Declaration for Multiple Constructors Exercise: Triangle Class
public class Triangle {
    // Members
    private float a; // Sides of triangle
    private float b;
    private float c;

    // Each Side Given Constructor
    public Triangle(float a, float b, float c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    // Equilateral Triangle Constructor
    public Triangle(float sideLength) {
        this.a = sideLength;
        this.b = sideLength;
        this.c = sideLength;
    }

    // Calclate Perimeter Method
    public float calculatePerimeter() {
        return this.a + this.b + this.c;
    }
}
