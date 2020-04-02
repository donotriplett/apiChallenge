const baseURL = "https://api.spacexdata.com/v2/rockets";

const searchForm = document.querySelector("form");
const spaceShips = document.querySelector("table");

function fetchSpaceShips(event) {
  event.preventDefault();

  fetch(baseURL)
    .then(result => {
      return result.json();
    })
    .then(json => {
      displayRockets(json)
    })
    .catch(err => {
      console.error(err);
    });
}

function displayRockets(json) {
  let rockets = json.forEach(rocket => {
    let rocketRow = document.createElement("tr");
    let rocketName = document.createElement("td");
    let rocketCost = document.createElement("td");
    let rocketImage = document.createElement("td");
    let img = document.createElement("img");

    rocketName.innerText = rocket.name;
    rocketCost.innerText = rocket.cost_per_launch;
    img.src = rocket.flickr_images[0]; 
    img.height = 150;
    img.width = 200;

    rocketImage.appendChild(img);

    rocketRow.appendChild(rocketName);
    rocketRow.appendChild(rocketCost);
    rocketRow.appendChild(rocketImage);

    spaceShips.appendChild(rocketRow);
  });
}

searchForm.addEventListener("submit", fetchSpaceShips);
