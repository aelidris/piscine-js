import { readdir } from 'node:fs/promises';
import { argv } from 'node:process'

let path
if (argv.length<3){
    process.exit()
} else {
    path = argv[2]
}
try {
  const files = await readdir(path);
  let i = 1,
    show,
    swap, 
    arr = [] 
    for (let file of files){

      show = file.replace('_', ' ').replace('.json', '').split(' ')
      swap = show[1]+' '+show[0];
      arr.push(swap)
      
      }
    arr.sort();

      for (let name of arr){
        console.log(i+'. '+name);
        i++
        }

} catch (err) {
  console.error(err);
}