import { Book } from "./Book.js";

// Get book container (div) via DOM
const libraryDiv: HTMLElement | null = document.getElementById("library");

// Dialog modal for adding books
const addBookModal = document.getElementById("modal") as HTMLDialogElement;

// Array to store Book objects
const myLibrary: Book[] = [new Book("John Doe", "Test Title", 127)];

/**
    Create a Book using the supplied arguments,
    add the Book object to the array (named `myLibrary`)
     */
function addBookToLibrary(title: string, author: string, 
    pages: number
): void {
    // Construct the Book
    const book: Book = new Book(author, title, pages);

    // Add to the library
    myLibrary.push(book);
}

/**
 * Add books to the webpage
 */
function displayBooks(): void {
    /* 
    Iterate through the array of books
    and display each book in the container
    */
    for (let book of myLibrary) {
        // Create a new book element
        const bookCard: HTMLDivElement = newBook(book.title, book.author, book.numPages);

        libraryDiv?.appendChild(bookCard);
    }
}

/**
 * 
 * @param title Title of the book
 * @param author Author of the book
 * @param pages Page count
 */
function newBook(title: string, author: string, pages: number): HTMLDivElement {
    const book: HTMLDivElement = document.createElement("div");
    book.setAttribute("id", "book");
    book.append(
        document.createElement("p").textContent = "Hi",
    )
    return book;
} 

// DEBUG
console.log("Main script running");

// Populate page with books
displayBooks();

// Set click event listener for "New Book" button
const newBookBtn: HTMLElement | null = document.getElementById("new-book-btn");
newBookBtn?.addEventListener("click", () => {
    addBookModal?.showModal();
});