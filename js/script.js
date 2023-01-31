
function validateForm() {
  let inputNombre = document.forms["form"]["nombre"].value;
  let inputApellido = document.forms["form"]["apellido"].value;
  let inputEmail = document.forms["form"]["email"].value;
  let inputTexterea = document.forms["form"]["mensaje"].value;

  if (inputNombre =="") {
    document.getElementById("span").style.display="block";
    document.getElementById("span2").style.display="none";
    document.getElementById("span3").style.display="none";
    document.getElementById("span4").style.display="none";
    return false;
  }else if (inputApellido =="") {
    document.getElementById("span2").style.display="block";
    document.getElementById("span3").style.display="none";
    document.getElementById("span").style.display="none";
    document.getElementById("span4").style.display="none";
    return false;
  }else if (inputEmail =="") {
    document.getElementById("span3").style.display="block";
    document.getElementById("span").style.display="none";
    document.getElementById("span2").style.display="none";
    document.getElementById("span4").style.display="none";
    return false;
  }else if (inputTexterea =="") {
    document.getElementById("span4").style.display="block";
    document.getElementById("span").style.display="none";
    document.getElementById("span2").style.display="none";
    document.getElementById("span3").style.display="none";
    return false;
  }else if (inputNombre!="" && inputApellido!="" && inputEmail!="") { 
    return true;
}
}


window.addEventListener("load", validateForm());
