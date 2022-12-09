import { Library } from "./data/library.js";

const inputElements = document.querySelectorAll(".form-class [name]");
const MIN_pages = 50;
const MAX_pages = 2000;
const MIN_YEAR = 1980;
const maxYear = getMaxYear();
const TIME_OUT_ERROR_MESSAGE = 5000;
const ERROR_CLASS = "error";
const library = new Library();

const dateErrorElement = document.getElementById("date_error");
const pagesErrorElement = document.getElementById("pages_error");

const menuSection = document.querySelectorAll("section");
const menuButton = document.querySelectorAll(".menu-button");
const ACTIVE_BUTTON = "active-button";

const allbooks = document.querySelector(".all-books");
const pagesBooks = document.querySelector(".pages-books");
const minMaxPagesError = document.getElementById("min-max-pages-error");
let pagesFrom = 0;
let pagesTo = 0;
const listAuthors = document.querySelector(".list-authors");
const authorBook = document.querySelector(".author-book");
const authorError = document.querySelector(".author-error")

function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const book = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    console.log(book)
    library.addBook(book);
    bookAdded(book.book_title);
    
}
function onChange(event) {

    if (event.target.name == "pages") {
        validatePages(event.target)
    } else if (event.target.name == "publicationDate") {
        validatePublicationDate(event.target);
    }
}
function validatePages(element) {
    const value = +element.value;
    if (value < MIN_pages || value > MAX_pages) {
        const message = value < MIN_pages ? `pages must be ${MIN_pages} or greater`
            : `pages must be ${MAX_pages} or less`;
        showErrorMessage(element, message, pagesErrorElement);
    }

}
function validatePublicationDate(element) {
    const value = +element.value.slice(0, 4);
    if (value < MIN_YEAR || value > maxYear) {
        const message = value < MIN_YEAR ? `year must be ${MIN_YEAR} or greater`:
             `year must be ${maxYear} or less`;
        showErrorMessage(element, message, dateErrorElement) ;    
    }

}
function showErrorMessage(element, message, errorElement) {
    element.classList.add(ERROR_CLASS);
    errorElement.innerHTML = message;
    setTimeout(() => {
        element.classList.remove(ERROR_CLASS);
        element.value = ''; 
        errorElement.innerHTML = '';
    }, TIME_OUT_ERROR_MESSAGE);
}

function getMaxYear() {
    return new Date().getFullYear();
}

function showMenu(index) {
    menuSection.forEach (section => section.hidden = true);
    menuButton.forEach (button => button.classList.remove(ACTIVE_BUTTON));
    menuSection[index].hidden = false;
    menuButton[index].classList.add(ACTIVE_BUTTON);
    if(index == 1) {
        showAllbooks();
    }
    if(index == 3) {
        showAllAuthors();
    }
}

function bookAdded(name) {
    const confirmationAdded = document.getElementById("the-book-added");
    confirmationAdded.innerHTML = `${name} added successfully`;
    setTimeout(() => confirmationAdded.innerHTML = '', 3000);
}

function bookData(books) {
    return books.map(e => 
    `<li class="card">
    <p class="book-data">Title: ${e.book_title}</p>
    <p class="book-data">Author: ${e.author}</p>
    <p class="book-data">Publication Date: ${e.publicationDate}</p>
    <p class="book-data">Genre: ${e.genre}</p>
    <p class="book-data">Pages: ${e.pages}</p>
    </li>`).join('');
}

function showAllbooks() {
    const books = library.getAllBooks();
    console.log(books);
    allbooks.innerHTML = bookData(books);
}

function pagesMin(event) {
    event.target.classList.remove(ERROR_CLASS);
    const value = +event.target.value;
    if(pagesTo && value > pagesTo) {
        showErrorMessage(event.target, 'pagesMin is wrong', minMaxPagesError);
    }
    else {
        pagesFrom = value;
    }
}

function pagesMax(event) {
    event.target.classList.remove(ERROR_CLASS);
    const value = +event.target.value;
    if(pagesFrom && value < pagesFrom) {
        showErrorMessage(event.target, 'pagesMax is wrong', minMaxPagesError);
    }
    pagesTo = value;
}

function pagesMinMax(event) {
    event.preventDefault();
    console.log(pagesFrom, pagesTo);
    const books = library.getBooksByPages(pagesFrom, pagesTo);
    console.log(books);
    pagesBooks.innerHTML = bookData(books);
}

function showAllAuthors() {
    listAuthors.innerHTML = 
    '<option value hidden selected disabled>--Select author--</option>'
 + library.getAllBooks().map(book =>
        `<option>${book.author}</option>`);}

function chooseAuthor(event) {
    event.preventDefault();
    console.log(event.target.name);
    console.log(event.target.value);

    const author = event.target.value;
    const book = library.getAuthorBooks(author);
    console.log(book);
    if(book.length == 0) {
        showErrorMessage(event.target, 'the author is absent', authorError);
    }
    else {authorBook.innerHTML = bookData(book);}

}

window.onSubmit = onSubmit;
window.onChange = onChange;
window.showMenu = showMenu;
window.pagesMin = pagesMin;
window.pagesMax = pagesMax;
window.pagesMinMax = pagesMinMax;
window.chooseAuthor = chooseAuthor;