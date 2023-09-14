// npm install --save-dev jest-environment-jsdom

// module.exports = {
//   // ...остальные настройки
//   testEnvironment: "jsdom",
// };

// jest index -u  ---------- update snapshot!

const fs = require("fs");
const path = require("path");

test("simple-page snapshot", () => {
  // Чтение HTML-файла и его содержимого
  const htmlString = fs.readFileSync(
    path.resolve(__dirname, "./index.html"),
    "utf8"
  );

  // Устанавливаем HTML-строку в JSDOM
  document.documentElement.innerHTML = htmlString.toString();

  // Сохраняем снимок
  expect(document.documentElement).toMatchSnapshot();
});
