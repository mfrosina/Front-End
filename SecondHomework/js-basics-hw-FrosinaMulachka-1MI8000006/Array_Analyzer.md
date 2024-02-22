# The Array Analyzer

**Task:** Build a JavaScript function to analyze an array of numbers. The function should provide insights into the array, including information on even and odd numbers, the presence of duplicates, and the sum of all elements.

**Corner Cases to Handle:**

1. **Empty Array:**
   - If the array is empty, the function should return an object with appropriate default values (e.g., count of elements as 0, sum as 0, etc.).

2. **Even and Odd Numbers:**
   - Provide counts and lists of even and odd numbers in the array.

3. **Presence of Duplicates:**
   - Identify and list any duplicate numbers in the array.

4. **Sum of All Elements:**
   - Calculate and return the sum of all elements in the array.

5. **Array with Non-Numeric Values:**
   - If the array contains non-numeric values, handle them gracefully and provide appropriate messages in a throw.

**Function Signature:**
```javascript
function analyzeArray(arr)
```

**Simple Usage**
```js
const array1 = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
const analysis1 = analyzeArray(array1);
console.log('Analysis for Array 1:', analysis1);

const array2 = [2, 'hello', 4, 6, 'world', 8, 10];
const analysis2 = analyzeArray(array2);
console.log('Analysis for Array 2:', analysis2);
```

**Output 1**
```js
{
   count: 10,
   even: { count: 5, numbers: [2, 4, 6, 8] },
   odd: { count: 5, numbers: [1, 3, 5, 7, 9] },
   hasDuplicates: true,
   duplicates: [5],
   sum: 50
}
```

**Output 2**
```js
{
   count: 6,
   even: { count: 4, numbers: [2, 4, 6, 8, 10] },
   odd: { count: 0, numbers: [] },
   hasDuplicates: false,
   duplicates: [],
   sum: 30
}
```