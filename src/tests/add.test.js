const add = (a, b) => a + b;

const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;

test("should add two numbers", () => {
  const result = add(4, 3);
  expect(result).toBe(7);
});

test("generateGreeting should return Hello with associated name", () => {
  const result = generateGreeting("Paul");
  expect(result).toBe(`Hello Paul!`);
});

test("should generate greeting with no name", () => {
  const result = generateGreeting();
  expect(result).toBe("Hello Anonymous!");
});
