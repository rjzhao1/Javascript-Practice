var createBase = (base) =>{
    return (number) => {
        return base+number;
    }
}

var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27