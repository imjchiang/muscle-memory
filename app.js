var myString = "This is a string";
var myNumber = 5;
var myArray = [1, 2, 3, 4, 5];
var myBoolean = true;
const myObject = {
    propertyString: "This is another string",
    propertyNumber: 22,
    propertyArray: [9, 8, 7, 6, 5],
    propertyBoolean: false
};

console.log(myString);
console.log(myNumber);
console.log(myArray);
console.log(myBoolean);
console.log(myObject);

//make 10 functions
//pass in array
function passingArray(array)
{
    for (let i = 0; i < array.length; i++)
    {
        console.log(array[i]);
    }
}

//pass in callback
function passingCallback(callback, array)
{
    callback(array);
}

//pass in string
function passingString(string)
{
    let i = 0;
    while (i < string.length)
    {
        console.log(string[i]);
        i++;
    }
}

//pass in object
function passingObject(object)
{
    object.propertyArray.forEach(number => {
        console.log(number);        
    });
    console.log(object.propertyBoolean);
    console.log(object.propertyNumber);
    console.log(object.propertyString);
}

//pass in boolean
function passingBoolean(boolean)
{
    if (boolean === true)
    {
        console.log("We are good");
    }
    else
    {
        console.log("We are no good");
    }
}

//freestyle
function potato()
{
    let potat = "potato"
    for (let i = 0; i < potat.length; i++)
    {
        console.log(potat);
    }
}

//freestyle
function coolPotato()
{
    let coolboi = "potato";
    let lastPotato = coolboi.length - 1;
    while (coolboi.length > 0)
    {
        console.log(coolboi);
        coolboi = coolboi.slice(1);
    }

}

//freestyle
//freestyle
//freestyle

passingArray(myArray);
passingCallback(passingArray, myArray);
passingString(myString);
passingObject(myObject);
passingBoolean(myBoolean);
potato();
coolPotato();


const sectionOne = document.getElementById("section-one");
console.log(sectionOne);

const sectionTwo = document.getElementById("section-two");
console.log(sectionTwo);

const sectionThree = document.querySelector("#section-three");
console.log(sectionThree);

const sectionFour = document.querySelector("#section-four");
console.log(sectionFour);

const sectionFive = document.querySelector("#section-five");
console.log(sectionFive);


//don't use .innerHTML (can get hacked)
sectionOne.textContent = "Potatoes";
sectionTwo.textContent = "Tomatoes";
sectionThree.textContent = "Yams";
sectionFour.textContent = "Cucumbers";
sectionFive.textContent = "Papayas";


const paraOne = document.querySelector(".paragraph-one");
console.log(paraOne);
paraOne.textContent = "Baked Potatoes";

const paraTwo = document.querySelector(".paragraph-two");
console.log(paraTwo);
paraTwo.textContent = "Cherry Tomatoes";

const paraThree = document.querySelector(".paragraph-three");
console.log(paraThree);
paraThree.textContent = "Purple Yams";

const paraFour = document.querySelector(".paragraph-four");
console.log(paraFour);
paraFour.textContent = "Cucumbers are not special."

const paraFive = document.querySelector(".paragraph-five");
console.log(paraFive);
paraFive.textContent = "Papayas are kinda cool."

const containerSix = document.createElement("div");
containerSix.classList.add("container-six");
console.log(containerSix);

const sectionSix = document.createElement("h2");
sectionSix.setAttribute("id", "section-six");
console.log(sectionSix);
sectionSix.textContent = "Cabbages";

const paraSix = document.createElement("p");
paraSix.classList.add("paragraph-six");
paraSix.textContent = "Purple Cabbage";
console.log(paraSix);

const body = document.querySelector("body");
console.log(body);

body.appendChild(containerSix);
containerSix.appendChild(sectionSix);
containerSix.appendChild(paraSix);

//create container
const containerSeven = document.createElement("div");
console.log(containerSeven);

//add class
containerSeven.classList.add("container-seven");
console.log(containerSeven);

//create section
const sectionSeven = document.createElement("h2");
console.log(sectionSeven);

//add id
sectionSeven.setAttribute("id", "section-seven");
console.log(sectionSeven);

//add textContent
sectionSeven.textContent = "Watermelon";
console.log(sectionSeven);

//create paragraph
const paraSeven = document.createElement("p");
console.log(paraSeven);

//add class
paraSeven.classList.add("paragraph-six");
console.log(paraSeven);

//add textContent
paraSeven.textContent = "I'm allergic to watermelon";
console.log(paraSeven);

//append container to body
body.appendChild(containerSeven);

//append section to container
containerSeven.appendChild(sectionSeven);

//append paragraph to container
containerSeven.appendChild(paraSeven);