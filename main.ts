// Import custom book class
import { Book } from "./Book.js";


// Array of book icons (emoji)
const bookIcons: string[] = ['📕', '📘', '📗',  '📗']

/** Get div containing books (from DOM) */
const libraryDiv: HTMLElement | null = document.getElementById("library");

/** Dialog modal to add a new book */
const addBookModal = document.getElementById("modal") as HTMLDialogElement;

/** Get the book form */
const bookForm = document.getElementById("book-input") as HTMLFormElement;

/** Array to store book objects */
let myLibrary: Book[] = [new Book("John Doe", "Test Title", 127)];

/**
    Create a Book using the supplied arguments,
    add the Book object to the array (named `myLibrary`)
     */
function addBookToLibrary(title: string, author: string, 
    pages: number
): void {
    /** Construct the `Book` using supplied parameters */
    const book: Book = new Book(author, title, pages);

    // Add to the library
    myLibrary.push(book);
}

/**
 * Add books to the webpage
 */
function displayBooks(): void {
    // DEBUG: Print books
    console.log(myLibrary);
    
    /*
    Iterate through the array of books
    and display each book in the container.
    */
    for (let book of myLibrary) {
        if (!book.processed) {
            // Create a new book element
            const bookCard: HTMLDivElement = newBook(
                new Book(book.title, book.author, book.numPages)
            );

            libraryDiv?.appendChild(bookCard);
            book.processed = true;
        }
    }
}

/** 
 * Retrieve a random icon from the array of book icons
*/
function getBookIcon(): string {
    // Get random index (in range of array length)
    const index: number = Math.floor(Math.random() * bookIcons.length);

    // Return random emoji from array using index
    return bookIcons[index];
}


/**
 * Create a book to display on the page.
 * @param title Title of the book
 * @param author Author of the book
 * @param pages Page count
 */
function newBook(bookObj: Book): HTMLDivElement {
    
    /** Create book element in page */ 
    const book: HTMLDivElement = document.createElement("div");
    book.setAttribute("id", "book");
    book.setAttribute("data-id", `${bookObj.id}`)
    
    /** Book title */
    const bookTitle = document.createElement("h2");
    bookTitle.textContent = `${getBookIcon()} ${bookObj.title}`
    bookTitle.classList.add("book-details", "book-title");
    
    /** Book author */
    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = `✍️ Author: ${bookObj.author}`
    bookAuthor.classList.add("book-details");
    
    /** Page count */
    const bookPages = document.createElement("p");
    bookPages.textContent = `📃 Pages: ${bookObj.numPages}`
    bookPages.classList.add("book-details");

    /** Removal button */
    const removeBookBtn = document.createElement("a") as HTMLAnchorElement;
    const removeBookIcon = document.createElement("img") as HTMLImageElement;
    removeBookBtn.addEventListener("click", () => {
        // Remove the book when clicking the button
        const bookID: string|undefined = book.dataset.id;

        myLibrary = myLibrary.filter(
            (book) => {book.id === bookID}
        )
    })


    // Add the details to the book element
    book.append(
        bookTitle,
        bookAuthor,
        bookPages,
        removeBookBtn
    )
    return book;
} 

// DEBUG
console.log("Main script running");

// Populate page with books
displayBooks();

/** Set click event listener for "New Book" button */ 
const newBookBtn: HTMLElement | null = document.getElementById("new-book-btn");
newBookBtn?.addEventListener("click", () => {
    addBookModal?.showModal();
});

/** Set submit event listener for form submission */
bookForm.addEventListener("submit",
    (ev) => {
        ev.preventDefault();

        /** Get the form data */
        const formData: FormData = new FormData(bookForm);

        /** Construct a book from the form data */
        const book: Book = new Book(
            formData.get("author") as string,
            formData.get("title") as string,
            parseInt((formData.get("pages")!).toString()) 
        );
        
        // Add to library
        myLibrary.push(book);

        // Close the modal
        addBookModal.close();

        // Update library book display
        displayBooks();

        // Reset the form
        bookForm.reset();
    }
)