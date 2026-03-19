from main import greet


def test_greet_returns_greeting() -> None:
    assert greet("World") == "Hello, World!"


def test_greet_uses_provided_name() -> None:
    assert greet("Alice") == "Hello, Alice!"
