import { showErrorMessage } from "./errorMessage.js";

export class AuthorForm {
    #formElement;
    #inputAuthorElement;
    #theAuthorError;
    constructor(params) {
        this.#formElement = document.getElementById(params.idFormElement);
        this.#inputAuthorElement = document.getElementById(params.idInputAuthorElement);
        this.#theAuthorError = document.getElementById(params.idTheAuthorError);
    }

    addSubmitHandler(fun) {
        this.#formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const author = this.#inputAuthorElement.value;
        fun(author);
            })
    }
}