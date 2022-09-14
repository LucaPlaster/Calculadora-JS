class CalcController{
     
    constructor(){
        this._displayCalc = "0";
        this._currentDate; 
        this.initialize(); 
    }

    initialize(){
        let displayCalcEl = document.querySelector("#display"); //Seleciona elemntos por meio de seletores CSS3
        let dataEl = document.querySelector("#data");
        let horaEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "4567"; //Manipula o HTML pelo DOM
        dataEl.innerHTML = "01/05";
        horaEl.innerHTML = "00:00";
    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get dataAtual(){
        return this._currentDate; 
    }

    set dataAtual(valor){
        this._currentDate = valor;
    }
}