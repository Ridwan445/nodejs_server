const animals = [
  { id: 1, name: "dog" },
  { id: 2, name: "cat" },
  { id: 3, name: "rat" },
  { id: 4, name: "rabbit" },
  { id: 5, name: "lion" },
];


const animal = animals.filter(x => x.id == 4 )
console.log(animal)