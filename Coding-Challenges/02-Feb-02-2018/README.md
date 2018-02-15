# Coding Challenge 02, February 02, 2018
Rules: For this challenge, work alone or with only one other person. You cannot use canvases for the CSS problem.

### 1) Is the word an isogram?
An Isogram is a word that has no repeating letters, consecutive or nonconsecutive. Create a function that takes a string and returns either true or false depending on whether or not it’s an isogram.

##### **Examples**

**Input**: unit ---> **Response**: true

**Input**: daugherty ---> **Response**: true

**Input**: banana ---> **Response**: false

### 2) Is there a path? Find it...

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0 \-\-\- 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 \-\-\- 6 \-\-\- 7

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 \-\-\- 2 \-\-\- 4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8 \-\-\- 9 \-\-\- 10

You can intuitively see that there is a path from 0 to 4, but not 0 to 5. Can you write a function that takes two numbers and an array of linked pairs and return whether or not there exists a path between two nodes? The question and test pairs can be found at https://plnkr.co/edit/ZpJJvJiqnzFcjRraauee?p=preview. This problem was designed by Andrew Maxwell.

### 3) CSS Magic. Make it happen
The idea of this last problem is to be able to input a word and return the word using CSS. More precisely, you cannot use the typed alphabet (A,B,C…). You must ‘draw’ the letters. Use Codepen, plunkr, etc. and share the link in the coding-challenge slack channel.
