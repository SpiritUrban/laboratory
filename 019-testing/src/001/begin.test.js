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


