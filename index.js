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
var double =