# Daugherty Coding Challenge 02, Friday February 02, 2018
# Challenge #1: Is the word an isogram?
#     Create a functions that takes a string and returns either true or false
#     depending on whether or not its an isogram.

import argparse


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


def main():
    # Set up Argparse
    parser = argparse.ArgumentParser(description='Check if word is an isogram')
    parser.add_argument('word', metavar='Word', type=str,
                        help='Word to test is an isogram')
    args = parser.parse_args()

    print("\n", args.word, "-", isogramChecker(args.word))


if __name__ == '__main__':
    main()
