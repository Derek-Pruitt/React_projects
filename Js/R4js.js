function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("first name must be filled out");
      return false;
    }
    var b = document.forms["myForm"]["lname"].value;
    if (b == "") {
      alert("last name must be filled out");
      return false;
    }
    var z = document.forms["myForm"]["email"].value;
    if (z == "") {
      alert("email must be filled out");
      return false;
    }
    var t = document.forms["myForm"]["Phone"].value;
    if (t == "") {
      alert("Phone number must be filled out");
      return false;
    }
  }


  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  //slide show
  

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}