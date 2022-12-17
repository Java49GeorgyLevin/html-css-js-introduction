export class BookList {
    #listBooks;
    constructor (idList) {
        this.#listBooks = document.getElementById(idList);    
    }
    showBooks(books) {
        if(!books.length) {
            this.#listBooks.innerHTML = "Nothing found in the library.";

        } else
        this.#listBooks.innerHTML = bookData(books);
    }
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