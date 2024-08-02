function ordernarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Numeros ordenados ${numerosOrdenados.join(', ')}`);
}

ordernarNumeros(1, 5, 9);