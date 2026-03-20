import pytest

from main import greet, main, parse_name_arg


def test_greet_returns_greeting() -> None:
    assert greet("World") == "Hello, World!"


def test_greet_uses_provided_name() -> None:
    assert greet("Alice") == "Hello, Alice!"


def test_greet_normalizes_whitespace() -> None:
    assert greet("  Alice  ") == "Hello, Alice!"


def test_greet_rejects_empty_names() -> None:
    with pytest.raises(ValueError, match="at least one non-whitespace"):
        greet("   ")


def test_parse_name_arg_uses_positional_argument() -> None:
    assert parse_name_arg(["Alice"]) == "Alice"


def test_parse_name_arg_defaults_to_world() -> None:
    assert parse_name_arg([]) == "World"


def test_main_returns_error_code_for_invalid_name(capsys: pytest.CaptureFixture[str]) -> None:
    assert main(["   "]) == 1
    captured = capsys.readouterr()
    assert "Error:" in captured.err


def test_main_prints_greeting_for_valid_name(capsys: pytest.CaptureFixture[str]) -> None:
    assert main([" Alice "]) == 0
    captured = capsys.readouterr()
    assert captured.out.strip() == "Hello, Alice!"
