import { writeFile } from 'node:fs/promises';
import { argv } from 'node:process';
let finalPrint = [],
    arrOfVal,
    modifyVal,
    firstVal,
    secondVal
// print process.argv
argv.forEach((val, index) => {
  if (index===2){
    {
      arrOfVal = val.split(' ')
      for (let index = 0; index < arrOfVal.length; index++) {
          modifyVal = Math.ceil(arrOfVal[index].length / 2);
          firstVal = arrOfVal[index].slice(0, modifyVal);
          secondVal = arrOfVal[index].slice(modifyVal+0);
          finalPrint += `${secondVal}${firstVal}`+' ';
        }
    }
  }
});

try {
    const promise = writeFile('verydisco-forever.txt', finalPrint.trim()); 
  await promise;
  } catch (err) {
      console.error(err);
  }