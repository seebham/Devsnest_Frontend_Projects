const is_array = (arr) => {
    return Array.isArray(arr);
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
console.log(is_array({name: `devsnest`}))