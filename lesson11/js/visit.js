const lastDayVisit = document.querySelector('#visit');


let daysPassed = 0;
let lastVisited;
let todayVisit = new Date()


const populateStorage = () => {
    localStorage.setItem('lastVisited', todayVisit.getTime());
    localStorage.setItem('todayVisit', todayVisit.getTime());
}

const setNewDate = () => {
  localStorage.setItem('todayVisit', todayVisit.getTime());
  daysPassed = calculateDays();

}

const calculateDays = () => {
  let last = localStorage.getItem('lastVisited');
  let now = localStorage.getItem('todayVisit');
  
  let difference = now - last

  daysPassed = difference / (1000 * 3600 * 24)
  daysPassed = Math.round(daysPassed);
  return daysPassed
}


if(!localStorage.getItem('lastVisited')) {
  populateStorage();
  daysPassed = calculateDays();
} else {
  setNewDate();
}

lastDayVisit.innerHTML = daysPassed;

localStorage.setItem('lastVisited', todayVisit.getTime());