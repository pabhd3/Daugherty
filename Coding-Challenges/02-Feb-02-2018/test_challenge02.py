import pytest
from challenge02 import doesPathExist

print("Graph Used:\n")
print("0---1       5---6---7\n|   |       |   |   |\n3---2---4   8---9---10")

linkedPairs = [[1, 3], [0, 2], [1, 3, 4], [0, 2], [2], [6, 8],
               [5, 7, 9], [6, 10], [5, 9], [6, 8, 10], [7, 9]]

def test_0_to_1():
    visitedNodes = []
    assert doesPathExist(0, 1, linkedPairs, visitedNodes)[0] == True

def test_0_to_2():
    visitedNodes = []
    assert doesPathExist(0, 2, linkedPairs, visitedNodes)[0] == True

def test_0_to_3():
    visitedNodes = []
    assert doesPathExist(0, 3, linkedPairs, visitedNodes)[0] == True

def test_0_to_4():
    visitedNodes = []
    assert doesPathExist(0, 4, linkedPairs, visitedNodes)[0] == True

def test_0_to_5():
    visitedNodes = []
    assert doesPathExist(0, 5, linkedPairs, visitedNodes)[0] == False

def test_0_to_6():
    visitedNodes = []
    assert doesPathExist(0, 6, linkedPairs, visitedNodes)[0] == False

def test_0_to_7():
    visitedNodes = []
    assert doesPathExist(0, 7, linkedPairs, visitedNodes)[0] == False

def test_0_to_8():
    visitedNodes = []
    assert doesPathExist(0, 8, linkedPairs, visitedNodes)[0] == False

def test_0_to_9():
    visitedNodes = []
    assert doesPathExist(0, 9, linkedPairs, visitedNodes)[0] == False

def test_0_to_10():
    visitedNodes = []
    assert doesPathExist(0, 10, linkedPairs, visitedNodes)[0] == False

def test_1_to_2():
    visitedNodes = []
    assert doesPathExist(1, 2, linkedPairs, visitedNodes)[0] == True

def test_1_to_3():
    visitedNodes = []
    assert doesPathExist(1, 3, linkedPairs, visitedNodes)[0] == True

def test_1_to_4():
    visitedNodes = []
    assert doesPathExist(1, 4, linkedPairs, visitedNodes)[0] == True

def test_1_to_5():
    visitedNodes = []
    assert doesPathExist(1, 5, linkedPairs, visitedNodes)[0] == False

def test_1_to_6():
    visitedNodes = []
    assert doesPathExist(1, 6, linkedPairs, visitedNodes)[0] == False

def test_1_to_7():
    visitedNodes = []
    assert doesPathExist(1, 7, linkedPairs, visitedNodes)[0] == False

def test_1_to_8():
    visitedNodes = []
    assert doesPathExist(1, 8, linkedPairs, visitedNodes)[0] == False

def test_1_to_9():
    visitedNodes = []
    assert doesPathExist(1, 9, linkedPairs, visitedNodes)[0] == False

def test_1_to_10():
    visitedNodes = []
    assert doesPathExist(1, 10, linkedPairs, visitedNodes)[0] == False

def test_2_to_3():
    visitedNodes = []
    assert doesPathExist(2, 3, linkedPairs, visitedNodes)[0] == True

def test_2_to_4():
    visitedNodes = []
    assert doesPathExist(2, 4, linkedPairs, visitedNodes)[0] == True

def test_2_to_5():
    visitedNodes = []
    assert doesPathExist(2, 5, linkedPairs, visitedNodes)[0] == False

def test_2_to_6():
    visitedNodes = []
    assert doesPathExist(2, 6, linkedPairs, visitedNodes)[0] == False

def test_2_to_7():
    visitedNodes = []
    assert doesPathExist(2, 7, linkedPairs, visitedNodes)[0] == False

def test_2_to_8():
    visitedNodes = []
    assert doesPathExist(2, 8, linkedPairs, visitedNodes)[0] == False

def test_2_to_9():
    visitedNodes = []
    assert doesPathExist(2, 9, linkedPairs, visitedNodes)[0] == False

