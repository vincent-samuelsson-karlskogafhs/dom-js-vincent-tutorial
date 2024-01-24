// const bookList = document.querySelector("#book-list");

// console.log("book-list next sibling is", bookList.nextSibling);
// console.log("book-list next element sibling is ", bookList.nextElementSibling);

// console.log("book-list previous sibling is", bookList.previousSibling);
// console.log(
//   "book-list previous elementsibling is",
//   bookList.previousElementSibling
// );

// bookList.previousElementSibling.querySelector("p").innerHTML +=
//   " <br>To cool for everone else!";

// var btns = document.querySelectorAll("#books-list .delete");

// Array.from(btns).forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const li = e.target.parentElement;

//     li.parentNode.removeChild(li);
//   });
// });

// const link = document.querySelector("#page-banner a");

// link.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("navigation to", e.target.textContent, "was prevented");
// });

// add books-list

const list = document.querySelector("#book-list ul");

list.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

const addForm = document.forms["add-book"];

addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  // Create element
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  // add content
  deleteBtn.textContent = "delete";
  bookName.textContent = value;

  // append to document
  // nested (span tags)
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  li.appendChild(li);
});
