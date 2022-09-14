class CalcController{
     
    constructor(){
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display"); //Seleciona elemntos por meio de seletores CSS3
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");

        this._currentDate; 
        this.initialize(); 
    }

    initialize(){
        this.setDisplayDateTime(); //Não ter carência de 1s para aparecer na tela

        setInterval(() =>{
            this.setDisplayDateTime();
        }, 1000)    //Função executada em um intervalo de tempo em ms
    }

    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons >  g, #parts > g"); //seleciona toda classe button com descendencia em g
    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        this._dateEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }
}