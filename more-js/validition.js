function add(num1,num2) {
    if( typeof num1 == "Number" ||  typeof num2 == "Number"){
        return num1 + num2
    }
    else{
        return 'please entre a number'
    }
}
const a = add(12, true)
console.log( a)