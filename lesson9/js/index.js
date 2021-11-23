const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['towns'];
        const change = prophets.filter((town) => town.name === 'Preston'|| town.name === 'Fish Haven'|| town.name === 'Franklin');
        change.forEach((x) => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let motto = document.createElement('h3');
            let founded = document.createElement('p');
            let population = document.createElement('p');
            let rain = document.createElement('p');
            let img = document.createElement('img');

            h2.textContent = x.name;
            motto.textContent = x.motto;
            founded.textContent = "Year Founded: "+x.yearFounded;
            population.textContent = "Population: "+x.currentPopulation;
            rain.textContent = "Annual Rain Fall: "+x.averageRainfall;
    
            img.setAttribute('src', '../lesson9/images/' + x.photo);
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