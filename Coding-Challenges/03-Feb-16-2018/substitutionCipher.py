def substitutionEncryption(keyword, plaintext):
    # Base alphabet used to make our key
    ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    # Key used to encrypt the plaintext
    KEY = keyword.upper()

    # Create the encryption key using the key word
    # For each letter in the normal alphabet
    for letter in ALPHABET:
        # If it wasn't in the keyword
        if(letter not in KEY):
            # Add it to the key
            KEY += letter

    ciphertext = ""

    # For each character in the plaintext message
    for letter in plaintext:
        # Check if it a letter
        if letter.isalpha():
            # If so, get its index from the original alphabet
            index = ALPHABET.find(letter.upper())
            # Add its substituted letter using the index and
            #     the key we generated
            ciphertext += KEY[index]
    # We need to format the ciphertext
    count = 0
    ciphertextFormatted = ""
    # For each letter in the cipher text
    for letter in ciphertext:
        # We can only have 5 characters at a time
        if(count % 5 == 0 and count != 0):
            ciphertextFormatted += " "
        # And we can only have 5 sets of 5 characters on a line
        if(count % 25 == 0 and count != 0):
            ciphertextFormatted += "\n"
        # And a block can only have 250 characters in it
        if(count % 250 == 0 and count != 0):
            ciphertextFormatted += "\n"
        # Add the letter
        ciphertextFormatted += letter
        # And increase the count
        count += 1
    # And we're done
    return ciphertextFormatted

def substitutionDecryption(keyword, ciphertext):
    # Base alphabet used to make our key
    ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    # Key used to encrypt the plaintext
    KEY = keyword.upper()

    # Create the encryption key using the key word
    # For each letter in the normal alphabet
    for letter in ALPHABET:
        # If it wasn't in the keyword
        if(letter not in KEY):
            # Add it to the key
            KEY += letter

    plaintext = ""
    # For each character in our ciphertext
    for letter in ciphertext:
        # If the character is a letter
        if(letter.isalpha()):
            # Get its index in the KEY
            index = KEY.find(letter.upper())
            # And add the plaintext using the index and the alphabet
            plaintext += ALPHABET[index]
    # And we're done
    return plaintext

# Set up the main
def main():
    print(substitutionEncryption("zebras", "abcdefghijklmnopqrstuvwxyz"))
    print(substitutionDecryption("zebras", "ZEBRA SCDFG HIJKL MNOPQ TUVWX\nY"))

if __name__ == '__main__':
    main()