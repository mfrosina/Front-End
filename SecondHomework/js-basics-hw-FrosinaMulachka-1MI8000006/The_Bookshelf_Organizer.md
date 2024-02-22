
## The Bookshelf Organizer

**Task:** Build a JavaScript function to organize a virtual bookshelf. The function should take an array of book objects with titles, authors, and genres and return a sorted bookshelf where books are grouped by genre. The user should be able to choose the sorting type for both books and genres: either by title or author.

**Corner Cases to Handle:**

1. **Empty Bookshelf:**
   - If the bookshelf is empty, the function should return an empty object.

2. **Books without Genres:**
   - If a book does not have a specified genre, it should be grouped under an '' category.

3. **Duplicate Titles in Different Genres:**
   - If there are books with the same title but in different genres, they should be handled appropriately in the organization.

4. **Special Characters in Titles and Authors:**
   - The function should handle special characters in titles and authors gracefully during sorting.

5. **Sorting with Empty Genres:**
   - If a book has an empty genre, it should be grouped under an empty string category.

6. **Undefined Sorting Types:**
   - If the user does not specify sorting types for books and genres, the function should default to sorting by title.

**Function Signature:**
```javascript
function organizeBookshelf(books, bookSortingType = 'title', genreSortingType = 'title')
```


```js
const books = [
   { title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
   { title: '1984', author: 'George Orwell', genre: 'Dystopian' },
   { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
   { title: 'The Fellowship of the Ring', author: 'J.R.R. Tolkien', genre: 'Fantasy' }
];

const organizedShelfByTitle = organizeBookshelf(books, 'title', 'title');
console.log('Organized Bookshelf by Title:', organizedShelfByTitle);
```