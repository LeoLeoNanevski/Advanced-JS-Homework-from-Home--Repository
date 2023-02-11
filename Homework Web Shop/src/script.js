console.log("Wired");

// fetch('https://fakestoreapi.com/products')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });


const categoryList = document.querySelector("#categories");
const productListing = document.querySelector("#products");

fetch("https://fakestoreapi.com/products/categories")
    .then(response => response.json())
    .then(categories => {
        let kategorija = "";

        for (const category of categories) {
            kategorija += `
        <li>
          <a href="#" onclick="showProducts('${category}')">${category}</a>
        </li>
      `;
        }

        categoryList.innerHTML = kategorija;
    });

function showProducts(category) {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            const categoryProducts = products.filter(product => product.category === category);

            let productHtml = "";

            for (const product of categoryProducts) {
                productHtml += `
          <div>
            <h2>${product.title}</h2>
            <img src="${product.image}" alt="${product.title}" />
            <p>$${product.price}</p>
            <p>${product.description}</p>
          </div>
        `;
            }

            productListing.innerHTML = productHtml;
        });
}

