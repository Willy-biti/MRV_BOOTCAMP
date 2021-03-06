class contaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return "operação negada"
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class contaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._contaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._contaoCredito;
    }

    set cartaoCredito(valor){
        this._contaoCredito =valor;
    }
}

class contaPoupanca extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero );
        this.tipo = 'poupança';
    }
}

class contaUniversitaria extends contaBancaria{
    constructor(agencia, numero ){
        super(agencia, numero );
        this.tipo = 'Universitária';
    }

    sacar(valor){
        if(valor > 500){
            return 'operação negada!'
        }
        this._saldo = this._saldo - valor;
    }
}