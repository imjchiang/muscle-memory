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
function passingCallback(callback)
{
    callback(myArray);
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
    console.log(object.propertyArray);
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
        potat.pop();
    }
}

//freestyle
//freestyle
//freestyle
//freestyle

potato();