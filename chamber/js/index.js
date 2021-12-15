//const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const infopath = "js/tucuman.json";
fetch(infopath)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['directory'];
        
        prophets.forEach((x) => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let addres = document.createElement('p');
            let phone = document.createElement('p');
            let website = document.createElement('p');
            let rain = document.createElement('p');
            let img = document.createElement('img');

            h2.textContent = x.name;
            addres.textContent = "Addres: " +x.addres;
            phone.textContent = "Phone: "+x.phone;
            website.textContent = "Website: "+x.website;
            
    
            img.setAttribute('src', '../chamber/images/' + x.photo);
            img.setAttribute('alt', x.name + x.lastname);

            card.appendChild(h2);
            card.appendChild(motto);
            card.appendChild(founded);
            card.appendChild(population);
            card.appendChild(rain);
            card.appendChild(img);

            document.querySelector('div.cards').appendChild(card);
            
        });
  });