const daysSinceLastVisit = document.querySelector('#visit');


let daysPassed = 0;
let lastVisited;
let visitedToday = new Date()


const populateStorage = () => {
    localStorage.setItem('lastVisited', visitedToday.getTime());
    localStorage.setItem('visitedToday', visitedToday.getTime());
}

const setNewDate = () => {
  localStorage.setItem('visitedToday', visitedToday.getTime());
  daysPassed = calculateDays();

}

const calculateDays = () => {
  let last = localStorage.getItem('lastVisited');
  let now = localStorage.getItem('visitedToday');
  
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

daysSinceLastVisit.innerHTML = daysPassed;

localStorage.setItem('lastVisited', visitedToday.getTime());