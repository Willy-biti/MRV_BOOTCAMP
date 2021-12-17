const alunos = [
    {
        nome: 'Willy',
        nota: 10,
        trurma: '1B'
    },
    {
        nome: 'Pacifique',
        nota: 9,
        trurma: '1B'
    },
    {
        nome: 'Gedeon',
        nota: 8,
        trurma: '1C'
    },
    {
        nome: 'Raphael',
        nota: 7,
        trurma: '2B'
    },
    {
        nome: 'Istin',
        nota: 3,
        trurma: '1C'
    },
]

function  alunosAprovados(arr, media) {
    let aprovados = [];
    for(let i =0; i < arr.length; i++){
        if(arr[i].nota >= media){
            aprovados.push(arr[i].nome);
        }
    }
    return aprovados
}

console.log(alunosAprovados(alunos, 5))



//DEBUGGING e ERRO HANDLING

function validarArray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError('Envie os parâmetros');

        if(typeof arr !== 'object')
            throw new TypeError('Array precisa ser do tipo objet');

        if(typeof num !== 'number')
            throw new TypeError('Array precisa ser do tipo number');

        if(arr.length !== num) throw new RangeError('Tamanho inválido');

        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Esse erro é um ReferenceErro!")
            console.log(e.message)
        } else if(e instanceof TypeError){
            console.log("Esse erro é um TypeErro!")
            console.log(e.message)
        } else if(e instanceof RangeError){
            console.log("Esse erro é um RangeErro!")
            console.log(e.message)
        } else{
            console.log("Tipo de erro não esperado: " + e)
        }
    }
}

console.log(validarArray());

//ASSINCRONA

