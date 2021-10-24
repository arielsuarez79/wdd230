
//var windChill= Math.round(windChill);
//document.getElementById("windChill").textContent= windChill;

const wSpeed = parseFloat(document.getElementById("wind").textContent);
const temp = parseFloat(document.getElementById("temp").textContent);
const windChill = parseFloat(document.getElementById("windChill").textContent);
let result;

if (temp <= 50 && wSpeed > 3) {
    result = 35.74 + (0.6215 * temp) - (35.75 * (wSpeed ** 0.16)) + (0.4275 * (temp * (wSpeed ** 0.16)));

    result = Math.round(result);

    document.getElementById("windChill").textContent = `${result} °F`;
} else {
    document.getElementById("windChill").textContent = "N/A";
}

