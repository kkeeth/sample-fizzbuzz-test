const judgeFizzBuzz = require("./judgeFizzBuzz");

describe("数を受け取って変換する", () => {
  test("1 を渡したら、文字列 1 を返す", () => {
    expect(judgeFizzBuzz(1)).toBe("1");
  });

  test("2 を渡したら、文字列 2 を返す", () => {
    expect(judgeFizzBuzz(2)).toBe("2");
  });

  test("3 を渡したら、文字列 Fizz を返す", () => {
    expect(judgeFizzBuzz(3)).toBe("Fizz");
  });

  test("5 を渡したら、文字列 Buzz を返す", () => {
    expect(judgeFizzBuzz(5)).toBe("Buzz");
  });

  test("6 を渡したら、文字列 Fizz を返す", () => {
    expect(judgeFizzBuzz(6)).toBe("Fizz");
  });

  test("10 を渡したら、文字列 Buzz を返す", () => {
    expect(judgeFizzBuzz(10)).toBe("Buzz");
  });

  test("15 を渡したら、文字列 FizzBuzz を返す", () => {
    expect(judgeFizzBuzz(15)).toBe("FizzBuzz");
  });

  test("30 を渡したら、文字列 FizzBuzz を返す", () => {
    expect(judgeFizzBuzz(30)).toBe("FizzBuzz");
  });
});
