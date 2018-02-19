import pytest
from challenge01 import isogramChecker


def test_one_letter_word():
    assert isogramChecker("I") == True


def test_consecutive_letters():
    assert isogramChecker("Apple") == False


def test_non_consecutive_letters():
    assert isogramChecker("Test") == False


def test_no_repeats():
    assert isogramChecker("Isogram") == True
