//VERIFICAR PALÍNDROMO Solução1

function verficar(string){
    if (!string) return "String inexistente"

    return string.split("").reverse().join("") === string;
}

console.log(verficar("ovo"));

//VERIFICAR PALÍNDROMO Solução1

function verifica2(string){
    if(!string) return "string inexistente";

    for (let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length -1-i] ){
            return false;
        }
    }

    return true;
}

console.log(verifica2("abba"))

//SUBSTITUIR NÚMEROS PARES

function substituir(num){
    for(let i=0; i < num.length; i++){
        if(num[1] ==0){
            console.log("você já é zero")
        } else if(num[i] % 2 === 0) {
            console.log(`substirtuir ${num[i]} por 0...`);
            num[i] =0;
        }
    }
    return num
}

let nu =[1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituir(nu))