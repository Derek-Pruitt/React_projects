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