import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Multiplication table base",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Multiplication table limit",
  })
  .option("s", {
    alias: "showTable",
    type: "boolean",
    default: false,
    describe: "Show the multiplication table",
  })
  .option("n", {
    alias: "name",
    type: "string",
    default: "table",
    describe: "File name",
  })
  .option("d", {
    alias: "destination",
    type: "string",
    default: "outputs",
    describe: "File destination",
  })
  .check((argv, options) => {
    if (argv.b < 1) throw new Error("The base must be greater than 0");

    if (argv.l < 1) throw new Error("The limit must be greater than 0");

    return true;
  })
  .parseSync();
