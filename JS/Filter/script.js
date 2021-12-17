const maca = {
    value: 2.
};

const laranja = {
    value: 3,
};

function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const num = [1, 2];

console.log('this -> maçã', mapComThis(num, maca));
console.log('this -> laranja', mapComThis(num, laranja));

//Multiplicar Array

function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2
    })
}

const nums = [2, 5, 8, 4, 12];

console.log(mapSemThis(nums));
console.log(nums);

//FILTER

function filtrarPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1, 23, 7, 57, 45, 4, 8, 80];

console.log(filtrarPares(meuArray));

//REDUCE

function somaNumeros(arr){
    return arr.reduce(function(prev, current) {
        console.log({prev});
        console.log({current});
        return prev + current;
    })
}

const arr = [1, 2];

console.log(somaNumeros(arr));

//REDUCE 2

const lista = [
    {
        nome: 'Sabão em pó',
        preco: 30,
    },
    {
        nome: 'cereal',
        preco: 12,
    },
    {
        nome: 'toalha',
        preco: 40,
    },
];

const saldoDisponivel = 100;

function calcularSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index) {
        console.log('rodada', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calcularSaldo(saldoDisponivel, lista));
