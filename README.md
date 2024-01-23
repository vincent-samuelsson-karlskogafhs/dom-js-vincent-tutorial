# dom-js-vincent-tutorial

###

var titles = document.getElementsByClassName("title");

console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));
fall - loops?

Array.from(titles).forEach(function (item) {
console.log(item);
});

const wmf = document.querySelector("#book-list li:nth-child(2) .name");
// console.log(wmf);

var boks = document.querySelector("#book-list li .name");
// console.log(boks);

boks = document.querySelectorAll("#book-list li .name");
// console.log(boks);

Array.from(boks).forEach(function (book) {
console.log(book);
});

boks = document.querySelectorAll("#book-list li .name");
// console.log(boks);

Array.from(boks).forEach(function (book) {
book.textContent += "(book title)";
});

const bookList = document.querySelector("#book-list");
// console.log(bookList.innerHTML);
// bookList.innerHTML = "<h2> books is books </h2>";
bookList.innerHTML += "<p> this is how you add HTML</p>";

const banner = document.querySelector("#page-banner");
console.log("#page-banner node type is:", banner.nodeType);
console.log("#page-banner node type is:", banner.nodeName);

console.log("#page-banner node type is:", banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);

const bookList = document.querySelector("#book-list");
console.log("the parent node is", bookList.parentNode);
console.log("the parent node is", bookList.parentElement.parentElement);

console.log(bookList.children);

const bookList = document.querySelector("#book-list");

console.log("book-list next sibling is", bookList.nextSibling);
console.log("book-list next element sibling is ", bookList.nextElementSibling);

console.log("book-list previous sibling is", bookList.previousSibling);
console.log(
"book-list previous elementsibling is",
bookList.previousElementSibling
);

bookList.previousElementSibling.querySelector("p").innerHTML +=
" <br>To cool for everone else!";
