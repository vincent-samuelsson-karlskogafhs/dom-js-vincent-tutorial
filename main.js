const wmf = document.querySelector("#book-list li:nth-child(2) .name");
// console.log(wmf);

var boks = document.querySelector("#book-list li .name");
// console.log(boks);

boks = document.querySelectorAll("#book-list li .name");
// console.log(boks);

Array.from(boks).forEach(function (book) {
  console.log(book);
});
