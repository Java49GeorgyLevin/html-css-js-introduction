import { showErrorMessage } from "./errorMessage.js";

export class BookForm {
    #formElement;
    #inputElements;
    #datePublicationInputElement;
    #pagesInputElement;
    #dateErrorElement;
    #pagesErrorElement;
    #minPages;
    #maxPages;
    #minYear;
    #maxYear;

     constructor(params) {
     this.#formElement = document.getElementById(params.idForm);
     this.#inputElements = document.querySelectorAll(`#${params.idForm} [name]`);
     this.#datePublicationInputElement = document.getElementById(params.idPublicationDate);
     this.#pagesInputElement = document.getElementById(params.idPagesInput);
     this.#dateErrorElement = document.getElementById(params.idPublicationDateError);
     this.#pagesErrorElement = document.getElementById(params.idPagesError);
     this.#minPages = params.minPages;
     this.#maxPages = params.maxPages;
     this.#minYear = params.minYear;
     this.#maxYear = this.getMaxYear();
     this.onChange();
     }

addSubmitHandler(fun) {
    this.#formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submitted");
    const book = Array.from(this.#inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    console.log(book)
    fun(book);
    bookAdded(book.book_title);
    })
}

onChange() {
    this.#pagesInputElement.addEventListener("change", (event) => {
        this.validatePages(event.target);
    })
    this.#datePublicationInputElement.addEventListener("change", (event) => {
        this.validatePublicationDate(event.target);
    })
}

validatePages(element) {
    const value = +element.value;
    if (value < this.#minPages || value >= this.#maxPages) {
        const message = value < this.#minPages ? `pages must be ${this.#minPages} or greater`
            : `pages must be ${this.#maxPages} or less`;
        showErrorMessage(element, message, this.#pagesErrorElement);
    }
}

validatePublicationDate(element) {
    const value = +element.value.slice(0, 4);
    if (value < this.#minYear || value > this.#maxYear) {
        const message = value < this.#minYear ? `year must be ${this.#minYear} or greater`:
             `year must be ${this.#maxYear} or less`;
        showErrorMessage(element, message, this.#dateErrorElement) ;    
    }
}

getMaxYear() {
        return new Date().getFullYear();
    }
}