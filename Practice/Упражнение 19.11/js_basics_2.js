//1
let a = [10,5,13,18,51];
for(let i of a)
{
    console.log(i);
}
//2
let b = [];
for(let i of a)
{
    b.push(i*2);
}
console.log(b);

//3
function isEven (num)
{
    return num % 2 == 0;
}
function filtersArray ()
{
    let filtered = a.filter(isEven);
    console.log(filtered);
}
filtersArray();

//4
function hasElSmallerThan10(arr)
{
    for(let el of a)
    {
        if(el < 10)
        {
            return true;
        }
    }
    return false;
}
console.log(hasElSmallerThan10(a));

//5
function elsDivisibleBy3(num)
{
    return num % 3 == 0;
}
function filterOnlyElsDivBy3()
{
    let filtered = a.filter(elsDivisibleBy3);
    return filtered;
}
console.log(filterOnlyElsDivBy3());