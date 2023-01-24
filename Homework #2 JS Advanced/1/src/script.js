console.log("Wired");


const fetchButton = document.getElementById("fetchButton");
const tableBody = document.getElementById("tableBody");

fetchButton.addEventListener("click", function () {
    fetch("https://swapi.dev/api/planets/?page=1")
        .then(response => response.json())
        .then(data => {
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
});