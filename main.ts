import { Book } from "./Book"

// Array to store Book objects
const myLibrary: Book[] = [];

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

