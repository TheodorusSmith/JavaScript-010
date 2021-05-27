// function declaration
function sumSquareA(numberA, numberB){
    const add = ((numberA * numberA) + (numberB * numberB));
    const addSquared = (add * add);
    return addSquared;
}
const resultA = sumSquareA(3,4);
console.log(resultA);

// function expression
const sumSquareB = function(numberA, numberB){
    const add = ((numberA * numberA) + (numberB * numberB));
    const addSquared = (add * add);
    return addSquared;
};

const resultB = sumSquareB(3,4);
console.log(resultB);

// function rrows
const sumSquareC = (numberA, numberB) =>{
    const add = ((numberA * numberA) + (numberB * numberB));
    const addSquared = (add * add);
    return addSquared;
};

const resultC = sumSquareC(3,4);
console.log(resultC);
