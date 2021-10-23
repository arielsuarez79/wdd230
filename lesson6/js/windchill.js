//var temp= eval(td.temp.value);
//var wSpeed= eval(td.wind.value);
//const wSpeed = parseFloat(document.getElementById("#windspeed").textContent);
//const temp = parseFloat(document.getElementById("#temperature").textContent);
//const windChill = parseFloat(document.getElementById("#windchill").textContent);
//let windChillVal;

//var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

//var windChill= Math.round(windChill);
//document.getElementById("windChill").textContent= windChill;

const wSpeed = parseFloat(document.getElementById("#windspeed").textContent);
const temp = parseFloat(document.getElementById("#temp").textContent);
const windChill = parseFloat(document.getElementById("#windChill").textContent);
let windChillVal;

if (temp <= 50 && wSpeed > 3) {
    windChillVal = 35.74 + (0.6215 * temp) - (35.75 * (wSpeed ** 0.16)) + (0.4275 * (temp * (wSpeed ** 0.16)));

    windChillVal = Math.round(windChillVal * 100) / 100;

    document.getElementById("#windChill").textContent = `${windChillVal} °F`;
} else {
    document.getElementById("#windChill").textContent = "N/A";
}

