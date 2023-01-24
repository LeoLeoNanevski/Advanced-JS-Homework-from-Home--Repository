console.log("Wired");

let fetchButton = document.getElementById("fetch");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("previous");
let tableBody = document.getElementById("tableBody");
let currentPage = 1;

function fetchPlanets(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            tableBody.innerHTML = "";
            data.results.forEach(function (object) {
                let row = document.createElement("tr");
                let name = document.createElement("td");
                let population = document.createElement("td");
                let climate = document.createElement("td");
                let gravity = document.createElement("td");
                name.innerHTML = object.name;
                population.innerHTML = object.population;
                climate.innerHTML = object.climate;
                gravity.innerHTML = object.gravity;
                row.appendChild(name);
                row.appendChild(population);
                row.appendChild(climate);
                row.appendChild(gravity);
                tableBody.appendChild(row);
            });
        });
}
fetchButton.addEventListener("click", function () {
    fetchPlanets("https://swapi.dev/api/planets/?page=1");
});

nextButton.addEventListener("click", function () {
    currentPage++;
    fetchPlanets("https://swapi.dev/api/planets/?page=" + currentPage);
});

prevButton.addEventListener("click", function () {
    currentPage--;
    fetchPlanets("https://swapi.dev/api/planets/?page=" + currentPage);
});