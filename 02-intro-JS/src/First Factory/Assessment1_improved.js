const getRepeated = (array1, array2) => {
    const dict = {};

    checkArray(array1, dict);
    checkArray(array2, dict);

    return dict;
};

const checkArray = (array, dict) => {
    array.forEach((element) => {
        (dict[element]) ? dict[element]++ : dict[element] = 1;
    });
}

console.log(getRepeated(['a', 'b', 'c'], ['c', 'd', 'e']));
console.log(getRepeated(['a', 'b'], ['c', 'd']));