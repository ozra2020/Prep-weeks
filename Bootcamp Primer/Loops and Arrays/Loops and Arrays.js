//#1.Loop through the following array and count how many "computers" there are. Log the final count:
//count = "computer";
//for (var i = 0; i < officeItems.length; i++){
 //console.log (count == officeItems[i])
//} the result for computer is true and for the others is false
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var count = 0;
     for (var i = 0; i < officeItems.length; i++){
         if(officeItems[i] === "computer"){
             count++;
         }
     }
       console.log (count);

       
 //#2.Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.
 var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
for(i=0; i< peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 ){
console.log(" is old enough")
} else {
console.log(" is not old enough") 
 }
}

//Optional bonus challenges for this problem
//#1.Log to the console a personalized message like:
//Mike is not old enough to see Mad Max or Madeline is old enough to see Mad Max.
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
for(i=0; i< peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 ){
console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max") 
} else {
console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max") 
 }
}


//#2.Check to see if the movie goer is a male or female for an even more personalized message.
//Mike is not old enough to see Mad Max Fury Road, don't let HIM in, or Madeline is old enough. SHE'S good to see Mad Max Fury Road.
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
for(i=0; i< peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. She is good to see Mad Max Fury Road.") 
} else {
console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let Her in.") 
 }
}
//Optional Bonus challenge
//Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number. The array [2, 3, 2] would toggle the button 7 times.
//The light is off to start with. Log to the console whether or not the light is on at the end.
[2, 5, 435, 4, 3] // "The light is on"
[1, 1, 1, 1, 3]   // "The light is on"
[9, 3, 4, 2]      // "The light is off"




 

