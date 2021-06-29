const array_Clone = arr => {
    // Option 1: Use of Spread Operator -> only goes one level deep when copying an array. 
    // So, to copy a multi-dimensional arrays, we'll will have to use other alternative.
    // return [...arr];

    //Option 2: Array.from() -> BEST!
    return Array.from(arr);
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));