const books = [
	{ title: "Book 1", author: "Stehpehn Hawking", isbn: "123" },
	{ title: "Book 2", author: "Test", isbn: "456" },
	{ title: "Book 3", author: "Thomas H. Cormen", isbn: "789" },
];

class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

class UI {
	static displayBooks() {
		books.forEach((book) => UI.addBookToList(book));
	}
	static addBookToList(book) {
		const list = document.querySelector("#book-list");
		const row = document.createElement("tr");

		row.innerHTML = `
		  <td>${book.title}</td>
		  <td>${book.author}</td>
		  <td>${book.isbn}</td>
		  <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
		`;

		list.append(row);
	}
	static deleteBook(element) {
		if (element.classList.contains("delete")) {
			element.parentElement.parentElement.remove();
		}
	}
	static clearFields() {
		document.querySelector("#title").value = "";
		document.querySelector("#author").value = "";
		document.querySelector("#isbn").value = "";
	}
}

// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: Add a Book
document.querySelector("#book-form").addEventListener("submit", (e) => {
	// Prevent actual submit and stop page reloading
	e.preventDefault();

	const title = document.querySelector("#title").value;
	const author = document.querySelector("#author").value;
	const isbn = document.querySelector("#isbn").value;

	const book = new Book(title, author, isbn);

	// Add Book to UI
	UI.addBookToList(book);
	// Clear inputs
	UI.clearFields();
});

document.querySelector("#book-list").addEventListener("click", (e) => {
	e.preventDefault();
	// Remove book from UI
	UI.deleteBook(e.target);
});
