import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "src"))

from main import greet


def test_greet_returns_greeting() -> None:
    assert greet("World") == "Hello, World!"


def test_greet_uses_provided_name() -> None:
    assert greet("Alice") == "Hello, Alice!"
