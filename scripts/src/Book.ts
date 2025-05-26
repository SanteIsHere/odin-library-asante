// Array of book icons (emoji)
const bookIcons: string[] = ['📕', '📘', '📗',  '📗']

/* Book class and constructor */
export class Book {
    public id: string;
    public author: string
    public title: string;
    public numPages: number;
    public processed: boolean = false;


    constructor(author: string, title: string, pages: number) {
        // Unique identifier for this book
        this.id = crypto.randomUUID();
        this.author = author; // Book author
        this.title = title; // Book title
        this.numPages = pages; // Page count
    }
}


// /**
// Create a Book using the supplied arguments,
// add the Book object to a book array
// */
// export function addBookToLibrary(library: Book[], title: string, author: string, 
//     pages: number
// ): void {
//     /** Construct the `Book` using supplied parameters */
//     const book: Book = new Book(author, title, pages);

//     // Add to the library
//     library.push(book);
// }

/** 
 * Retrieve a random icon from the array of book icons
*/
export function getBookIcon(): string {
    // Get random index (in range of array length)
    const index: number = Math.floor(Math.random() * bookIcons.length);

    // Return random emoji from array using index
    return bookIcons[index];
}