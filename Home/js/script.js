
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-50px";
  }
}
break;

function myFunction() {
  var x = document.getElementById("headerId");
  if (x.className === "main-menu") {
    x.className += " responsive";
  } else {
    x.className = "main-menu";
  }
}