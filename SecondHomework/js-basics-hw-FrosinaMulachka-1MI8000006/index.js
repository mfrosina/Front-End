var organizeBookshelf = (books, bookSortingType = 'title', genreSortingType = 'title') => {
  // Your code here
  if (books.length === 0) {
    return {};
  }

  let groupedObjByGenre = Object.groupBy(books, ({ genre }) => ((genre !== '' && genre !== undefined && genre !== null) ? genre : ""));
  let groupedArrByGenre = Object.entries(groupedObjByGenre);

  if (bookSortingType === 'title' || bookSortingType === null || bookSortingType === undefined) {
    groupedArrByGenre.forEach(function ([genre, book]) {
      book.sort((b1, b2) => {
        let firstTit = b1.title;
        let secTit = b2.title;

        if (firstTit < secTit) { return -1; }
        if (firstTit > secTit) { return 1; }
        return 0;
      });
    });
  }
  else {
    groupedArrByGenre.forEach(function ([genre, book]) {
      book.sort((b1, b2) => {
        let firstAut = b1.author;
        let secAut = b2.author;

        if (firstAut < secAut) { return -1; }
        if (firstAut > secAut) { return 1; }
        return 0;
      });
    });
  }

  if (genreSortingType === 'title' || genreSortingType === null || genreSortingType === undefined) {
    groupedArrByGenre.sort((b1, b2) => {
      let firstGen = b1[0];
      let secGen = b2[0];

      if (firstGen < secGen) { return -1; }
      if (firstGen > secGen) { return 1; }
      return 0;
    });
  }
  else {
    groupedArrByGenre.forEach(function ([genre, book]) {
      book.sort((b1, b2) => {
        let firstAut = b1.author;
        let secAut = b2.author;

        if (firstAut < secAut) { return -1; }
        if (firstAut > secAut) { return 1; }
        return 0;
      });
    });
  }

  groupedObjByGenre = Object.fromEntries(groupedArrByGenre);
  return groupedObjByGenre;

};



var analyzeArray = (arr) => {
  // Your code here
  if (arr.length === 0) {
    return {
      count: 0,
      even: { count: 0, numbers: [] },
      odd: { count: 0, numbers: [] },
      hasDuplicates: false,
      duplicates: [],
      sum: 0
    };
  }
  let evenNumbers = arr.filter(function (elem) {
    if (typeof elem === 'number') {
      return elem % 2 === 0;
    }
    else {
      throw new Error('Array contains non-numeric values.');
    }
  });

  let oddNumbers = arr.filter(function (elem) {
    if (typeof elem === 'number') {
      return elem % 2 !== 0;
    }
    else {
      throw new Error('Array contains non-numeric values.');
    }
  });

  let uniqueElements = new Set(arr);
  let filteredUnique = arr.filter(function (elem) {
    if (uniqueElements.has(elem)) {
      uniqueElements.delete(elem);
    }
    else {
      return elem;
    }
  });
  let hasDuplicateElements = filteredUnique.length > 0 ? true : false;

  let sumElements = arr.reduce(function (accumulator, currValue) {
    if (typeof currValue === 'number' && typeof accumulator === 'number') {
      return accumulator + currValue;
    }
    else {
      throw new Error('Array contains non-numeric values.');
    }
  }, 0);

  return {
    count: arr.length,
    even: { count: evenNumbers.length, numbers: evenNumbers },
    odd: { count: oddNumbers.length, numbers: oddNumbers },
    hasDuplicates: hasDuplicateElements,
    duplicates: filteredUnique,
    sum: sumElements
  };
};


//arrayAnalyzer test cases
const array1 = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
const analysis1 = analyzeArray(array1);
console.log('Analysis for Array 1:', analysis1);

const array2 = [2, 'hello', 4, 6, 'world', 8, 10];
const analysis2 = analyzeArray(array2);
console.log('Analysis for Array 2:', analysis2);

const emptyArr = [];
const analysis3 = analyzeArray(emptyArr);
console.log('Analysis for Array 3:', analysis3);


//organizeBookshelf test cases
const books = [
  { title: 'Che Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
  { title: 'b1984', author: 'George Orwell', genre: 'Dystopian' },
  { title: 'aa1984', author: 'George Orwell', genre: 'Dystopian' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
  { title: 'Bhe Fellowship of the Ring', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
  { title: 'The Fellowship of the Ring', author: 'J.R.R. Tolkien' }
];

const organizedShelfByTitle = organizeBookshelf(books, 'title', 'title');
console.log('Organized Bookshelf by Title:', organizedShelfByTitle);

