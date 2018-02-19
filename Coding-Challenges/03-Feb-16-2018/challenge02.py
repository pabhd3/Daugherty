def substitutionEncryption(plaintext):
    KEY = {"A": "Z", "B": "E", "C": "B", "D": "R", "E": "A",
           "F": "S", "G": "C", "H": "D", "I": "F", "J": "G",
           "K": "H", "L": "I", "M": "J", "N": "K", "O": "L",
           "P": "M", "Q": "N", "R": "O", "S": "P", "T": "Q",
           "U": "T", "V": "U", "W": "V", "X": "W", "Y": "X", "Z": "Y"}
    
    ciphertext = ""

    for letter in plaintext:
        if letter.isalpha():
            ciphertext += KEY[letter.capitalize()]
    
    count = 0
    ciphertextFormatted = ""
    for letter in ciphertext:
        if(count % 5 == 0 and count != 0):
            ciphertextFormatted += " "
        ciphertextFormatted += letter
        count += 1

    return ciphertextFormatted

def substitutionDecryption(ciphertext):
    KEY = {"A": "Z", "B": "E", "C": "B", "D": "R", "E": "A",
           "F": "S", "G": "C", "H": "D", "I": "F", "J": "G",
           "K": "H", "L": "I", "M": "J", "N": "K", "O": "L",
           "P": "M", "Q": "N", "R": "O", "S": "P", "T": "Q",
           "U": "T", "V": "U", "W": "V", "X": "W", "Y": "X", "Z": "Y"}
    plaintext = ""
    
    for letter in ciphertext:
        if(letter.isalnum()):
            count = 0
            for key in KEY:
                if(letter.capitalize() == KEY[key]):
                    plaintext += key
    return plaintext

print(substitutionEncryption("flee at once. we are discovered!"))
print(substitutionDecryption("SIAAZ QLKBA VAZOA RFPBL UAOAR"))
