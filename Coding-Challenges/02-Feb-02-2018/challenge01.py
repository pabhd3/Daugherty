# Daugherty Coding Challenge 02, Friday February 02, 2018
# Challenge #1: Is the word an isogram?
#     Create a functions that takes a string and returns either true or false
#     depending on whether or not its an isogram.

word1 = "unit"
word2 = "daugherty"
word3 = "bananna"

def isogramChecker(word):
    # Set empty list of used letters
    letters = []
    # Assume the word is an isogram
    isIsogram = True
    # For each letter in the word
    for letter in word:
        # Check if its been used
        if(letter.capitalize() in letters):
            # If it has, the word isn't an isogram
            isIsogram = False
            break
        # If it has, add letter to used list and continue
        letters.append(letter.capitalize())
    return isIsogram

print("Isogram Checker\n")
print(word1 + " - ", isogramChecker(word1))
print(word2 + " - ", isogramChecker(word2))
print(word3 + " - ", isogramChecker(word3))