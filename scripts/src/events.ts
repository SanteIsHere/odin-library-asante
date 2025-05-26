/** Dialog modal to add a new book */
export const addBookModal = document.getElementById("modal") as HTMLDialogElement;

/** Get the book form */
export const bookForm = document.getElementById("book-input") as HTMLFormElement;

/** Set click event listener for "New Book" button */
const newBookBtn: HTMLElement | null = document.getElementById("new-book-btn");
newBookBtn?.addEventListener("click", () => {
    addBookModal?.showModal();
});

