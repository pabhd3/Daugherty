// Declaration of Method Overload Exercise: Shopping Cart Class
public class ShoppingCart {
    private float totalPrice;
    private int numberOfItems;

    public float getTotalPrice() {
        return totalPrice;
    }

    public int getNumberOfItems() {
        return numberOfItems;
    }

    // New Methods
    public void addItems(float price, int numberOfItems) {
        this.totalPrice += price;
        this.numberOfItems += numberOfItems;
    }
    public void addItems(float price) {
        this.totalPrice += price;
        this.numberOfItems++;
    }
    public void addItems(Item item) {
        this.totalPrice += item.getPrice();
        this.numberOfItems++;
    }
    public void addItems(Item... list) {
        int numItems = list.length;
        for(int i=0; i<numItems; i++) {
            this.totalPrice += list[i].getPrice();
            this.numberOfItems++;
        }
    }
}
