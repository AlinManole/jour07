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
