public class Glass {
    // Members
    private float maxGallons;
    private float currentGallons;

    // Constructor
    public Glass(float maxGallons) {
        this.maxGallons = maxGallons;
    }

    // Methods
    public void addWater(float gallonsToAdd) throws GlassOverflownException {
        if(gallonsToAdd+this.currentGallons > this.maxGallons) {
            float spilt = (gallonsToAdd + this.currentGallons) - this.maxGallons;
            String msg = "glass capacity exceeded; you have spilt " + spilt + " gallons";
            throw new GlassOverflownException(msg);
        } else {
            this.currentGallons += gallonsToAdd;
        }
    }
}
