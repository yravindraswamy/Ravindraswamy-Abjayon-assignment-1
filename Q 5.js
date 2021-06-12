let matrix = [];
let row1=[0,1,1,1];
let row2 = [1,0,1,0];
let row3 =[0,1,0,1];
let row4 = [1,1,1,1];

matrix.push(row1.sort());
matrix.push(row2.sort());
matrix.push(row3.sort());
matrix.push(row4.sort());
let finalResult = [];
for (let row of matrix){
 result = row.every((eachItem) => (eachItem === 1));
 finalResult.push(result);
}


let index = finalResult.findIndex(eachItem =>{
    if(eachItem == true){
        return true
    }else{
        return false
    }
});
console.log(index)