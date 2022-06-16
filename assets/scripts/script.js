const links = document.querySelectorAll("li a");
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
function clickHandler(c) {
  c.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

var button = document.getElementById("btn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 1000) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
}