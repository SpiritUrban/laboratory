const { sum, mult, isOdd, essayOnTheBestFlavor, generateGreeting, isValidEmail } = require('./begin');

// 1
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

// 2
test('multiply 3 * 2 to equal 6', () => {
    expect(mult(3, 2)).toBe(6);
    // expect(6).toBe(6);
});

// 3
test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
    // expect({ one: 1, two: 2 }).toEqual({ one: 1, two: 2 });
});

// 4
test('array assignment', () => {
    const data = [1, 2, 3];
    expect(data).toEqual([1, 2, 3]);
    // expect([1, 2, 3]).toEqual([1, 2, 3]);
});

// 5
test('nested object assignment', () => {
    const data = {
        level1: {
            level2: {
                value: 1
            }
        }
    };
    expect(data).toEqual({
        level1: {
            level2: {
                value: 1
            }
        }
    });
});

// 6
test('isOdd function works correctly', () => {
    // Проверка, что функция возвращает true для нечетного числа
    expect(isOdd(3)).toBe(true);

    // Проверка, что функция возвращает false для четного числа
    expect(isOdd(4)).toBe(false);

    // Использование .not для инвертирования матчера
    // Проверка, что функция не возвращает true для четного числа
    expect(isOdd(4)).not.toBe(true);

    // Проверка, что функция не возвращает false для нечетного числа
    expect(isOdd(3)).not.toBe(false);
});

// 7
test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

// 8
class LaCroix {
    constructor(flavor) {
        this.flavor = flavor;
    }
}

describe('the La Croix cans on my desk', () => {
    test('are not semantically the same', () => {
        expect(new LaCroix('lemon')).toEqual({ flavor: 'lemon' });
        expect(new LaCroix('lemon')).not.toStrictEqual({ flavor: 'lemon' });
    });
});

// 9
describe('an essay on the best flavor', () => {
    test('mentions grapefruit', () => {
        expect(essayOnTheBestFlavor()).toMatch(/grapefruit/);
        expect(essayOnTheBestFlavor()).toMatch(new RegExp('grapefruit'));
    });
});

// 10
describe('grapefruits are healthy', () => {
    test('grapefruits are a fruit', () => {
        expect('grapefruits').toMatch('fruit');
    });
});

// 11
describe('11', () => {
    test('generateGreeting outputs correct format', () => {
        const output = generateGreeting('John');
        expect(output).toMatch(/John/);
    });
});

// 12
describe('12', () => {
    test('isValidEmail recognizes email format', () => {
        const validEmail = 'john.doe@example.com';
        const invalidEmail = 'john.doeexample.com';

        expect(isValidEmail(validEmail)).toBe(true);
        expect(isValidEmail(invalidEmail)).toBe(false);

        // Используем .toMatch для проверки регулярного выражения напрямую
        expect(validEmail).toMatch(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
        expect(invalidEmail).not.toMatch(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    });
});


describe('toMatchObject + (toHaveLength, toContainEqual)', () => {
    // 13
    test('toMatchObject example', () => {
        const actualObject = {
            name: 'John',
            age: 30,
            location: 'USA'
        };

        const expectedObject = {
            name: 'John',
            age: 30
        };

        expect(actualObject).toMatchObject(expectedObject);
    });

    // 14
    test('nested toMatchObject example', () => {
        const actualObject = {
            name: 'John',
            details: {
                age: 30,
                location: 'USA'
            }
        };

        const expectedObject = {
            details: {
                age: 30
            }
        };

        expect(actualObject).toMatchObject(expectedObject);
    });

    // 15
    test('array toMatchObject example', () => {
        const actualArray = [
            { name: 'John', age: 30 },
            { name: 'Jane', age: 25 }
        ];

        const expectedArray = [
            { name: 'John' },
            { name: 'Jane' }
        ];

        expect(actualArray).toMatchObject(expectedArray);
    });

    // 16
    test('flexible array matching', () => {
        const actualArray = [
            { name: 'John', age: 30 },
            { name: 'Jane', age: 25 },
            { name: 'Sam', age: 22 }
        ];

        expect(actualArray).toHaveLength(3);
        expect(actualArray).toContainEqual({ name: 'John', age: 30 });
    });

    // 17
    test('check for partial object in array', () => {
        const actualArray = [
            { name: 'John', age: 30, location: 'USA' },
            { name: 'Jane', age: 25, location: 'UK' }
        ];

        const expectedObject = { name: 'John', age: 30 };

        const foundObject = actualArray.find(obj =>
            Object.keys(expectedObject).every(key => obj[key] === expectedObject[key])
        );

        expect(foundObject).toMatchObject(expectedObject);
    });

    // 18
    const houseForSale = {
        bath: true,
        bedrooms: 4,
        kitchen: {
            amenities: ['oven', 'stove', 'washer'],
            area: 20,
            wallColor: 'white',
        },
    };
    const desiredHouse = {
        bath: true,
        kitchen: {
            amenities: ['oven', 'stove', 'washer'],
            wallColor: expect.stringMatching(/white|yellow/),
        },
    };

    test('the house has my desired features', () => {
        expect(houseForSale).toMatchObject(desiredHouse);
    });
});


describe('Truthiness (distinguish between undefined, null, and false)', () => {
    // 19
    test('null', () => {
        const n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
    });
    // 20
    test('zero', () => {
        const z = 0;
        expect(z).not.toBeNull();
        expect(z).toBeDefined();
        expect(z).not.toBeUndefined();
        expect(z).not.toBeTruthy();
        expect(z).toBeFalsy();
    });
});

describe('Numbers', () => {

test('two plus two ( <  > <= >= == )', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });
});
