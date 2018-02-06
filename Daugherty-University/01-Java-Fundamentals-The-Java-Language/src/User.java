// Declaration of User Class Exercise
public class User {
    // Class members
    private String name;
    private int score;

    // Getter and Setter Methods
    public String getName() {
        return this.name;
    }
    public void setName(String newName) {
        this.name = newName;
    }
    public int getScore() {
        return this.score;
    }
    public void setScore(int newScore) {
        this.score = newScore;
    }

    // Empty Default Constructor
    public User() {}

    // Increment Method
    public void increaseScoreByOne() {
        this.score++;
    }
}
