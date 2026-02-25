class Lingkaran {
    jariJari: number;

    constructor(jariJari: number) {
        this.jariJari = jariJari;
    }

    hitungLuas(): number {
        return Math.PI * this.jariJari * this.jariJari;
    }
}

const bulat = new Lingkaran(10);
console.log(`Jari-jari: ${bulat.jariJari}`);
console.log(`Luas Lingkaran: ${bulat.hitungLuas().toFixed(2)}`);