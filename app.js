// sync example

// console.log("Starting the program"); // starting the program


// function sleep(milliseconds){ 
//     //We are creating a function that will execute our time 
//     // the new keyword 
//     let startTime = new Date().getTime();
//     console.log("Program is running")

//     while(new Date().getTime() < startTime + milliseconds){
//         console.log("In progress")

//     }
//     console.log("Program is Done")
// }

// sleep(100); // Calling our function to perform

// console.log("do sumn else....")

// ASYNC Example

console.log("starting Program");

function sleep(milliseconds){
    console.log("program is running");
    setTimeout(()=>{
        console.log("Program is done")
    }, milliseconds);

}

sleep(1000);
console.log("do sumn else")