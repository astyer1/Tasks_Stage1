/* Create 2 objects: animal and cat, add move property to animal object, 
cat object must inherit move property from object animal */

let animal = {

    move: true
};

let cat = {

    __proto__: animal
};

console.log(cat.move);

// or

let animal1 = {

    move: true
};

let cat1 = Object.create(animal);

console.log(cat1.move);