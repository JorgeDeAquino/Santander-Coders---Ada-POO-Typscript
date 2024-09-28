abstract class Veiculo {
    protected velocidade: number = 0;
  
    constructor(protected modelo: string) {

    }
  
    //  implementado pela subclasse
    abstract acelerar(): void; 

    //  implementado pela subclasse
    abstract desacelerar(): void;
  
    frear(): void {
      this.velocidade = 0;
      console.log(`${this.modelo} está parado.`);
    }
  
    exibirVelocidade(): void {
      console.log(`Velocidade atual do ${this.modelo}: ${this.velocidade} km/h`);
    }
  }

  class Carro extends Veiculo{
    acelerar(): void {
        this.velocidade += 20;
      console.log(`${this.modelo} está acelerando e sua velocidade é: ${this.velocidade}.`);
    }

    desacelerar(): void {
        this.velocidade -= 10;
      console.log(`${this.modelo} está desacelerando e sua velocidade é: ${this.velocidade}.`);
    }
  }

  class Bicicleta extends Veiculo{
    acelerar(): void {
        this.velocidade += 5;
      console.log(`${this.modelo} está acelerando e sua velocidade é: ${this.velocidade}.`);
    }

    desacelerar(): void {
        this.velocidade -= 1;
      console.log(`${this.modelo} está desacelerando e sua velocidade é: ${this.velocidade}.`);
    }
  }

  class Moto extends Veiculo{
    acelerar(): void {
        this.velocidade += 15;
      console.log(`${this.modelo} está acelerando e sua velocidade é: ${this.velocidade}.`);
    }

    desacelerar(): void {
        this.velocidade -= 10;
      console.log(`${this.modelo} está desacelerando e sua velocidade é: ${this.velocidade}.`);
    }
  }