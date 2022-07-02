const getRepeated = (array1, array2) => {
    const dict = {}
    for (let index = 0; index < array1.length; index++){
        const element = array1[index];
        if(dict[element]){
            dict[element]++
        }else{
            dict[element] = 1
        }
    }

    for (let index = 0; index < array2.length; index++){
        const element = array2[index];
        if(dict[element]){
            dict[element]++
        }else{
            dict[element] = 1
        }
    }
    return dict
}

console.log(getRepeated(['a', 'b', 'c'], ['c', 'd', 'e']))
console.log(getRepeated(['a', 'b'], ['c', 'd']))