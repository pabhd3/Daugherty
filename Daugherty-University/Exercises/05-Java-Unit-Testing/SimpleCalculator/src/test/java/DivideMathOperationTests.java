import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class DivideMathOperationTests {
    private DivideMathOperation target;

    @Before
    public void init() { target = new DivideMathOperation(); }

    @Test
    public void calculate_addsNumbers_test() {
        Assert.assertEquals(2, target.calculate(4, 2), 0);
        Assert.assertEquals(25, target.calculate(100, 4), 0);
        Assert.assertEquals(500, target.calculate(1000, 2), 0);
        Assert.assertEquals(-8, target.calculate(-16, 2), 0);
        Assert.assertEquals(89547, target.calculate(268641, 3), 0);
        Assert.assertEquals(-70, target.calculate(-280, 4), 0);
    }
}
