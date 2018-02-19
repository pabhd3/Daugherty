# Coding Challenge 03, February 16, 2018

### 1)

We define a moodified Fibonacci sequence using the following definition:

&nbsp;&nbsp;&nbsp;&nbsp;Given terms *t<sub>i</sub>* and *t<sub>i + 1</sub>* where *i ∈ [1, ∞]* , term *t<sub>i + 2</sub>* is computed using the following relation:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*t<sub>i + 2</sub> = t<sub>i</sub> + (t<sub>i + 1</sub>)<sup>2</sup>*

For example, if term *t<sub>1</sub> = 0* and *t<sub>2</sub> = 1*, term *t<sub>3</sub> = 0 + 1<sup>2</sup> = 1*, term *t<sub>4</sub> = 1 + 1<sup>2</sup> = 2*, term *t<sub>5</sub> = 1 + 2<sup>2</sup> = 5*, and so on.

Given three integers, *t<sub>1</sub>*, *t<sub>2</sub>*, and *n*, compute and print term *t<sub>n</sub>* of a modified Fibonacci sequence.

**Note:** The value of *t<sub>n</sub>* may far exceed the range of a 64-bit integer. Many submission languages have libraries that can handle such large results but, for those that don't (e.g. C++), you will need to be more creative in your solution to compensate for the limitation of your chosen submission language.

**Input Format:** A single line of three space-separated integers describing the respective values of *t<sub>1</sub>*, *t<sub>2</sub>*, and *n*.

**Constraints:**

* 0 ≤ *t<sub>1</sub>*, *t<sub>2</sub>* ≤ 2
* 3 ≤ *n* ≤ 20
* *t<sub>n</sub>* may far exceed the range of a 64-bit integer.

**Output Format**

Print a single integer denoting the value of term *t<sub>n</sub>* in the modified Fibonacci sequence where the first two terms are *t<sub>1</sub>* and *t<sub>2</sub>*.

**Sample Input**

    0 1 5
    
**Sample Output**
    
    5

**Explanation**

The first two terms of the sequence are *t<sub>1</sub> = 0* and *t<sub>2</sub> = 1*, which gives us a modified Fibonacci sequence of *{0, 1, 1, 2, 5, 27}*. Because *n = 5*, we print *t<sub>5</sub>*, which is 5.

### 2)

[Substitution Cipher](https://plnkr.co/edit/7tsP0DAs5NZISDN8SZJi?p=preview) Submitted by Chris Marfia.

### 3)

The creativity challenge is to rebuild/wireframe a new daugherty.com website mainpage. Everyone should put their own creative spin on it. You can either use a wireframing application or spin up a local app with create-react-app/vue-cli/etc. This can either be done in groups of two or alone. At 12:40, I will have two outside judges come in to review the wireframes/apps. The winner is decided by them.