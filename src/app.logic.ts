import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";

const { b: base, l: limit, s: showTable } = yarg;
let outputMessage = "";
const header = `
=====================
    Tabla del ${base}
=====================

`;

for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = header + outputMessage;

if (showTable) console.log(outputMessage);

const outputsPath = "outputs";

fs.mkdirSync(outputsPath, { recursive: true });
fs.writeFileSync(`${outputsPath}/tabla-${base}.txt`, outputMessage);
