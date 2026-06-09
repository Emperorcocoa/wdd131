const products = [
    {
        id: 1,
        name: "Smart Watch",
        category: "Fitness",
        image: "images/smartwatch.webp",
        description: "Track your fitness and health."
    },

    {
        id: 2,
        name: "Bluetooth Speaker",
        category: "Electronics",
        image: "images/speaker.webp",
        description: "Portable sound anywhere."
    },

    {
        id: 3,
        name: "Air Fryer",
        category: "Home",
        image: "images/airfryer.webp",
        description: "Cook healthier meals."
    }
];

function displayProducts(productList) {

    const container =
        document.querySelector("#products-container");

    container.innerHTML = "";

    productList.forEach(product => {

        container.innerHTML += `
            <article class="card">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <p>${product.category}</p>
            </article>
        `;
    });
}

displayProducts(products);

document
    .querySelector("#category-filter")
    .addEventListener("change", event => {

        const category = event.target.value;

        if (category === "all") {

            displayProducts(products);

        } else {

            const filtered =
                products.filter(product =>
                    product.category === category
                );

            displayProducts(filtered);
        }
    });