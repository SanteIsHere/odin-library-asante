import { Book, getBookIcon } from "../compiled/Book.js";

/**
 * Class to manage book objects.
 * Wraps book objects in an array and internal `div` container.
 */
export class Library {
    public books: Book[];
    public container: HTMLDivElement;

    constructor() {
        this.books = [];
        this.container = document.createElement("div");
        this.container.setAttribute("id", "library");
    }

    /**
     * Create a book and add it to the library (div container)
     * @param library Div element containing book cards
     * @param bookObj Reference to a `Book` - used to construct card
     */
    addBook(book: Book): void {
        /** Create book element in page */
        const bookCard: HTMLDivElement = document.createElement("div");
        bookCard.setAttribute("id", "book");
        bookCard.setAttribute("data-id", `${book.id}`)

        /** Book title */
        const bookTitle = document.createElement("h2");
        bookTitle.textContent = `${getBookIcon()} ${book.title}`
        bookTitle.classList.add("book-details", "book-title");

        /** Book author */
        const bookAuthor = document.createElement("p");
        bookAuthor.textContent = `✍️ Author: ${book.author}`
        bookAuthor.classList.add("book-details");

        /** Page count */
        const bookPages = document.createElement("p");
        bookPages.textContent = `📃 Pages: ${book.numPages}`
        bookPages.classList.add("book-details");

        /** Removal button */
        // const removeBookBtn = document.createElement("a") as HTMLAnchorElement;
        const removeBookIcon = document.createElement("img") as HTMLImageElement;
        removeBookIcon.setAttribute("src", "/static/images/icons8-close-30.png");
        removeBookIcon.setAttribute("class", "remove-button");
        removeBookIcon.setAttribute("title", "Remove this book");

        removeBookIcon.addEventListener("click", () => {
            // Remove the book when clicking the button
            const bookID: string | undefined = bookCard.dataset.id;

            // Remove the book card from the div
            this.container.removeChild(bookCard);

            // Also remove the object from the array
            this.books = this.books.filter(
                (book) => { book.id === bookID }
            );
        })

        // Add the details to the book element
        bookCard.append(
            removeBookIcon,
            bookTitle,
            bookAuthor,
            bookPages
        )

        // Add to the "library" container
        this.container.appendChild(bookCard);
    }
}