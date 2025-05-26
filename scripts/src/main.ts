// Import custom book class and functions
import * as Book from "../compiled/Book.js";
import { Library } from "../compiled/Library.js";

// Import events
import "../compiled/events.js";
import { bookForm, addBookModal } from "./events.js";

/** Library object to manage books */
const myLibrary: Library = new Library();

/** Set submit event listener for form submission */
bookForm.addEventListener("submit",
    (ev) => {
        ev.preventDefault();

        /** Get the form data */
        const formData: FormData = new FormData(bookForm);

        /** Construct a book from the form data */
        const book: Book.Book = new Book.Book(
            formData.get("author") as string,
            formData.get("title") as string,
            parseInt((formData.get("pages")!).toString())
        );

        // Add to library
        myLibrary.addBook(book);

        // Close the modal
        addBookModal.close();

        // Reset the form
        bookForm.reset();
    }
)

function main(): void {
    // Add library manager to body of document
    document.body.appendChild(myLibrary.container);
    myLibrary.addBook(new Book.Book("John Doe", "Test Title", 127)) // Test
}

// Invoke `main()` function
main();