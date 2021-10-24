var Now = new Date();
var CurrentDay = Now.getDay();


var element = document.getElementById("banner");

  if (element) {
    var display = element.style.display;

    if (CurrentDay == 5) {
        element.style.display = "block";
    } 
    else {
        element.style.display = "none";
    }
  }