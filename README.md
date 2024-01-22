# dom-js-vincent-tutorial

###

var titles = document.getElementsByClassName("title");

console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));
fall - loops?

Array.from(titles).forEach(function (item) {
console.log(item);
});
