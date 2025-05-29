import removeBackground, { removeForeground } from "@imgly/background-removal-node";
import { error } from "console";
import fs from 'fs';
import path from "path";
import { blob, buffer } from "stream/consumers";



const inputPath = "./planta.jpg";
const outputPath = "./ouput-planta.jpg";

if(!fs.existsSync(inputPath)){
    console.error(`Input file not  found : ${inputPath}`);
    process.exit(1);

}

const absolutepath = path.resolve(inputPath)
const imageURL = `file://${absolutepath}`

async function blobToBuffer(blob){
    const arrayBuffer  = await blob.arrayBuffer();
    return Buffer.from(arrayBuffer);
    
}

async function main(){
    try{
        const blob = await removeBackground(imageURL);
        console.log("Background removido exitosamente");
        const buffer = await blobToBuffer(blob);
        fs.writeFileSync(outputPath, buffer);
    }catch(error){
        console.log(error);
    }
}

main();

