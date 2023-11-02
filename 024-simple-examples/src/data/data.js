const data4 = {
  header: `JavaScript String: substr()`,
  portions: [
    {
      text: [
        "substr() is similar to slice().",
        `  The difference is that the second parameter ... 
specifies the length of the extracted part.`,
      ],
      exaple: `let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
// part -> 'Banana'`,
    },
    {
      text: [
        `If you omit the second parameter, 
substr() will slice out the rest of the string.`,
        `If the first parameter is negative, 
the position counts from the end of the string.`,
      ],
      exaple: `let str = "Apple, Banana, Kiwi";
let part = str.substr(7);
// part -> 'Banana, Kiwi'`,
    },
  ],
};
