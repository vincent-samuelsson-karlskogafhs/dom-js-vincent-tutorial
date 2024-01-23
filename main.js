boks = document.querySelectorAll("#book-list li .name");
// console.log(boks);

Array.from(boks).forEach(function (book) {
  book.textContent += "(book title)";
});

const bookList = document.querySelector("#book-list");
// console.log(bookList.innerHTML);
// bookList.innerHTML = "<h2> books is books </h2>";
bookList.innerHTML += "<p> this is how you add HTML</p>";
