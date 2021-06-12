let array = [3, 3, 4, 2, 4, 4, 2, 4,4,4];
let arrayObject = {
};


for (let key of array){
    arrayObject[key] = 0;
}
// console.log(arrayObject)
let majorityElementsFound = false;
function getMajorElementInArray(arrayObject){
    for (let element of array){
    arrayObject[element] += 1;
    if(arrayObject[element] > (array.length / 2)){
        majorityElementsFound = true;
        console.log(element);
    }
}
    if(! majorityElementsFound === true){
        console.log("No Majority Element ")
    }
}

getMajorElementInArray(arrayObject);