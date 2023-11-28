function cutPieces(fruit) {
    return fruit * 5;
}

function fruitProcess(kiwi, mango) {
    const kiwiPices = cutPieces(kiwi);
    const mangoPices = cutPieces(mango);
    const juice = `kiwi fruit pices of ${kiwiPices} kiwipices and mango fruit pices of ${mangoPices} mangopices`;
    return juice;
}
console.log(fruitProcess(10, 20));
