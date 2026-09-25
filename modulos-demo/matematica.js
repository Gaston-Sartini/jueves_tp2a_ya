export function sumar(a, b){
    return a + b;
};
export function promedio(numeros){
    let total = 0;
    if(numeros.length > 0){
        numeros.forEach(numero => {
            total += numero;
        });
        total = total / numeros.length;
    }
    return total;
};
