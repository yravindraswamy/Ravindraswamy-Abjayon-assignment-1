let array = [1,2,3,4,5];
let array2 = array;
// console.log(array2)
let d = 2;
let n = array.length;
let rotatedArray=[];
function rotateElemnts(array,d,n){
        rotatedArray = array.slice(d,n).concat((array2.slice(0,d)));
        // console.log(rotatedArray)
        return rotatedArray;
}
console.log(rotateElemnts(array,d,n));