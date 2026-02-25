function sapaan(input: string | number): string {
    if (typeof input === "string") {
        return `Halo, ${input}`;
    } else {
        return `Umur: ${input} tahun`;
    }
}

// Uji coba fungsi
console.log(sapaan("Fadjri"));
console.log(sapaan(21));