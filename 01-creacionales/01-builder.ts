/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

class Computer {
  public cpu: string = "cpu - not defined";
  public ram: string = "ram - not defined";
  public storage: string = "storage - not defined";
  public gpu?: string;

  displayConfiguration() {
    console.log(
      `Computadora: 
      CPU: ${this.cpu} 
      RAM: ${this.ram}
      Storage: ${this.storage}
      GPU: ${this.gpu ?? "Sin GPU"}`
    );
  }
}

class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCPU(cpu: string) {
    this.computer.cpu = cpu;
    return this;
  }

  setRAM(ram: string) {
    this.computer.ram = ram;
    return this;
  }

  setSTORAGE(storage: string) {
    this.computer.storage = storage;
    return this;
  }
  setGPU(gpu: string) {
    this.computer.gpu = gpu;
    return this;
  }

  build() {
    return this.computer;
  }
}

function main() {
  const gamingComputer: Computer = new ComputerBuilder()
    .setCPU("Ryzen 7 3.8ghz")
    .setRAM("16gb")
    .setSTORAGE("1TB")
    .setGPU("RTX 4080 Ti")
    .build();

  console.log("Computadora Gaming");
  gamingComputer.displayConfiguration();
}

main();
