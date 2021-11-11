// // console.log("hello World")


// let backpack = []

// backpack.push("sword")
// backpack.push("shield")
// backpack.push("food")
//         // backpack.push("sword", "shield", "food")
//         // can also be written this way 

// let sword = backpack.shift()
//         // let sword = backpack.splice(0, 1)
//         // can also be written this way; keep in mind it will create an array for what is removed

// let furCoat = "fur coat"
// backpack.push(furCoat) // could also be written backpack.push("fur coat")
// backpack.pop() //removes the last index in the array which is the furCoat

// let itemCount = backpack.length

// backpack.push("flint", "blanket", "knife", "toothbrushes")

// let backpack2 = backpack.splice(2, 3)

//     console.log(backpack, backpack2)
//     // console.log(backpack2[0]) //tells you what is in backpack 2 first index; verbalized "backpack2 at index 0"

// // for (let i = 0; i < backpack.length; i++){
// //     console.log(backpack[i])
// // }

// // for (let i = 0; i < backpack2.length; i++){
// //     console.log(backpack2[i])
// // }

// if (backpack.length >= 3){          //this demonstrates a "hard coded" if statement where we know the backpack length and it is a rigid #
//     for (let i = 0; i < 3; i++){
//         console.log(backpack[i])
//     } 
// } else { for (let i = 0; i < backpack.length; i++){     //this demonstrates a "dynamic code" because the backpack length can change and the code will change with it
//     console.log(backpack[i])
// }}


// What is the final value of guessMe?

let guessMe = 54

while (guessMe < 100) {
    console.log("-------------------", guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        console.log("guessMe is divisible by 4 or 5. Added 25")
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        console.log("guessMe is divisible by 3. Subtracted 27")
        guessMe -= 27
    } else {
        console.log("guessMe added 3")
        guessMe += 3
    }
    guessMe += 22
    console.log(`Added 22, guessMe is now ${guessMe}`)
}
 console.log(guessMe)