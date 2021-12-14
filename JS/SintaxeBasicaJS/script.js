// let x = false;

// console.log(typeof(x));

//OPERADOR LOGICO

//&& = E
// II - OU
// ! = NÃO

// var adicao = 7%2;
// console.log(adicao)

// VETORES OU ARRAYS
// let array = ['string', 1, true, ['array1'], ['array2']];

// foeEach() = itera um array

// array.forEach(function(ietm, índex){console.log(array)});

// push(); = add um item no final do array

// array.push('willy');
// console.log(array)

// pop(); = remove item no final do array 

// shift(); = reove um item no inicio de um array

// unshift(); add um item no inicio de um array

// indexOf(); = retorna o indíce de um valor 

//OBJETOS

// var xicara = {
//     cor: "azul",
//     tamanho: "médio",
//     numero : 1,
// }

// console.log(xicara.cor)

//ESTRUTURAS CONDICIONAIS

// FUNÇÃO

//PROMPT

function calculadora(){
    const operacao = Number( prompt(`Escolha uma operação:\n 1 - Soma (+)\n 2 - Substração (-) \n 3 - Multiplicação (*) \n 4 - Divisão real (/) \n 5 - Divisão inteira (%) \n 6 - Potenciação (**)`));

    if(!operacao || operacao > 7){
        alert("Erro - operação inválida");
    } else{
        let n1 = Number(prompt('insira o primeiro valor:')) ;
        let n2 = Number(prompt('insira o segundo valor:')) ;
        let resultado;
    
        function soma(){
            resultado = n1 +n2;
            alert(`${n1} + ${n2} = ${resultado}`)
        }
    
        function substracao(){
            resultado = n1 -n2;
            alert(`${n1} + ${n2} = ${resultado}`)
        }
    
        function multiplicacao(){
            resultado = n1 *n2;
            alert(`${n1} + ${n2} = ${resultado}`)
        }
    
        function divisaoReal(){
            resultado = n1 / n2;
            alert(`${n1} + ${n2} = ${resultado}`)
        }
    
        function divisaoInteira(){
            resultado = n1 %n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é igual ${resultado}` )
            novaOperacao();
        }
    
        function potenciacao(){
            resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2}  é elevado a = ${resultado}`)
            novaOperacao();
        }
    
        function novaOperacao(){
            let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
            if(opcao == 1){
                calculadora();
            } else if (opcao == 2){
                alert('Até mais')
            } else{
                alert('digit uma opção válida!')
                novaOperacao();
            }
        }
    
        if(operacao == 1){
            soma();
        } else if (operacao == 2){
            substracao();
        } else if (operacao == 3){
            multiplicacao();
        } else if(operacao == 4){
            divisaoReal();
        } else if(operacao == 5){
            divisaoInteira();
        } else if(operacao ==6){
            potenciacao();
        }
    }

  
}

calculadora();

// function w() {
//     const op = prompt('Escolha uma oção');
// }

// w();