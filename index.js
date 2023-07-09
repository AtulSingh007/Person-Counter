document.getElementById("count-el").innerText=5
let countEL=document.getElementById("count-el") // pass in argument

console.log(countEL)

let saveEL= document.getElementById("save-el")

let count=0

function increment()
{
    count=count+1
    countEL.textContent=count
}

function save()
{
    let countSTR = count + " - "
    saveEL.textContent += countSTR
    countEL.textContent=0
    count=0
}

let name= "Atul"
let greetings="Hi, my name is "
let myGreetings= greetings + " " + name
console.log(myGreetings)