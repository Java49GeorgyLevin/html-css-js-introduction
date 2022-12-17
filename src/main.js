import { Library } from "./data/library.js";
import { BookForm } from "./ui/bookForm.js";
import { AuthorForm } from "./ui/AuthorForm.js";
import { PagesForm } from "./ui/PagesForm.js";
import { BookList } from "./ui/BooksList.js";
// import { showErrorMessage } from "./ui/errorMessage.js";
const TIME_OUT_ERROR_MESSAGE = 3000;
const MIN_pages = 50;
const MAX_pages = 2000;
const MIN_YEAR = 1980;
const menuSection = document.querySelectorAll("section");
const menuButton = document.querySelectorAll(".menu-button");
const ACTIVE_BUTTON = "active-button";

const listAllBooks = new BookList("list-all-books");
const listPagesBooks = new BookList("list-pages-books")
const listAuthorBooks = new BookList("list-author-books");
const pTheAuthorError = document.getElementById("the-author-error");
const pMinMaxPagesError = document.getElementById("min-max-pages-error");

const listAuthors = document.querySelector(".list-authors");

const library = new Library();

const bookFormParams = {idForm: "book_form", idPublicationDate: "publicationDate",
idPagesInput: "idPages", idPublicationDateError: "date_error", idPagesError: "pages_error",
minPages: MIN_pages, maxPages: MAX_pages, minYear: MIN_YEAR};
const bookForm = new BookForm(bookFormParams);
bookForm.addSubmitHandler(book => library.addBook(book));

const pagesFormParams = {idFormElement: "min-max-pages", idPagesFromElement: "pages-from", idPagesToElement: "pages-to",
idMinMaxPagesError: "min-max-pages-error"};
const pagesForm = new PagesForm(pagesFormParams);
pagesForm.addSubmitHandler(pagesObj => {
    const books = library.getBooksByPages(pagesObj.pagesFrom, pagesObj.pagesTo);
    const countBook = books.length;
            listPagesBooks.showBooks(books);
        if(!countBook){
            pMinMaxPagesError.innerHTML = "There is not in the library any books with this amount pages";
            setTimeout(() => pMinMaxPagesError.innerHTML = '', TIME_OUT_ERROR_MESSAGE);
        }
});

const authorFormParams = {idFormElement: "books-of-author", idInputAuthorElement: "current-author",
idTheAuthorError: "the-author-error"};
const authorForm = new AuthorForm(authorFormParams);
authorForm.addSubmitHandler(author => {
    const books = library.getAuthorBooks(author);
    const countBook = books.length;
        listAuthorBooks.showBooks(books);
    if(!countBook) {
        pTheAuthorError.innerHTML = `The author ${author} is absent in that library`;
        setTimeout(() => pTheAuthorError.innerHTML = "", TIME_OUT_ERROR_MESSAGE); 
    }
});


function showSection(index) {
    menuSection.forEach(section => section.hidden = true);
    menuButton.forEach(button => button.classList.remove(ACTIVE_BUTTON));
    menuSection[index].hidden = false;
    menuButton[index].classList.add(ACTIVE_BUTTON);
    if(index == 1) {
        showAllBooks();
    }
    if(index == 3) {
        showAllAuthors();
    }
}

function bookAdded(name) {
    const confirmationAdded = document.getElementById("the-book-added");
    confirmationAdded.innerHTML = `${name} added successfully`;
    setTimeout(() => confirmationAdded.innerHTML = '', TIME_OUT_ERROR_MESSAGE);
}

function showAllBooks() {
    const books = library.getAllBooks();
    listAllBooks.showBooks(books);
}

function showAllAuthors() {
//     const allAuthors = library.getAllBooks().reduce((res, book) => {
//     if(!res[book.author]) {res[book.author] = 1}
//     else ++res[book.author];
//     return res}, {})

    listAuthors.innerHTML = 
    '<option value hidden selected disabled>--Authors in the Labrary--</option>'
     + library.getAllBooks().map(book =>
    `<option>${book.author}</option>`);
}


window.bookAdded = bookAdded;
window.showSection = showSection;