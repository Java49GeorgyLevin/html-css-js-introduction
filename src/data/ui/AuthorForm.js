// import { Library } from "../library.js";
import { showErrorMessage } from "./errorMessage.js";
export class AuthorForm {
    #formElement;
    #inputAuthorElement;
    #authorBook;
    constructor(params) {
        this.#formElement = document.getElementById(params.idFormElement);
        this.#inputAuthorElement = document.getElementById(params.idInputAuthorElement);
        this.#authorBook = document.querySelector(params.authorBook);
    }

    addSubmitHandler(fun) {
        this.#formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const author = this.#inputAuthorElement.value;
        // const author = event.value;

        // const author = Array.from(this.#inputAuthorElement)[0].value;
        const books = fun(author);
        console.log(books);
        if(books.length == 0) {
            showErrorMessage(event.target, `the author ${author} is absent`, authorError);
            this.#authorBook.innerHTML = '';
        }
        else {this.#authorBook.innerHTML = bookData(books);}
            })
    }
}