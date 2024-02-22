/*Задача 1
Създайте функция, която приема масив и връща нов масив, съдържащ само уникални елементи от първоначалния масив, използвайки Set за премахване на дубликати.
Създайте Map, който да представлява речник с думи и техните дефиниции. Добавете нови думи и техните дефиниции и след това напишете функция, която извежда на екрана целия речник.
Създайте функцията letterCounter, която приема низ и връща броят на всяка една буква в него
Създайте обект, представляващ информация за човек (име, възраст, място на живеене и т.н.). Използвайте Template Literals, за да генерирате низ, който представя тази информация в четим формат за преглед.*/

//1
function uniqueElements(arr) {
    let uniqueEls = new Set(arr);
    return uniqueEls;
}
var arr = [1, 2, 3, 1, 2, 3];
var uniq = uniqueElements(arr);
//console.log(uniq);

//2
function createDictionary() {
    let dictionary = new Map();
    dictionary.set('cat', 'kotka');
    dictionary.set('dog', 'kuche');
    dictionary.set('bird', 'ptica');
    dictionary.set('cow', 'krava');
    return dictionary;
}

let dictionary = createDictionary();

function printMapElements(key, value) {
    console.log(`m[${key}] = [${value}]`);
}

dictionary.forEach(function (key, val) {
    printMapElements(val, key);
});

//3
function printOccurences(map) {
    for (let [key, val] of map) {
        console.log(`${key} occurs ${val} times`);
    }
}

function initMap(str) {
    let letterMap = new Map();

    for (let i = 0; i < str.length; i++) {
        letterMap.set(str[i], 0);
    }
    return letterMap;
}

function countOccurs(str,letterMap){
    for(i = 0; i < str.length; i++){
        let counter = letterMap.get(str[i]);
        letterMap.set(str[i], counter+1) ;
    }
    printOccurences(letterMap);
}

let str = "helloworld";
//countOccurs(str,initMap(str));

//4
var person = {firstName: "Frosina", 
              secondName: "Mulachka",
              age: 21,
              job: "IT student"};
            
function printPersonsInfo(pers){
    console.log(`This is ${pers.firstName} ${pers.secondName}. She is ${pers.age} years old. Her job is ${pers.job}.`);
}
printPersonsInfo(person);


/*Система, която управлява курсове, преподаватели, студенти и техните записвания в университета.

Стъпки в упражнението:
Създайте метод за генериране на потребител, който да връща обектен литерал с информация за потребителите (име, фамилия, години, факултетен номер).
Създайте метод за генериране на курс, който да връща обектен литерал с информация за курсовете (име, идентификационен номер на курса, studenti, prepodavateli).
Създайте метод за генериране на преподавател, който да връща обектен литерал с информация за преподавателите (име, фамилия, идентификационен номер на преподавателя).
Реализирайте функционалност за добавяне на преподавател към курс, при условие че преподавателят съществува. Реализирайте функционалност за добавяне на студент към курс, ако студентът съществува.
Създайте метод, който показва броя на записаните студенти в даден курс.
Създайте метод, който показва списък с имената на студентите, записани в даден курс.
Реализирайте функционалност за премахване на студент от курс.
Създайте метод за извеждане на подробна информация за преподавателя и курса, към който е добавен.*/
let users = new Set();
users.add(person);


let prof0 = {firstName:"Ana",secondName:"Anova",ID:"0000mi00"};
let profs = new Set();
profs.add(prof0);

let course0 = {courseName: "UP",ID: "00023",students:new Set(), professors: new Set()};
let courses = new Set();
courses.add(course0);


function generateUser(firstName,secondName,age,FN){
    let user = {firstName,
                secondName,
                age,
                FN};
    return user;
}
let user1 = generateUser("Frosina","Mulachka",21,"1mi8000006")
users.add(user1);

function generateCourse(name,id,studentsSet,professorsSet){
    let course = {courseName: name,
                ID: id,
                students: studentsSet,
                professors: professorsSet};
    return course;
}

function generateProfessor(firstNme,secondNme,id){
    let professor = {firstName: firstNme,
                secondName: secondNme,
                ID: id};
    return professor;
}

function addProfessorToCourse(courseID,professor){
    exists = profs.has(professor);
    if(exists){
        for(let item of courses){
            if(item.ID === courseID){
                item.professors.add(professor);
                console.log(`The professor ${professor.firstName} is sucessfully added to course with id ${courseID}`);
            }
        }
    }
    else{
        console.log("The professor does not exist and can not be added to course");
    }
}
addProfessorToCourse("00023",prof0);

function addStudentToCourse(courseID,student){
    exists = users.has(student);
    if(exists){
        for(let item of courses){
            if(item.ID === courseID){
                item.students.add(student);
                console.log(`The student ${student.firstName} is sucessfully added to course with id ${courseID}`);
            }
        }
    }
    else{
        console.log("The student does not exist and can not be added to course");
    }
}
addStudentToCourse("00023",user1);
const setIter = courses.values();
console.log(setIter.next().value);
let user0 = generateUser("Ina","Ineva",22,"1mi000990");
addStudentToCourse("00023",user0); //can not be added

function findNumberOfStudentsInCourse(courseID){
    flag=false;
    for(let item of courses){
        if(item.ID === courseID){
            console.log(`Course ${item.courseName} has ${item.students.size} students`);
            flag = true;
        }
    }
    if(!flag){
        console.log(`Course with id ${courseID} has not been found`);
    }
}
//findNumberOfStudentsInCourse("00023");

function getNamesOfTheStudentsInCourse(courseID){
    flag=false;
    for(let item of courses){
        if(item.ID === courseID){
            console.log(`Course with ID ${courseID}`);
            item.students.forEach(function(student){
                console.log(`Student: ${student.firstName}, ${student.secondName}, ${student.FN}, ${student.age}`);
            })
            flag = true;
        }
    }
    if(!flag){
        console.log(`Course with id ${courseID} has not been found`);
    }
}
//getNamesOfTheStudentsInCourse("00023");

users.add(user0);

function deleteStudentFromCourse(studentFN,courseID){
    flag=false;
    for(let item of courses){
        if(item.ID === courseID){
            for(let student of item.students){
                flag1 = false;
                if(studentFN === student.FN){
                    flag1=true;
                    item.students.delete(student);
                    console.log(`Student ${student.firstName} with fn ${student.FN} is successfully deleted from course`);
                }
            }
            if(!flag1){
                console.log(`Student with fn ${studentFN} is not found and can not be deleted from course`);
            }
            flag = true;
        }
    }
    if(!flag){
        console.log(`Course with id ${courseID} has not been found`);
    }
}
//deleteStudentFromCourse("1mi8000006","00023");
//deleteStudentFromCourse("1mi805500006","00023"); //can not be found

function getInfoForCoursesAndTheirProfessors(){
    courses.forEach(function(course){
        console.log(`Course ${course.courseName} with ID ${course.ID} is teached by:`);
        course.professors.forEach(function(prof){
            console.log(`${prof.firstName} ${prof.secondName} with ID ${prof.ID}`);
        });
    });
}
getInfoForCoursesAndTheirProfessors();