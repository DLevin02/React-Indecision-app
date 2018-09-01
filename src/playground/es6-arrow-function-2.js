// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1));

// this keyword - no longer bound

const user = {
  name: 'Drew',
  cities: ['Charlotte', 'California', 'Korea'],
  printPlacesLived() {
       return this.cities.map((city) => this.name + ' has lived in ' + city);
      }  
};
console.log(user.printPlacesLived());

const multipler = {
    numbers: [4, 9, 12],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multipler.multiply());