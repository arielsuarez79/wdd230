const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

      button.onclick = function() {
        if (input.value !=="") {
          let myItem = input.value;
          input.value = '';

          const listItem = document.createElement('li');
          const listText = document.createElement('span');
          const listBtn = document.createElement('button');

          listItem.appendChild(listText);
          listText.textContent = myItem;
          listItem.appendChild(listBtn);
          listBtn.textContent = "❌";
          list.appendChild(listItem);

          listBtn.onclick = function(e) {
            list.removeChild(listItem);
          }

          input.focus();
        
        } else{
          alert('[ERROR] The field must not be empty.');
        }
      }      