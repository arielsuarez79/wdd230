const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        prophets.forEach(prophet => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let date = document.createElement('p');
            let place = document.createElement('p');
            let img = document.createElement('img');

            h2.textContent = prophet.name + ' ' + prophet.lastname;
            date.textContent = 'Date of Birth' +': '+ prophet.birthdate;
            place.textContent = 'Place of Birth' +': '+ prophet.birthplace;
            img.setAttribute('src', prophet.imageurl);
            img.setAttribute('alt', prophet.name + prophet.lastname);

            card.appendChild(h2);
            card.appendChild(date);
            card.appendChild(place);
            card.appendChild(img);

            document.querySelector('div.cards').appendChild(card);
            
        });
  });