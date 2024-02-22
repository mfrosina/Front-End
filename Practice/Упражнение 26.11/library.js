/*Обекти и Масиви
Създайте обект, представляващ книга, със следните свойства:
title (низ)
author (низ)
publicationYear (число)
ISBN (низ)
tags (масив от низове)
Създайте масив, в който да съхранявате множество книги.
Напишете функция за добавяне на нова книга в библиотеката. Функцията трябва да приема параметри за всяко свойство на книгата и да я добавя към масива.
Ако книгата няма подадена година, да се използва текущата година
Ако книгата няма подадени етикети, да се добави етикетът uncategorized
Напишете функция за отпечатване на масив от книги в табличен вид (използвайте вградена функционалност).
Напишете функция за извеждане на всички книги в библиотеката. Функцията трябва да отпечатва информацията за всяка книга в конзолата. Отпечатаната информация за всяка книга трябва да изглежда:
===== Harry Potter and the Prisoner of Azkaban =====
Publication year: 1999
Author: J. K. Rowling
ISBN: 0-7475-4215-5
Tags: Fantasy, Adventure
*/

let book = {
    title: "",         // String
    author: "",        // String
    publicationYear: 0, // Number
    ISBN: "",          // String
    tags: []           // Array of Strings
};
let arrBooks = [];

function addBook(title,author,year,isbn,tags)
{
    if(year == null || year == undefined)
    {
        year = new Date().getFullYear();
    }
    if(tags == null || tags == undefined || tags.length == 0)
    {
        tags = [];
        tags.push("uncategorized");
    }
    arrBooks.push({title,author,year,isbn,tags});
}


// Книга с всички параметри
addBook("The Catcher in the Rye", "J.D. Salinger", 1951, "9780316769488", ["Fiction", "Coming-of-age"])
addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, "9780743273565", ["Classic", "Tragedy"])
addBook("Pride and Prejudice", "Jane Austen", 1813, "9780141439518", ["Classic", "Romance", "Social Commentary"])


// Книга без етикети
addBook("To Kill a Mockingbird", "Harper Lee", 1960, "0061120081", []);
addBook("The Lord of the Rings", "J.R.R. Tolkien", 1954, "9780618640157");

// Книга без подадена година
addBook("1984", "George Orwell", undefined, "9780451524935", ["Dystopian", "Political Fiction"])
// Книга без година и етикети
addBook("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", undefined, "9780345391803")

function printInTableFormat(arr)
{
    console.table(arr);
}

//printInTableFormat(arrBooks);

function formatISBN(isbn) {
    // Assuming the ISBN is in the format 'xxxxxxxxxx'
    return `0-${isbn.substring(0, 4)}-${isbn.substring(4, 8)}-${isbn.substring(8)}`;
}

function printBooks(arr)
{
    arr.forEach(function(book){
        console.log(`===== ${book.title} =====`);
        console.log(`Publication year: ${book.year}`);
        console.log(`Author: ${book.author}`);
        console.log(`ISBN: ${formatISBN(book.isbn)}`);
        console.log(`Tags: ${book.tags.join(', ')}`);
        console.log();
    })
}
//console.log(printBooks(arrBooks));

/*Напишете функция за търсене на книга по заглавие или автор. Функцията трябва да връща масив от всички книги, които отговарят на условията.
Напишете функция за изчисляване на средната година на публикация на всички книги в библиотеката.
Напишете функция за намиране на книгата с най-ранна година на публикация. (Ако има повече от една, да се отпечатайте всички, като низ)
Напишете функция за изчисляване на общия брой книги в библиотеката. */

function filterByTitleOrAuthor(title,author,books)
{
    let filteredBooks = books.filter(function(book){
        if(title != null && author != null)
        {
        return (book.title === title || book.author === author);
        }
        if(title == null && author != null)
        {
            return book.author === author;
        } 
        if(title != null && author == null)
        {
            return book.title === title;
        }
    });
    return filteredBooks;
}

//printBooks(filterByTitleOrAuthor("The Hitchhiker's Guide to the Galaxy",undefined,arrBooks));

function getAverageOfPublYear(books)
{
    let avgPublYear = books.reduce(function(accumulator,book){
        return accumulator + book.year;
    },0);
    return Math.ceil(avgPublYear / books.length);
}
//console.log(getAverageOfPublYear(arrBooks));

function getEarliestYear(years)
{
    return Math.min(...years);
}

function printArray(arr) {
    arr.forEach(function (element) {
        console.log(element);
    });
}

function getOldestBook(books)
{
    let years = books.map(function(book){
        return book.year;
    });
    let earliestYear = getEarliestYear(years);

    let oldestBook = books.filter(function(book){
        return book.year == earliestYear;
    }); //as an arr
    return oldestBook;
}
let oldestBooks = getOldestBook(arrBooks);
if (oldestBooks.length > 0) {
    console.log("Oldest Books:");
    oldestBooks.forEach(function (book) {
        console.log(`${book.title} by ${book.author} (${book.year})`);
    });
} else {
    console.log("No books found.");
}

function getNumberOfBooks(books){
    let numBooks = 0;
    books.forEach(function(){
        numBooks++;
    })
    return numBooks;
}
console.log(getNumberOfBooks(arrBooks));


/*TO DO
Бонус:
Реализирайте функция за сортиране, която сортира книгите в библиотеката по година на публикация във възходящ ред (година > заглавие > автор).
Добавете функция за премахване на книга от библиотеката чрез ISBN.
Внедрете обработка на грешки във вашите функции, за да се уверите, че входът е валиден.*/
