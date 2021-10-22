var Now = new Date();
var CurrentDay = Now.getDay();

//if (CurrentDay !== 0) {
  //$('.banner').show();
  
//} 
//else if (CurrentDay == 5) {
  //$('.banner').show();
  //document.querySelector('.banner').div.style.display = '';
//}
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