const prettier = require("prettier");

const unformattedCode = `
function   hello  ( name) {
    console.log  ('Boo!');
    const x =   2 + 5;
        return    "Hello, "   + name + "!" ;
}`;

prettier
  .format(unformattedCode, { parser: "babel" })
  .then((formattedCode) => {
    console.log(formattedCode);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
