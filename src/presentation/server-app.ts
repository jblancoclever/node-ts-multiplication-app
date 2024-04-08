import { CreateTable } from "../domain/useCase/createTable.useCase";
import { SaveFile } from "../domain/useCase/saveFile.useCase";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  name: string;
  destination: string;
}

export class ServerApp {
  static run({ base, limit, showTable, name, destination }: RunOptions) {
    console.log("ServerApp running...");

    const table = new CreateTable().execute({ base, limit });
    const wasCreated = new SaveFile().execute({
      fileContent: table,
      fileName: `${name}-${base}`,
      fileDestination: destination,
    });

    if (showTable) console.log(table);

    wasCreated ? console.log("File created") : console.log("File not created");
  }
}
