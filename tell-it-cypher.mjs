import { readFile, writeFile } from 'node:fs/promises'

async function processFile() {
    const file = process.argv[2]
    const mode = process.argv[3]
    const newName = process.argv[4]

    if (!file || !mode) {
        console.error('Missing required arguments')
        process.exit(1)
    }

    if (mode !== 'encode' && mode !== 'decode') {
        console.error('Invalid mode. Use "encode" or "decode"')
        process.exit(1)
    }

    try {
        const data = await readFile(file)

        let processedData
        if (mode === 'encode') {
            processedData = Buffer.from(data).toString('base64')
            const outputFile = newName || 'cypher.txt'
            await writeFile(outputFile, processedData)
        } else {
            processedData = Buffer.from(data.toString(), 'base64').toString('utf8')
            const outputFile = newName || 'clear.txt'
            await writeFile(outputFile, processedData)
        }
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error("Can't read from the file")
        } else {
            console.error("Error processing file")
        }
        process.exit(1)
    }
}

processFile()