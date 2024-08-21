///Practise JS basic ///

//Reverse a string//

// let inputString = prompt("enter a word")
// let reverseString = inputString.split("").reverse("").join("")
// console.log(reverseString);

////get sum or Array Elements//
// let number = [1,2,3,4,5,6,6,7,8,8]
// let sum = 0
// for (let i = 0; i < 10; i++){
//     sum += number[i]
// }
// console.log(sum);

///pallindrome///
// let inputString = prompt("give me a word")
// let normalString = inputString.split("").reverse('').join("")
// let reverseString =  normalString
//  if (reverseString == inputString){
//     console.log("is a pallen");
//  }else{
//     console.log("is not a pallen");
//  }

// let givenNumber = prompt("enther number")
// let factor = []
// for (let i = 1; i <= givenNumber ; i++){
//     if(givenNumber % i === 0 ){
//         factor.push(i)
//     }

//     }
// console.log(factor);

// function isEven (a){
//  if (a % 2 == 0)
//     console.log("its an even number");
// else{console.log("Is not a even number")}
// }
// isEven(10)

// function isOdd (a){
//     if (a % 2 !== 0)
//         console.log("its an odd number");
//     else{
//         console.log("its not an odd number");
//     }
// }
// isOdd(0)

// a = 1234

// function reverseingNumber(inputNumber) {
//     reverseNumber = 0;
//     while(inputNumber > 0){
//         remainder = inputNumber % 10;
//         reverseNumber = reverseNumber * 10 + remainder;
//         inputNumber = parseInt(inputNumber / 10);
//     }
//     return reverseNumber
// }
// console.log(reverseingNumber(222));

// function delayFucction (){
//     console.log("delayed");
//     console.log("danger");
// }
//  const interval = setInterval(delayFucction,5000)
//  setTimeout(clearInterval(interval), 1000)

// async function fetchDAta(){
//     const response = await fetch ('https://catfact.ninja/fact')
//     const data = await response.json
//     return data;
// }
// fetchDAta().then(data => console.log(data));
/// objects///

// class Person {
//     name;
//     lastname;
//     year;
//     sub;
//     state;
//     postcode;

// constructor(namearg, lastnamearg , yeararg) {
//     this.name = namearg;
//     this.lastname = lastnamearg;
//     this.year= yeararg;
//     this.sub = subarg;
//     this.state = statearg
//     this.postcode = postcodearg
// }
// great()  {
//     console.log("hi i am " + this.name + this.sub + this.state+this.postcode)
// }
// getYear() {
// console.log(2024 - this.year);
// }
// getAddress() {
//     console.log("my current address is " + this.sub +this.state+ this.postcode);
// }
// }
// let personObject = new Person("hari" , "bahadur" , 1996 , "ryde" , "NSW" , 2112)
// personObject.great()
// personObject.getyear()
// personObject.getAddress()
///need to fix///

//Encapsulation//
class Car {
    #year;
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.#year = year;
    }
    getYear() {
        return this.#year;
    }
    getBrand() {
        return this.brand;
    }
}

const myCar = new Car('Ford', 'Mustang', 2000);
console.log(myCar.getBrand());
console.log(myCar.getYear());
///Inheritance

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hi! I am " + this.name);
    }
}
class Student extends Person {
    constructor(name, age, studendId) {
        super(name, age);
        this.studendId = studendId;
    }
}

const personObj = new Person("Hari", 25);
personObj.greet();

const studentObj = new Student("Prakash", 28, 10000);
studentObj.greet();

///classwork//
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
      }
      getArea(){
        return (this.width * this.height)
      }
      getParameter(){
        return(2 * (this.width + this.height))
      }
}
let object = new Rectangle (12 , 20)
console.log(object.getArea());
console.log(object.getParameter());

class Vechicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
}