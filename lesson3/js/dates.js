const currentDate = new Date();
const currentYear = currentDate.getFullYear();

document.querySelector('.current-year').innerHTML = `&copy; ${currentYear}`;

const lastUpdate = document.lastModified;
document.querySelector('.last-modified').innerHTML = `Last Updated: ${lastUpdate}`;