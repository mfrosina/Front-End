/*	Аритметични операции
	а) Съберете двете числови променливи и запазете резултат в нова променлива.
	б) Новата променлива съберете с низовата променлива с числова стойност. Запазете резултата в променлива и го принтирайте.
	в) Съберете някоя от числовите променлива с всяка от булевите и принтирайте резултата.
	г) Съберете двете булеви променливи и принтирайте резултата.
	д) В един израз извършете операциите изваждане, умножение и деление между числовите променливи и принтирайте резултата.
	e) Конкатенирайте низовите променливи, като очакваният резултат са отделни думи в един низ. Принтирайте го
*/
var str1 = "frosina";
var str2 = "mulachka";
var numstr = "8";
var numstr1 = "17";
var num1 = 8;
var num2 = 17;
let bool1 = true;
let bool2 = false;
var x;
var y;
const bignum = 10202929929;
var ch = 'f';

//a)
var sum = num1 + num2;
console.log(sum);

//b)
var sum1 = sum + numstr;
console.log(sum1);

//v)
console.log(num1+bool1);
console.log(num1+bool2);

//g)
console.log(bool1+bool2);

//e)
var concatenated = str1 + " " + str2;
console.log(concatenated);


/*	Условни оператори
	Напишете проверка, която открива дали дадено число е четно или нечетно. Ако е четно, принтирайте (“Even number”), ако е нечетно (“Odd number”). Изпробвайте програмата с някои от вече дефинираните числови променливи.
	а) Използвайте if/else
	б) Използвайте тернарен оператор
	Използвайки switch-case напишете програма, която при подадено число между 1 и 7 принтира съответния ден от седмицата. Ако числото не е в този интервал, принтира съобщението (“One week has seven days.”). За ден 1 приемаме Понеделник.
*/

if(num1 % 2 == 0)
{
    console.log("Even number");
}
else {
    console.log("Odd number");
}

var res = num2 % 2 == 0 ? "Even number" : "Odd number";
console.log(res);

//let userInput = prompt("Please enter a value (1-7):");
let userInput = "8";
switch(Number.parseInt(userInput))
{
    case 1:console.log("Monday");break;
    case 2:console.log("Tuesday");break;
    case 3:console.log("Wednesday");break;
    case 4:console.log("Thursday");break;
    case 5:console.log("Friday");break;
    case 6:console.log("Saturday");break;
    case 7:console.log("Sunday");break;
    default:console.log("Week has 7 days");
}

/*	Цикли
	а) Използвайте while цикъл, за да изведете числата от 1 до 10.  
	б) For цикъл, за да изведете четните числа от 1 до 20. 
	в) Do while, за да изведете числата от 10 до 1. 
	г) Използвайте For..of цикъла, за да принтирате всеки от символите на някоя от вече дефинираните низови променливи или използвайте низа “Merry Christmas”.
	д) Изберете най-подходящия цикъл и принтирайте факториел на някоя от числовите ви променливи.

*/
let i;
while(i <= 10)
{
    console.log(i);
    i++;
}
do{
    console.log(i);
    i--;
}while(i > 0);

for(let charche of str1)
{
    console.log(charche);
}

var fact = 1;
while(num1 > 1)
{
    fact *= num1;
    num1--;
}
console.log(fact);

/**	Оператори за сравнение
	а) Сравнете по тип и по стойност числовата и низовата променлива с еднакви стойности дефинирани в началото. Принтирайте резултата
	б) Сравнете същите променливи само по стойност. Принтирайте резултата.
 */
console.log(num1===numstr);
console.log(num2==numstr1);

