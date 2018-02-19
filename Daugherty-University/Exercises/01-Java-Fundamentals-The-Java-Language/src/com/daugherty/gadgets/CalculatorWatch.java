package com.daugherty.gadgets;

import com.daugherty.math.ICalculator;
import com.daugherty.time.IWatch;

public class CalculatorWatch {
    // Method
    // Return the sum of passed numbers
    public int calculateAdd(int numOne, int numTwo) {
        return numOne + numTwo;
    }
    // Return the Current UNIX Epoch Time
    public long getUNIXEpochTime() {
        return System.currentTimeMillis();
    }
}
