const dataY = {
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

const dataX = [
  {
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
  },
  {
    header: `JavaScript String: substr()2`,
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
  },
];

const ya = `
- header: "JavaScript String: substr()"
  portions:
    - text:
        - substr() is similar to slice().
        - |
          The difference is that the second parameter ...
          specifies the length of the extracted part.
      example: |
        let str = "Apple, Banana, Kiwi";
        let part = str.substr(7, 6);
        // part -> 'Banana'
    - text:
        - |
          If you omit the second parameter, 
          substr() will slice out the rest of the string.
        - |
          If the first parameter is negative, 
          the position counts from the end of the string.
      example: |
        let str = "Apple, Banana, Kiwi";
        let part = str.substr(7);
        // part -> 'Banana, Kiwi'

- header: "JavaScript String: substr()2"
  portions:
    - text:
        - |
          substr() is similar to slice().
          The difference is that the second parameter ...
          specifies the length of the extracted part.
      example: |
        let str = "Apple, Banana, Kiwi";
        let part = str.substr(7, 6);
        // part -> 'Banana'
    - text:
        - |
          If you omit the second parameter, 
          substr() will slice out the rest of the string.
          If the first parameter is negative, 
          the position counts from the end of the string.
      example: |
        let str = "Apple, Banana, Kiwi";
        let part = str.substr(7);
        // part -> 'Banana, Kiwi'

`;