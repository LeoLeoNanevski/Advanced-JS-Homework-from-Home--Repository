console.log("Wired");


const url = 'https://swapi.dev/api/people/1/?format=json'
document.getElementById('firstPerson')
    .addEventListener('click', function () {
        fetch(url)
            .then(data => {
                data.json()
                    .then(parsedData => {
                        console.log(parsedData);
                        let ime = document.getElementById('haEden');
                        // for (let item of parsedData.name) {
                        //     ime.innerHTML += `<h1>${item}</h1>`
                        // }
                        ime.innerHTML += `<h1>${parsedData.name}</h1>`
                    })
            })

            .catch(e => {
                console.error(e);

            })
    })

document.getElementById('statsVoTabela')

    .addEventListener('click', function () {
        fetch(url)
            .then(data => {
                data.json()
                    .then(parsedData => {
                        console.log(parsedData);

                        let li = `<tr><th>Height</th><th>Weight</th><th>Eye color</th><th>Hair color</th>`;


                        li += `<tr>
        <td>${parsedData.height}cm</td>
        <td>${parsedData.mass}kg</td>
        <td>${parsedData.eye_color}</td>
        <td>${parsedData.hair_color}</td>
                            </tr>`
                        document.getElementById("tabela").innerHTML = li;

                    })
            })
    })

// ова подоле се обидов со бонус домашната ама заглавив...


const urlTwo = 'https://swapi.dev/api/people/?format=json'
document.getElementById('allPersons')
    .addEventListener('click', function () {
        fetch(urlTwo)
            .then(data => {
                data.json()
                    .then(parsedData => {
                        console.log(parsedData);
                        let theDiv = document.getElementById('theDiv');
                        for (let object of parsedData.results) {
                            theDiv.innerHTML += `<h2>${object.name}</h2>`

                            theDiv.innerHTML += `<h3>${object.height}</h3>`
                        }




                        // iminja.innerHTML += `<h2>${parsedData.results
                        // }</h2>`


                    })
            })

            .catch(e => {
                console.error(e);

            })
    })
