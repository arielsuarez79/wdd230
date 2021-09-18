const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();

document.getElementById("lastmodified").innerHTML = new Date(document.lastModified);