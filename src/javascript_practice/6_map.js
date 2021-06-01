const instructors = [
    {name:'Quincy', specialty:'Quantum Mechanics'},
    {name:'Kenn', specialty:'Norse Mythology'},
    {name:'Carolyn', specialty:'Kung Fu'},
    {name:'Paul', specialty:'Entomology'},
]

//old way
let instructor_names = [];

instructors.forEach(instructor => {
    instructor_names.push(instructor.name);
});

console.log(instructor_names);

//new map way

const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames);

//exact same thing, different parameter name
const instructorNamesTwo = instructors.map(i => i.name);
console.log(instructorNamesTwo);

//fix this

const instructorInfo = instructors.map (i => `${i.name}: ${i.specialty}`);
console.log(instructorInfo);

//.map() and React
let kvArray = [
    {key:1, value:10},
    {key:2, value:20},
    {key:3, value: 30}
];
console.log(kvArray);

let reformattedArray = kvArray.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
});