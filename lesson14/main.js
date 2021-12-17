// Зробити свій розпорядок дня. // // У вас має бути  10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати -

let productivity = 0 //%; кожна виконана справа +10%

function awake(isTask1Done) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isTask1Done) {
                productivity += 10;
                resolve(productivity)
            } else {
                reject('you failed the mission')
            }
        }, 1000)
    })
}

function toWash(isTask2Done) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isTask2Done >= 10) {
                productivity += 10;
                resolve(productivity)
            } else {
                reject('you failed the mission')
            }
        }, 500)
    })
}

function breakfast(isTask3Done) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isTask3Done >= 20) {
                productivity += 10;
                resolve(productivity)
            } else {
                reject('you failed the mission')
            }
        }, 100)
    })
}

function childInKindergarten(isTask4Done) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isTask4Done >= 30) {
                productivity += 10;
                resolve(productivity)
            } else {
                reject('you failed the mission')
            }
        }, 300)
    })
}

function job(isTask5Done) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isTask5Done >= 40) {
                productivity += 10;
                resolve(productivity)
            } else {
                reject('you failed the mission')
            }
        }, 200)
    })
}

function lunch(isTask6Done) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isTask6Done >= 50) {
                productivity += 10;
                resolve(productivity)
            } else {
                reject('you failed the mission')
            }
        }, 100)
    })
}

function wayHome(isTask7Done) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isTask7Done >= 60) {
                productivity += 10;
                resolve(productivity)
            } else {
                reject('you failed the mission')
            }
        }, 250)
    })
}

function dinner(isTask8Done) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isTask8Done >= 70) {
                productivity += 10;
                resolve(productivity)
            } else {
                reject('you failed the mission')
            }
        }, 2000)
    })
}

function study(isTask9Done) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isTask9Done >= 80) {
                productivity += 10;
                resolve(productivity)
            } else {
                reject('you failed the mission')
            }
        }, 110)
    })
}

function theEnd(isTask10Done) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isTask10Done >= 90) {
                productivity += 10;
                resolve(productivity)
            } else {
                reject('you failed the mission')
            }
        }, 50)
    })
}


// За допомогою промісів ==================================================================================


// awake(true)
//     .then(yourResult => {
//         console.log('Ти вже виконав ' + yourResult + '% справ на сьогодні давай виконаємо справу №2')
//         return toWash(yourResult)
//     })
//     .then(yourResult => {
//         console.log('Ти вже виконав ' + yourResult + '% справ на сьогодні давай виконаємо справу №3')
//         return breakfast(yourResult)
//     })
//     .then(yourResult => {
//         console.log('Ти вже виконав ' + yourResult + '% справ на сьогодні давай виконаємо справу №4')
//         return childInKindergarten(yourResult)
//     })
//     .then(yourResult => {
//         console.log('Ти вже виконав ' + yourResult + '% справ на сьогодні давай виконаємо справу №5')
//         return job(yourResult)
//     })
//     .then(yourResult => {
//         console.log('Ти вже виконав ' + yourResult + '% справ на сьогодні давай виконаємо справу №6')
//         return lunch(yourResult)
//     })
//     .then(yourResult => {
//         console.log('Ти вже виконав ' + yourResult + '% справ на сьогодні давай виконаємо справу №7')
//         return wayHome(yourResult)
//     })
//     .then(yourResult => {
//         console.log('Ти вже виконав ' + yourResult + '% справ на сьогодні давай виконаємо справу №8')
//         return dinner(yourResult)
//     })
//     .then(yourResult => {
//         console.log('Ти вже виконав ' + yourResult + '% справ на сьогодні давай виконаємо справу №9')
//         return study(yourResult)
//     })
//     .then(yourResult => {
//         console.log('Ти вже виконав ' + yourResult + '% справ на сьогодні давай виконаємо справу №10')
//         return theEnd(yourResult)
//     }).then(yourResult => {
//     console.log(yourResult + '% справ на сьогодні виконано')
// })



// За допомогою async await ====================================================================================


async function listOfCases() {

    const result1 = await awake(true);
    const result2 = await toWash(result1);
    const result3 = await breakfast(result2);
    const result4 = await childInKindergarten(result3);
    const result5 = await job(result4);
    const result6 = await lunch(result5);
    const result7 = await wayHome(result6);
    const result8 = await dinner(result7);
    const result9 = await study(result8);
    const result10 = await theEnd(result9);

    console.log(result1 + '% справ на сьогодні виконано давай виконаємо справу №2');
    console.log(result2 + '% справ на сьогодні виконано давай виконаємо справу №3');
    console.log(result3 + '% справ на сьогодні виконано давай виконаємо справу №4');
    console.log(result4 + '% справ на сьогодні виконано давай виконаємо справу №5');
    console.log(result5 + '% справ на сьогодні виконано давай виконаємо справу №6');
    console.log(result6 + '% справ на сьогодні виконано давай виконаємо справу №7');
    console.log(result7 + '% справ на сьогодні виконано давай виконаємо справу №8');
    console.log(result8 + '% справ на сьогодні виконано давай виконаємо справу №9');
    console.log(result9 + '% справ на сьогодні виконано давай виконаємо справу №10');
    console.log(result10 + '% справ на сьогодні виконано')
}
listOfCases();

