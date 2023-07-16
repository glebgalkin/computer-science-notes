let names = ["Gleb", "Sam", "Jordan", "George"]

const people = names.map(value => {
    return value + " Galkin";
})


const peopleTotal = people.reduce((previousValue, currentValue)=> {
    currentValue = 1;
    return previousValue + currentValue
}, 0)

console.log(peopleTotal)