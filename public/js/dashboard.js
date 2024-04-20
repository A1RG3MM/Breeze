addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".gxmes");
  
  var index = 0, length = elems.length;
  for ( ; index < length; index++) {
      elems[index].style.transition = "0.3s";
      elems[index].style.opacity = 1;
  }
});