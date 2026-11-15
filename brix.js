// Array of Object
let planets = [
    {
        name: "Mercury",
        description: "The smallest planet and the closest planet to the Sun.",
        image: "image/mercury.jpg"
    },
    {
        name: "Venus",
        description: "The hottest planet in our solar system.",
        image: "image/venus.jpg"
    },
    {
        name: "Earth",
        description: "Our home planet, where life is known to exist.",
        image: "image/earth.jpg"
    },
    {
        name: "Mars",
        description: "Known as the Red Planet because of its reddish appearance.",
        image: "image/mars.jpg"
    },
    {
        name: "Jupiter",
        description: "The largest planet in our solar system.",
        image: "image/jupiter.jpg"
    },
    {
        name: "Saturn",
        description: "Famous for its beautiful ring system.",
        image: "image/saturn.jpg"
    },
    {
        name: "Uranus",
        description: "An ice giant that rotates on its side.",
        image: "image/uranus.jpg"
    },
    {
        name: "Neptune",
        description: "The farthest planet from the Sun.",
        image: "image/neptune.jpg"
    }
];

let planetList = document.getElementById("planetList");

for (let i = 0; i < planets.length; i++) {

    planetList.innerHTML += `
        <div class="planet">
            ${planets[i].name}
        </div>
    `;

}

function searchPlanet() {

    let index = document.getElementById("planetIndex").value;
    let result = document.getElementById("result");

    if (index === "") {

        result.innerHTML = "Please enter a planet index!";

    }

    else if (
        Number.isInteger(Number(index)) &&
        Number(index) >= 0 &&
        Number(index) < planets.length
    ) {

        let selectedPlanet = planets[Number(index)];

        result.innerHTML = `
            <h3>${selectedPlanet.name}</h3>

            <img 
                src="${selectedPlanet.image}" 
                alt="${selectedPlanet.name}"
                class="planet-image"
            >

            <p>${selectedPlanet.description}</p>
        `;

    }

    else {

        result.innerHTML = "Planet not found!";

    }

}
