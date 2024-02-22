QUnit.module("The Bookshelf Organizer", function () {
  QUnit.test("Empty Bookshelf", function (assert) {
    const emptyBookshelf = [];
    const organizedBookshelf = organizeBookshelf(emptyBookshelf);
    assert.deepEqual(
      organizedBookshelf,
      {},
      "Should return an empty object for an empty bookshelf."
    );
  });

  QUnit.test("Books without Genres", function (assert) {
    const books = [
      { title: "Book A", author: "Author A" },
      { title: "Book B", author: "Author B", genre: "Fiction" },
      { title: "Book C", author: "Author C" },
    ];
    const organizedBookshelf = organizeBookshelf(books);
    assert.deepEqual(
      organizedBookshelf[""],
      [
        { title: "Book A", author: "Author A" },
        { title: "Book C", author: "Author C" },
      ],
      'Should group books without genres under "undefined" category.'
    );
  });

  QUnit.test("Duplicate Titles in Different Genres", function (assert) {
    const books = [
      { title: "Book A", author: "Author A", genre: "Fiction" },
      { title: "Book A", author: "Author B", genre: "Science Fiction" },
      { title: "Book B", author: "Author C", genre: "Fiction" },
    ];
    const organizedBookshelf = organizeBookshelf(books);
    assert.deepEqual(
      organizedBookshelf,
      {
        Fiction: [
          { title: "Book A", author: "Author A", genre: "Fiction" },
          { title: "Book B", author: "Author C", genre: "Fiction" },
        ],
        "Science Fiction": [
          { title: "Book A", author: "Author B", genre: "Science Fiction" },
        ],
      },
      "Should handle duplicate titles in different genres appropriately."
    );
  });

  QUnit.test("Special Characters in Titles and Authors", function (assert) {
    const books = [
      { title: "Book @", author: "$Author A", genre: "Fiction" },
      { title: "Book B", author: "Author C", genre: "Science Fiction" },
    ];
    const organizedBookshelf = organizeBookshelf(books);
    assert.deepEqual(
      organizedBookshelf,
      {
        Fiction: [{ title: "Book @", author: "$Author A", genre: "Fiction" }],
        "Science Fiction": [
          { title: "Book B", author: "Author C", genre: "Science Fiction" },
        ],
      },
      "Should handle special characters in titles and authors gracefully."
    );
  });

  QUnit.test("Sorting with Empty Genres", function (assert) {
    const books = [
      { title: "Book A", author: "Author A", genre: "" },
      { title: "Book B", author: "Author B", genre: "Fiction" },
      { title: "Book C", author: "Author C", genre: "Science Fiction" },
    ];
    const organizedBookshelf = organizeBookshelf(books);

    assert.deepEqual(
      organizedBookshelf,
      {
        "": [{ title: "Book A", author: "Author A", genre: "" }],
        Fiction: [{ title: "Book B", author: "Author B", genre: "Fiction" }],
        "Science Fiction": [
          { title: "Book C", author: "Author C", genre: "Science Fiction" },
        ],
      },
      "Should group books with empty genres appropriately."
    );
  });

  QUnit.test("Undefined Sorting Types", function (assert) {
    const books = [
      { title: "Book C", author: "Author C", genre: "Fiction" },
      { title: "Book A", author: "Author A", genre: "Science Fiction" },
      { title: "Book B", author: "Author B", genre: "Fiction" },
    ];
    const organizedBookshelf = organizeBookshelf(books);
    assert.deepEqual(
      organizedBookshelf,
      {
        Fiction: [
          { title: "Book B", author: "Author B", genre: "Fiction" },
          { title: "Book C", author: "Author C", genre: "Fiction" },
        ],
        "Science Fiction": [
          { title: "Book A", author: "Author A", genre: "Science Fiction" },
        ],
      },
      "Should default to sorting by title for both books and genres."
    );
  });
});

QUnit.module('Array Analyzer', function () {
    QUnit.test('Empty Array', function (assert) {
      const result = analyzeArray([]);
      assert.deepEqual(result, {
        count: 0,
        even: { count: 0, numbers: [] },
        odd: { count: 0, numbers: [] },
        hasDuplicates: false,
        duplicates: [],
        sum: 0
      }, 'Empty array should return default values.');
    });
  
    QUnit.test('Even and Odd Numbers', function (assert) {
      const array1 = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
      const result1 = analyzeArray(array1);
      assert.deepEqual(result1, {
        count: 10,
        even: { count: 4, numbers: [2, 4, 6, 8] },
        odd: { count: 6, numbers: [1, 3, 5, 5, 7, 9] },
        hasDuplicates: true,
        duplicates: [5],
        sum: 50
      }, 'Analysis for Array 1 is as expected.');
    });
  
    QUnit.test('Array with Non-Numeric Values', function (assert) {
      assert.throws(() => analyzeArray(['a', 2, 3]), /Array contains non-numeric values/, 'Should throw an error for non-numeric values.');
    });
});