def test_2_to_10():
    visitedNodes = []
    assert doesPathExist(2, 10, linkedPairs, visitedNodes)[0] == False

def test_3_to_4():
    visitedNodes = []
    assert doesPathExist(3, 4, linkedPairs, visitedNodes)[0] == True

def test_3_to_5():
    visitedNodes = []
    assert doesPathExist(3, 5, linkedPairs, visitedNodes)[0] == False

def test_3_to_6():
    visitedNodes = []
    assert doesPathExist(3, 6, linkedPairs, visitedNodes)[0] == False

def test_3_to_7():
    visitedNodes = []
    assert doesPathExist(3, 7, linkedPairs, visitedNodes)[0] == False

def test_3_to_8():
    visitedNodes = []
    assert doesPathExist(3, 8, linkedPairs, visitedNodes)[0] == False

def test_3_to_9():
    visitedNodes = []
    assert doesPathExist(3, 9, linkedPairs, visitedNodes)[0] == False

def test_3_to_10():
    visitedNodes = []
    assert doesPathExist(3, 10, linkedPairs, visitedNodes)[0] == False

def test_4_to_5():
    visitedNodes = []
    assert doesPathExist(4, 5, linkedPairs, visitedNodes)[0] == False

def test_4_to_6():
    visitedNodes = []
    assert doesPathExist(4, 6, linkedPairs, visitedNodes)[0] == False

def test_4_to_7():
    visitedNodes = []
    assert doesPathExist(4, 7, linkedPairs, visitedNodes)[0] == False

def test_4_to_8():
    visitedNodes = []
    assert doesPathExist(4, 8, linkedPairs, visitedNodes)[0] == False

def test_4_to_9():
    visitedNodes = []
    assert doesPathExist(4, 9, linkedPairs, visitedNodes)[0] == False

def test_4_to_10():
    visitedNodes = []
    assert doesPathExist(4, 10, linkedPairs, visitedNodes)[0] == False

def test_5_to_6():
    visitedNodes = []
    assert doesPathExist(5, 6, linkedPairs, visitedNodes)[0] == True

def test_5_to_7():
    visitedNodes = []
    assert doesPathExist(5, 7, linkedPairs, visitedNodes)[0] == True

def test_5_to_8():
    visitedNodes = []
    assert doesPathExist(5, 8, linkedPairs, visitedNodes)[0] == True

def test_5_to_9():
    visitedNodes = []
    assert doesPathExist(5, 9, linkedPairs, visitedNodes)[0] == True

def test_5_to_10():
    visitedNodes = []
    assert doesPathExist(5, 10, linkedPairs, visitedNodes)[0] == True

def test_6_to_7():
    visitedNodes = []
    assert doesPathExist(6, 7, linkedPairs, visitedNodes)[0] == True

def test_6_to_8():
    visitedNodes = []
    assert doesPathExist(6, 8, linkedPairs, visitedNodes)[0] == True

def test_6_to_9():
    visitedNodes = []
    assert doesPathExist(6, 9, linkedPairs, visitedNodes)[0] == True

def test_6_to_10():
    visitedNodes = []
    assert doesPathExist(6, 10, linkedPairs, visitedNodes)[0] == True

def test_7_to_8():
    visitedNodes = []
    assert doesPathExist(7, 8, linkedPairs, visitedNodes)[0] == True

def test_7_to_9():
    visitedNodes = []
    assert doesPathExist(7, 9, linkedPairs, visitedNodes)[0] == True

def test_7_to_10():
    visitedNodes = []
    assert doesPathExist(7, 10, linkedPairs, visitedNodes)[0] == True

def test_8_to_9():
    visitedNodes = []
    assert doesPathExist(8, 9, linkedPairs, visitedNodes)[0] == True

def test_8_to_10():
    visitedNodes = []
    assert doesPathExist(8, 10, linkedPairs, visitedNodes)[0] == True

def test_9_to_10():
    visitedNodes = []
    assert doesPathExist(9, 10, linkedPairs, visitedNodes)[0] == True