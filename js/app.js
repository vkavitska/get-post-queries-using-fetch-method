document.body.onload = fetchHotdogs;

let hotdogArray;

let myInit = { method: 'GET',
               mode: 'cors'
               };

function fetchHotdogs() {
    fetch('https://formula-test-api.herokuapp.com/menu', myInit).then(function (response) {
        console.log(response.status);
        if (response.ok) {
            let hotdogs = response.json();
            return hotdogs;
        }
        throw new Error('Network response was not ok.');
    }).then(function (json) {
        hotdogArray = json;
        let filteredDate = filterByExpiration(hotdogArray);
        showHotdogs(filteredDate);
    })
        .catch(function (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
        });
}
function  filterByExpiration (items) {
    let date = new Date;
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    let itemYear, itemMonth, itemDay;
    const result = items.filter(item => {
        itemYear = parseInt(item.expirationDate.slice(6, 10));
        itemMonth = parseInt(item.expirationDate.slice(0, 2));
        itemDay = parseInt(item.expirationDate.slice(3, 4));
        if (itemYear > year) {
            return true;
        }
        else if (itemMonth > month) {
            return true;
        }
        else if (itemDay > day) {
            return true;
        }
    })
    return result;
}
function showHotdogs(hotdogs) {
    let parent = document.getElementById('hotdog-list');

    for (let i = 0; i < hotdogs.length; i++) {
        let parent1 = document.createElement('div');
        parent1.classList.add('hotdog-list__div');

        let heading = document.createElement('h2');
        heading.innerHTML = hotdogs[i].name;
        heading.classList.add('hotdog-list__h2');
        parent1.appendChild(heading);

        let paragraph = document.createElement('p');
        paragraph.innerHTML = hotdogs[i].description;
        paragraph.classList.add('hotdog-list__p');
        heading.appendChild(paragraph);

        let parent2 = document.createElement('div');
        parent2.classList.add('hotdog-list__div');

        let image = document.createElement('img');
        image.src = hotdogs[i].backgroundURL;
        parent2.appendChild(image);

        parent.appendChild(parent1);
        parent.appendChild(parent2);
    }
}

function showContact() {
    document.getElementById('contactInfo').style.display='block';
    document.getElementById('main').style.display='none';

}