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
//pass in object
//pass in boolean
//freestyle
//freestyle
//freestyle
//freestyle
//freestyle
