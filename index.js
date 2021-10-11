var fs = require("fs");


// 01 - File System

var varJour7 = "jour07.txt"

fs.writeFile(varJour7, "Lets get ready !!",  function(err) {
    if (err) {
       return console.error(err);
    }
}) 


fs.readFile(varJour7, function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("This is the new String ==> " + data.toString())
})


// Delete 

// fs.unlink(varJour7, (err) => {
//     if (err) {
//       console.error(err)
//       return
//     }
// })


//02 - Map Double


var array = [1, 2, 3, 4, 5];

var doubles = array.map(function(num) {
    return num * 2;
});

console.log(doubles);

// 03 - Map Names

var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]

shortNames = longNames.map(function(person) {
    var nameName = {name:`${person.firstName} ${person.lastName}`}
    return nameName
})

console.log(shortNames)


// 04 - Filter Numbers

var array = [ 1, "toto" , 34 , "javascript" , 8];
var filtered = array.filter(function(item) {
    return (typeof item === "number")
  });

console.log(filtered)


// 05 - Filter Even 

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var even = numbers.filter(function(theNumber){
    return ( theNumber % 2 === 0 )
})

console.log(even)

// 06 - Cakes 

var cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

// var soldOut = cakes.filter(function (chocolate){
//         if (chocolate.flavor === "chocolate"){
            
//         }
//     })



  