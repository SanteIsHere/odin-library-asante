/* Book constructor */
function Book(author: string, title: string, pages: number) {
    // Unique identifier for this book
    this.id = crypto.randomUUID();
    this.author = author; // Book author
    this.title = title; // Book title
    this.numPages = pages; // Page count
}