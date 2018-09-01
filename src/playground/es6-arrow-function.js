function square(x) {
    return x * x;
};

console.log(square(3));

// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(9));

let firstName;
const getFirstName = (fullName) => {
    firstName = fullName.split(' ')[0];
    return firstName;
};
console.log(getFirstName('Drew Levin'));

const getFirstName1 = (fullName) => fullName.split(' ')[0];
console.log(getFirstName1('Juan Steve'));
