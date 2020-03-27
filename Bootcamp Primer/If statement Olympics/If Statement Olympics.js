//Preliminaries\\

//1.Write an if statement that prints "is greater than" if 5 is greater than 3
if(5>3){
  console.log("is greater than")
}

//2.Write an if statement that prints "is the length" if the length of "cat" is 3
// == is equal to ===
if("cat".length === 3){
console.log("is the length")
}

//3.Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal
if("cat" === "dog"){
console.log("is the same")
} else {
console.log("not the same")
}


//Bronze Medal\\

var person = {
name: "Bobby",
age: 12
}
//1.Using the below object, write an if statement that prints <theNameOfThePersonInObject> is allowed to go to the movie if they are old enough (18 or older), and the opposite if they are not older than 18.
// if (person.name === "Bobby" && person.age >= 18 ){
if (person.age >= 18 ){
console.log("is allowed to go to the movie")
} else {
console.log("is not allowed to go to the movie")
}

//2.Using that same object, only allow them into the movie if their name starts with "B"
//char ch=name.charAt(0) or person.name [0], returns the char value at the 1st index
if (person.name.charAt(0) === "B"){
console.log(person.name + "is allowed to go to the movie")
} else {
console.log(person.name + "is not allowed to go to the movie")
}

//3.Using that same object, only allow them into the movie if their name starts with "B" and they are older than 18.
if (person.name.charAt(0) === "B" && person.age >18 ){
console.log("is allowed to go to the movie")
} else {
console.log("is not allowed to go to the movie")
}


//Silver Medal\\

//1.Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.
//Identity / strict equality (===)
if(1 === "1"){
console.log("strict")
} else if(1 === "1"){
console.log("loose" || "abstract")
} else {
console.log("not equal at all")
}

//2.Write an if statement that prints "yes" if 1 is less than or equal to 2 AND (&&) 2 is equal to 4
//if(1 <= "2" || 2 === "4" ){
if(1 <= "2" && 2 === "4" || (2*3) > "4" && (2+4) > "4" ){
console.log("yes")
}


//Gold Medal\\

//Gold may take some googling!

//1.Write an if statement that checks to see if "dog" is a string
var dog = "dog"
if(typeof dog === "string") {
console.log(true)
}

//2.Write an if statement that checks to see if "true" is a boolean
var booleanValue = true;
if(typeof booleanValue === "boolean") {
console.log(true || false)
}

//3.Write an if statement that checks to see if a variable has been defined or not
//4.Write an if statement asking if "s" is greater than 12?

//6.Write a ternary statement that console.logs whether a number is odd or even.
var myNum = 10;
if(myNum % 2 === 0) {
  console.log("Even")
} else {
  console.log("Odd")
}











