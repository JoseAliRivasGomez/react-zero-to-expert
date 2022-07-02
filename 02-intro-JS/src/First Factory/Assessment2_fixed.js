function changeAgeImpure(person) {
    person.age = 25;
    return person;
}

const alex = {
    name: 'Alex',
    age: 30
};

const changedAlex = changeAgeImpure({...alex});

console.log(alex);
console.log(changedAlex);
console.log(alex === changedAlex);