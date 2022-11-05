// vehicle: 0 distance = 100 for all distance needs 10x fuel for distance
// return 100 
// if at 0 = vehicle fuel = 100
// pass a distance multiply by fuel

// calculate fuel

const calculateFuel = (distance) => {
    if (distance < 0) {
    return ("invalid distance"); }
    if (distance <= 10) {
    return 100;}
    
    {
    const fuel = distance * 10
    return fuel;
    
}
}

const myResult = calculateFuel(20);
console.log(myResult);

const calculateFuel2 = (distance) => { 
return (((distance*10)<100) ? 100 : (distance*10));}

const myResult2 = calculateFuel2(5)
console.log(myResult2);


// if swapping digits leads to larger number = false else true
// validate that it is a 2 digit number and integer
const largestSwap = (value) =>  {
    if (!Number.isInteger(value) || value > 99 || value < 10) {
        return ("try a different number")
        
    }

    const digit1 = (value.toString().charAt(0))
    const digit2 = (value.toString().charAt(1))

    if (digit1 >= digit2) {
        return true
    }
    else return false


}

const numberSwap = largestSwap(45)

console.log(numberSwap);


const largestSwap2 = (value) =>  {
    if (!Number.isInteger(value) || value > 99 || value < 10) {
        return ("try a different number")
        
    }

    const digit3 = (value.toString().charAt(0))
    const digit4 = (value.toString().charAt(1))

    return ((digit3 > digit4 ) ? true : false);


}

const numberSwap2 = largestSwap2(45)

console.log(numberSwap2);

// function find smallest of three numbers


const miniMe = (number1, number2, number3) => {
    
   return Math.min(number1, number2, number3)
   
}

console.log(miniMe(4,9,12));

// string name append Hi (1) or Bye depending on number selecting with name capitalized
//  return `Hi ${name}.Uppercase.atChar(0)` or `Bye ${name}.Uppercase.atChar(0)
// pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

const sayHiBye = (name1, number1) => {
    name1 = name1.charAt(0).toUpperCase() + name1.slice(1);
    if (number1 == 1)
    return `Hi ${name1}`;
    else return `Bye ${name1}`;
}
console.log(sayHiBye("susan", 2));
console.log(sayHiBye("gustav",1));
console.log(sayHiBye("frank",0));
