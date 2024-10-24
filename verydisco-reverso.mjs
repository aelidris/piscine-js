import { readFile } from 'node:fs/promises';
import { argv } from 'node:process';
let fileName, 
    arrOfVal,
    finalPrint = [],
    modifyVal,
    firstVal,
    secondVal

argv.forEach((val, index) => {
    if (index === 2) {
        fileName = val
    }
});


const data = await readFile(fileName, {encoding : 'utf8'}); 
 
arrOfVal = data.split(' ')
for (let index = 0; index < arrOfVal.length; index++) {
    modifyVal = Math.floor(arrOfVal[index].length / 2);
    firstVal = arrOfVal[index].slice(0, modifyVal);
    secondVal = arrOfVal[index].slice(modifyVal+0);
    finalPrint += `${secondVal}${firstVal}`+' ';
    }
console.log(finalPrint.trim());
          
   
      
