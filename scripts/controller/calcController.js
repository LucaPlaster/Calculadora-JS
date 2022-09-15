class CalcController {

    constructor(){

        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display"); //Seleciona elemntos por meio de seletores CSS3
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();

    }

    initialize(){

        this.setDisplayDateTime()

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000); //Função executada em um intervalo de tempo em ms

    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => { //forEach percorre todo id button

            element.addEventListener(event, fn, false);

        })
    
    }

    clearAll(){

        this._operation = [];

    }

    clearEntry(){

        this._operation.pop(); //remove o último elemento de um array e retorna aquele elemento.

    }

    getLastOperation(){

        return this._operation[this._operation.length-1]; //Pega o tamanho do elemnto do array a partir de 0

    }

    setLastOperation(value){

        this._operation[this._operation.length-1] = value;

    }

    isOperator(value){

        return (['+', '-', '*', '%', '/'].indexOf(value) > -1);

    }

    pushOperation(value){
        this._operation.push(value);

        if (this._operation.length > 3){ //Só aparece depois de ter 4 elementos no array

            let last = this._operation.pop();

            this.calc();

        }
    }

    calc(){
        let last = this._operation.pop();

        let result = eval(this._operation.join("")); //Join faz a mesma coisa que toString mas concatena tudo
                                                     //eval - computa um código JavaScript representado como uma string.

        this._operation = [result, last];
    }

    setLastNumberToDisplay(){

        

    }

    addOperation(value){

        if (isNaN(this.getLastOperation())) {

            if (this.isOperator(value)) {

                this.setLastOperation(value);

            } else if (isNaN(value)){

                console.log('TOKIII', value);

            } else {

                this.pushOperation(value);

            }

        } else {

            if (this.isOperator(value)){

                this.pushOperation(value);

            } else {

                let newValue = this.getLastOperation().toString() + value.toString(); 
                // Transforma o numero e o operador em String para concatenar
                this.setLastOperation(parseInt(newValue));

                //atualizar display

                this.setLastNumbertoDisplay();

            }
        }

    }

    setError(){

        this.displayCalc = "Error";
        
    }

    execBtn(value){

        switch (value) {

            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.clearEntry();
                break;

            case 'soma':
                this.addOperation('+');
                break;

            case 'subtracao':
                this.addOperation('-');
                break;

            case 'divisao':
                this.addOperation('/');
                break;

            case 'multiplicacao':
                this.addOperation('*');
                break;

            case 'porcento':
                this.addOperation('%');
                break;

            case 'igual':
                
                break;

            case 'ponto':
                this.addOperation('.');
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9': 
                this.addOperation(parseInt(value));
                break;

            default:
                this.setError();
                break;

        }

    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g"); //seleciona toda classe button com descendencia em g

        buttons.forEach((btn, index)=>{ //forEach percorre todo id button

            this.addEventListenerAll(btn, "click drag", e => {

                let textBtn = btn.className.baseVal.replace("btn-","");

                this.execBtn(textBtn);

            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {

                btn.style.cursor = "pointer";

            })

        })

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

        return this._timeEl.innerHTML; //Manipula o HTML pelo DOM

    }

    set displayTime(value){

        return this._timeEl.innerHTML = value;

    }

    get displayDate(){

        return this._dateEl.innerHTML;

    }

    set displayDate(value){

        return this._dateEl.innerHTML = value;

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