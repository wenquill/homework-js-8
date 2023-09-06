// 2---------------------------------------------
class RangeValidator {
    constructor (from, to) {
        this._from = from;
        this.to = to;
    }

    get from () {
        return this._from;
    }

    get to () {
        return this._to;
    }

    set from (value) {
        if (value <= this._to) {
            this._from = value;
        }   else {
            throw new RangeError(`помилка! значення from (${value}) повинно бути меншим значення to (${this._to}).`);
        }
    }

    set to (value) {
        if (value >= this._from) {
            this._to = value;
        } else {
            // console.log(`помилка! значення to (${value}) повинно бути більшим значення from (${this._from}).`);
            throw new RangeError (`помилка! значення to (${value}) повинно бути більшим значення from (${this._from}).`)
        }
    }

    get range () {
        return Array.from([this._from, this._to]);
    }

    isValid (num) {
        return num <= this.to && num >= this.from;
    }
}

let range1;
let range2;

try {
    // Конструктор (+сеттери)
    console.log('\nперевірка роботи конструктора класу:');
    range1 = new RangeValidator(1, 5.5) // Відпрацьовує
    range2 = new RangeValidator(10, 5.5) // ПОМИЛКА! (оскільки має бути from <= to)
} catch (err) {
    console.log(err);
}

try {
    // Робота сетерів
    console.log('\nперевірка роботи сеттерів from:');
    range1.from = 5; // Відпрацьовує
    range1.from = 200; // ПОМИЛКА! (оскільки не має бути більше заданого вище в конструкторі to: 5.5)
} catch (err) {
    console.log(err);
}

try {
    console.log('\nперевірка роботи сеттерів to:');
    range1.to = 80; // Відпрацьовує
    range1.to = -55; // ПОМИЛКА! (оскільки не має бути менше заданого вище from
} catch (err) {
    console.log(err);
}

// Робота гетерів
console.log('\nперевірка роботи геттерів:');
console.log(range1.from) // => 5
console.log(range1.to) // => 80

// Робота геттера range
console.log('\nперевірка роботи геттера range:');
console.log(range1.range) // => [5, 80]

// Робота validate
console.log('\nперевірка роботи методу валідації:');
console.log(range1.isValid(10)) // => true (оскільки належить діапазону [5, 80])
console.log(range1.isValid(100)) // => false (оскільки не належить діапазону [5, 80])

// 1---------------------------------------------
class Phone {
    constructor (brand, model, color, price, year) {
        this._mark = brand;
        this._model = model;
        this._color = color;
        this._price = price;
        this._year = year;
    }

    calcPhoneAge (currentYear) {
        return currentYear - this._year;
    }

    set checkYear (value) {
        const validator = new RangeValidator(2015, 2023);
        console.log(validator.isValid(value));
    }
}

const iphone = new Phone ('apple', 'iphone 12', 'white', 20999, 2020);
console.log(iphone);
console.log(iphone.calcPhoneAge(2023));
iphone.checkYear = 2023;