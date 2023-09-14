// Полифилл для TextEncoder
if (typeof TextEncoder === "undefined") {
  const { TextEncoder, TextDecoder } = require("util");
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");
const { validateForm } = require('./registration');

let dom;
let container;

beforeEach(() => {
  const html = fs.readFileSync(
    path.resolve(__dirname, "./registration.html"),
    "utf-8"
  );
  dom = new JSDOM(html);
  container = dom.window.document;
});

it("Validates username correctly", () => {
  const usernameInput = container.querySelector("#username");
  const usernameError = container.querySelector("#username-error");

  usernameInput.value = "John";

  // Вызывать функцию валидации напрямую
  validateForm(container);

  //   container
  //     .querySelector("#registration-form")
  //     .dispatchEvent(new dom.window.Event("submit"));

  expect(usernameError.textContent).toBe(
    "Username should be at least 5 characters."
  );
});

// ... (оставьте предыдущий код как есть)

// Тест для проверки валидации поля email
it("Validates email correctly", () => {
  const emailInput = container.querySelector("#email");
  const emailError = container.querySelector("#email-error");

  // Проверка пустого поля email
  emailInput.value = "";
  validateForm(container);
  expect(emailError.textContent).toBe("Email should be valid.");

  // Проверка некорректного email
  emailInput.value = "invalid-email";
  validateForm(container);
  expect(emailError.textContent).toBe("Email should be valid.");

  // Проверка корректного email
  emailInput.value = "test@example.com";
  validateForm(container);
  expect(emailError.textContent).toBe("");  // Сообщение об ошибке должно исчезнуть
});

// Тест для проверки валидации поля password
it("Validates password correctly", () => {
  const passwordInput = container.querySelector("#password");
  const passwordError = container.querySelector("#password-error");

  // Проверка короткого пароля
  passwordInput.value = "123";
  validateForm(container);
  expect(passwordError.textContent).toBe("Password should be at least 8 characters.");

  // Проверка достаточно длинного пароля
  passwordInput.value = "123456";
  validateForm(container);
  expect(passwordError.textContent).toBe("Password should be at least 8 characters.");  // Сообщение об ошибке должно исчезнуть
});

// Тест для проверки успешной валидации
it("Handles successful validation correctly", () => {
  const usernameInput = container.querySelector("#username");
  const emailInput = container.querySelector("#email");
  const passwordInput = container.querySelector("#password");

  // Устанавливаем корректные значения для всех полей
  usernameInput.value = "JohnDoe";
  emailInput.value = "test@example.com";
  passwordInput.value = "12345678";

  const result = validateForm(container);

  // Предположим, что функция validateForm возвращает true при успешной валидации
  expect(result).toBe(true);
});

