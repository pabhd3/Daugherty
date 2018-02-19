def generateKey(keyword):
    ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    KEY = ""
    # Key used to encrypt the plaintext
    for letter in keyword:
        if(letter.upper() not in KEY):
            KEY += letter.upper()

    # Create the encryption key using the key word
    for letter in ALPHABET:
        if(letter not in KEY):
            KEY += letter

    return KEY


def substitutionEncryption(keyword, plaintext):
    ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    ciphertext = ""
    KEY = generateKey(keyword)

    for letter in plaintext:
        if letter.isalpha():
            # If so, get its index from the original alphabet
            index = ALPHABET.find(letter.upper())
            # Add its substituted letter using the index and
            #     the key we generated
            ciphertext += KEY[index]

    count = 0
    ciphertextFormatted = ""
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
        ciphertextFormatted += letter
        count += 1
    return ciphertextFormatted


def substitutionDecryption(keyword, ciphertext):
    ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    plaintext = ""
    KEY = generateKey(keyword)

    for letter in ciphertext:
        if(letter.isalpha()):
            # Get its index in the KEY
            index = KEY.find(letter.upper())
            # And add the plaintext using the index and the alphabet
            plaintext += ALPHABET[index]
    return plaintext

def main():
    print(substitutionEncryption("happy", "abcdefghijklmnopqrstuvwxyz"))
    print(substitutionDecryption("happy", "SUBDE RMATO GLYPH ICFJK NQVWXZ"))

if __name__ == '__main__':
    main()