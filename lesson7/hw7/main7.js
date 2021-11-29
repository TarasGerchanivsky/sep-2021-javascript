// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let arrayUser = [
    new User(1, 'vasya', 'zvir', 'dcsd@ukr.net', 38025456856),
    new User(11, 'kolya', 'wof', 'dfdbd@ukr.net', 38034364355),
    new User(22, 'olya', 'rabbit', 'ddfsd@gmail.com', 38042456777),
    new User(14, 'taras', 'lion', 'dzfqzrgrvd@ukr.net', 380344456855),
    new User(51, 'misha', 'pig', 'rcrgvd@ukr.net', 38022556365),
    new User(5, 'vitya', 'hource', 'gsgrssdgmail.com', 38045986897),
    new User(77, 'ira', 'deer', 'rgrgd@gmail.com', 38045876779),
    new User(25, 'vira', 'elk', 'ujuygd@ukr.net', 38025556365),
    new User(3, 'vova', 'bird', 'jhtsfrd@gmail.com', 3808886477),
    new User(7, 'melania', 'fox', 'rsrgth@ukr.net', 38077777777)
]

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let userFilter = arrayUser.filter(user => user.id % 2 === 0);
console.log(userFilter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let userSort = arrayUser.sort((a, b) => a.id - b.id);
console.log(userSort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

let emptyArray = [
    new Client(1, 'vasya', 'zvir', 'dcsd@ukr.net', 38025456856, ['product3', 'product6',]),
    new Client(11, 'kolya', 'wof', 'dfdbd@ukr.net', 38034364355, ['product2', 'product4', 'product8', 'product5']),
    new Client(22, 'olya', 'rabbit', 'ddfsd@gmail.com', 38042456777, ['product4', 'product1', 'product10']),
    new Client(14, 'taras', 'lion', 'dzfqzrgrvd@ukr.net', 380344456855, ['product2']),
    new Client(51, 'misha', 'pig', 'rcrgvd@ukr.net', 38022556365, ['product2', 'product4', 'product8', 'product5', 'product3', 'product9', 'product7', 'product6']),
    new Client(21, 'vitya', 'hource', 'gsgrssdgmail.com', 38045986897, ['product2', 'product4', 'product8', 'product5', 'product1']),
    new Client(2, 'ira', 'deer', 'rgrgd@gmail.com', 38045876779, ['product1', 'product2']),
    new Client(3, 'vira', 'elk', 'ujuygd@ukr.net', 38025556365, ['product10', 'product3', 'product7']),
    new Client(5, 'vova', 'bird', 'jhtsfrd@gmail.com', 3808886477, ['product5', 'product4', 'product7', 'product2', 'product11']),
    new Client(4, 'melania', 'fox', 'rsrgth@ukr.net', 38077777777, ['product5', 'product1'])
];
console.log(emptyArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClients = emptyArray.sort((a, b) => a.order.length - b.order.length);
console.log(sortClients);

