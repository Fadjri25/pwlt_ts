interface Buku {
    judul: string;
    pengarang: string;
    tahunTerbit: number;
    tersedia: boolean;
}

const bukuBaru: Buku = {
    judul: "Panduan TypeScript",
    pengarang: "Syahru Rahmayuda",
    tahunTerbit: 2024,
    tersedia: true
};

console.log("--- Detail Buku ---");
console.log(`Judul        : ${bukuBaru.judul}`);
console.log(`Pengarang    : ${bukuBaru.pengarang}`);
console.log(`Tahun Terbit : ${bukuBaru.tahunTerbit}`);
console.log(`Status       : ${bukuBaru.tersedia ? "Tersedia" : "Tidak Tersedia"}`);