//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Cars(model, factory, year, maxspeed, engine_volume) {
    this.model = model;
    this.factory = factory;
    this.year = year;
    this.maxspeed = maxspeed;
    this.engine_volume = engine_volume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    };
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`);
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

let myCar = new Cars('Ford', 'Germany', 2011, 240, 1.6);
console.log(myCar);
myCar.drive();
myCar.info();
myCar.increaseMaxSpeed(20);
myCar.changeYear(2021);
myCar.addDriver({name: 'Taras', age: 32});
console.log(myCar);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Cars2 {
    constructor(model, factory, year, maxspeed, engine_volume) {
        this.model = model;
        this.factory = factory;
        this.year = year;
        this.maxspeed = maxspeed;
        this.engine_volume = engine_volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    };

    info() {
        for (const key in this) {
            console.log(`${key} - ${this[key]}`);
        }
    };

    increaseMaxSpeed(newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
    };

    changeYear(newValue) {
        this.year = newValue;
    };

    addDriver(driver) {
        this.driver = driver;
    };
}

let myCar2 = new Cars2('Ford', 'Germany', 2011, 240, 1.6);
console.log(myCar2);
myCar2.drive();
myCar2.info();
myCar2.increaseMaxSpeed(20);
myCar2.changeYear(2021);
myCar2.addDriver({name: 'Taras', age: 32});
console.log(myCar2);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Popelushka {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}

let popelushkaArray = [
    new Popelushka('mariya', 18, 38),
    new Popelushka('olena', 22, 39),
    new Popelushka('ira', 25, 37),
    new Popelushka('sveta', 33, 37),
    new Popelushka('luba', 26, 38),
    new Popelushka('natalya', 23, 36),
    new Popelushka('olya', 19, 36),
    new Popelushka('alina', 18, 37),
    new Popelushka('melania', 18, 35),
    new Popelushka('marta', 21, 37)
];
console.log(popelushkaArray);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, findShoes) {
        this.name = name;
        this.age = age;
        this.findShoes = findShoes;
    }
}

let prince2 = new Prince('harry', 25, 35);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let princeWife = (popelushkaArray, prince2) => {
    for (const popelushka of popelushkaArray) {
        if (popelushka.footsize === prince2.findShoes) {
            return `your future wife - ${popelushka.name}`
        }
    }
};
console.log(princeWife(popelushkaArray, prince2));

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findPopelushka = popelushkaArray.find((popelushka) => popelushka.footsize === prince2.findShoes);
console.log(findPopelushka);