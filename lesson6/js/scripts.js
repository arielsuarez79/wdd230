function toggleMenu(){
    
    document.getElementById("primaryNav").classList.toggle("hide");
}

const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();


