const modul = require('./modul');
const readLine = require('readline-sync');

// 1.
//primitív adattípusok:

//string
const string = "Cica";
//szám
const num = 21;
//logikai érték
const igaz = true;
const hamis = false;

//összetett adattípusok:

//tömb
const arr = [1, 2, 3, 4];

//2d tömb
const arr2D = [[1, 2] [3, 4]];

// 2.
//A let-tel változót hozunk létre, a const-tal konstanst. Mindkettőt deklaráljuk, a let-nél nem muszáj kezdeti értéket megadnunk, és az értékét változtathatjuk. A const-nál muszáj kezdeti értéket adnunk, és később ezt nem tudjuk megváltoztatni.
let valtozo = 
const konstans = 20;

// 3.
// Az ÉRTÉK szerinti paraméterátadásnál számokat, stringeket, logikai értéket adunk át. A függvényben ezeknek a módosításai nem változtatják meg az eredeti változó értékét. 
// A REFERENCIA szerinti paraméterátadásnál a módosításaink az eredeti értéket is módosítják. Itt legtöbbször tömbökről van szó.

// 4.

const containsElement = (arr, num) => {
    for (const element of arr) {
        if (element === num) {
            return true;
        }
    }
    return false;
}

// 5.
const maximumAge = (arr) => {
    let max = arr[0].age;

    for (const element of arr){
        if (arr[element].age > max){
            max = arr[element].age
        }
    } return max;
}

// 6.
const metszet = (array1, array2) => {
    const res = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]){
            res.push(array1[i]); 
            }
        }
    } return res;
}

// 7. 
console.log(modul.összeadás(5, 4));

// 8.
let num1 = readLine.question('Kérlek írj be egy számot');
let num2 = readLine.question('Még egyet, légyszi!');

const generateArr = (num1, num2) => {
    let arr = new Array(num1);
    for (let i = 0; i < num1; i++){
        arr[i] = new Array(num2);
    } return arr;
}


