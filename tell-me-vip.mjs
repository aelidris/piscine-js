import { readdir } from 'node:fs/promises';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const pathFolder = process.argv[2];

if (!pathFolder){
    process.exit(1)
}
try {
    let contentDir = await readdir(pathFolder),
        arr = [],
        finalRes = '';

   
    for (let file of contentDir) {
        const filePath = path.join(pathFolder, file); 
        const dataFile = await readFile(filePath, { encoding: 'utf8' });

        try {
            const parseFile = JSON.parse(dataFile);

            if (parseFile.answer && parseFile.answer === 'yes') {
                let show = file.replace('_', ' ').replace('.json', '').split(' ');
                let swap = `${show[1]} ${show[0]}`; 
                arr.push(swap); 
            }
        } catch (error) {
            console.error(`Error parsing file ${file}: ${error.message}`);
        }
    }
    
    arr.sort();

    arr.forEach((name, index) => {
        finalRes += `${index + 1}. ${name}\n`;
    });

    await writeFile('vip.txt', finalRes.trim());

} catch (err) {
    console.error(`Error processing files: ${err.message}`);
}
