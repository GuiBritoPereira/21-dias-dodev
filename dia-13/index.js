class Computador {
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd) {
        this.tipo = tipo; 
        this.processador = processador;
        this.video = video;
        this.armazenamento = armazenamento;
        this.memoriaRam = memoriaRam;
        this.ssd = ssd;
    }

    exibirInformacoes() {
        console.log("Informações do Computador:");
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Processador: ${this.processador}`);
        console.log(`Vídeo: ${this.video}`);
        console.log(`Armazenamento: ${this.armazenamento} GB`);
        console.log(`Memória RAM: ${this.memoriaRam} GB`);
        console.log(`SSD: ${this.ssd}`);
    }
}

// EXEMPLO DE USO

const meuComputador = new Computador("notebook", "Ryzen 7", "Dedicado", 1000, 16, true);
meuComputador.exibirInformacoes();