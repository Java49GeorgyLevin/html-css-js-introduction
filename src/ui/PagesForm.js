import { showErrorMessage } from "./errorMessage.js";

export class PagesForm {
    #formElement;
    #pagesFromElement;
    #pagesToElement;
    #pagesFrom;
    #pagesTo;
    #minMaxPagesError;

    constructor(params) {
        this.#formElement = document.getElementById(params.idFormElement);
        this.#pagesFromElement = document.getElementById(params.idPagesFromElement);
        this.#pagesToElement = document.getElementById(params.idPagesToElement);
        this.#minMaxPagesError = document.getElementById(params.idMinMaxPagesError);
        this.onChangePagesFrom();
        this.onChangePagesTo();
    }

    addSubmitHandler(fun) {
        this.#formElement.addEventListener("submit",(event) => {
        event.preventDefault();
        const pagesObj = {pagesFrom: this.#pagesFrom, pagesTo: this.#pagesTo};
        fun(pagesObj);
        }) 
    }

    onChangePagesFrom() {
        this.#pagesFromElement.addEventListener("change", (event) => {
        const value = +event.target.value;
        console.log(value);
            if(this.#pagesTo && value > this.#pagesTo) {
                showErrorMessage(event.target, 'pagesMin is wrong', this.#minMaxPagesError);
            }
            else {
                this.#pagesFrom = value;
            }
        })
    }
        
    onChangePagesTo() {
        this.#pagesToElement.addEventListener("change", (event) => {
        const value = +event.target.value;
        console.log(value);
        if(this.#pagesFrom && value < this.#pagesFrom) {
        showErrorMessage(event.target, 'pagesMax is wrong', this.#minMaxPagesError);
            }
        this.#pagesTo = value;
        })
    }
}