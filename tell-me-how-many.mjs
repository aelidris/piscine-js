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
  console.log(files.length);
} catch (err) {
  console.error(err);
}