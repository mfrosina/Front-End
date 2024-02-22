/*Моля разгледайте API-то на JavaScript Array обекта и:

Нека имаме следния масив А от числа: 10, 5, 13, 18, 51 Напишете програма, която обхожда масива и принтира всички числа в конзолата на браузера.
Създайте програма, която за дадения масив А връща друг такъв (Б) със същия брой елементи, но със стойност равна на съответната стойност от А, умножена по две. Крайният резултат трябва да е следния: 20, 10, 26, 36, 10
Създайте програма, която връща филтриран масив А, включващ само четните числа.
Напишете програма, която търси и връща масив със всички елементи на А, които са кратни на 3.
*/

var a = [10, 5, 13, 18, 51];
function printArray() {
    /*a.forEach(element => {
        console.log(element);
    });*/

    a.forEach(function (element) {
        console.log(element);
    });
}
//printArray();

function createNewArrayFromA() {
    let b = a.map(function (element) {
        return element * 2;
    }
    );
    return b;
}
var b = createNewArrayFromA();
//console.log(b);

function findEven() {
    let even = a.filter(function (element) {
        return element % 2 == 0;
    });
    return even;
}
//console.log(findEven());
function divisibleBy3() {
    let divBy3 = a.filter(function (element) {
        return element % 3 == 0;
    });
    return divBy3;
}
//console.log(divisibleBy3());

/*Моля разгледайте API-то на JavaScript Date обекта и:

В масив добавете текущата дата
След това добавете нова дата 08.12.2023. Променете часа на 21:00:00
След това създайте програмно втори масив, който за датите пресмята броя дни в месеца и какъв ден от седмицата
(0-неделя, 6-събота) е дадената дата. Ако днес е 26.11.2023 година, крайния резултат би трябвало да изглежда така: 
Масив 1: [< dateObject>, < dateObject>] където първия обект съдържа датата 26.11.2023, а втория 08.12.2023. 
Масив 2: [[30,0], [31, 6]*/

var dates = [];
dates.push(new Date());
dates.push(new Date("2023-12-08"));
console.log(dates);

function calculateMonthAndDay(date)
{
    let daysInMonth = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
    let numberOfDay = date.getDay();

    return [daysInMonth,numberOfDay];
}

function calculateInfo()
{
    let dateinfo = dates.map(function(date){
        return calculateMonthAndDay(date);
    });
    return dateinfo;
}

function printArray(arr) {
    arr.forEach(function (element) {
        console.log(element);
    });
}
printArray(calculateInfo());



