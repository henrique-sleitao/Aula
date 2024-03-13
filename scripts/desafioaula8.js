class Alimento {
    constructor(nome, cor, peso, tipo) {
      this.nome = nome;
      this.cor = cor;
      this.peso = peso;
      this.tipo = tipo;
    }
  
    descricao() {
      return `O alimento é ${this.nome}, tem a cor ${this.cor}, pesa ${this.peso} gramas e é do tipo ${this.tipo}.`;
    }
  }
  
  class SimuladorAlimentos {
    constructor() {
      this.alimentos = [];
    }
  
    adicionarAlimento(alimento) {
      this.alimentos.push(alimento);
    }
  
    listarAlimentos() {
      return this.alimentos;
    }
  
    descreverAlimentos() {
      this.alimentos.forEach(alimento => {
        console.log(alimento.descricao());
      });
    }
  }
  
  // Criando uma instância do simulador de alimentos
  const simulador = new SimuladorAlimentos();
  
  // Adicionando alimentos
  const fruta = new Alimento('Maçã', 'vermelha', 150, 'fruta');
  const verdura = new Alimento('Espinafre', 'verde', 100, 'verdura');
  
  simulador.adicionarAlimento(fruta);
  simulador.adicionarAlimento(verdura);
  
  // Listando e descrevendo os alimentos
  console.log("Lista de alimentos registrados:");
  console.log(simulador.listarAlimentos());
  
  console.log("\nDescrição de cada alimento:");
  simulador.descreverAlimentos();