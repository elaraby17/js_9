///! 1- fack data
const products = [
    {
        id: 1,
        titel: "Ground Nuts Oil Pack",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/1.jpg",
        category: "Snacks and spices",
        sub_category: "Snacks",
        rate: "4",
        isDiscount: true,
        oldPrice: 30,
        newPrice: 20,
        outOfstock: true,
        whight: 250,
        desCription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsum officia minus asperiores doloremque nam itaque ipsam maxime rerum hic voluptates, voluptatibus nostrum recusandae ut natus doloribus ipsa quibusdam iusto.",
    },
    {
        id: 2,
        titel: "Organic Litchi Juice Pack",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/2.jpg",
        category: "Snacks and spices",
        sub_category: "Juice",
        rate: "4",
        isDiscount: true,
        oldPrice: 30,
        newPrice: 20,
        outOfstock: true,
        whight:  500,
        desCription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsum officia minus asperiores doloremque nam itaque ipsam maxime rerum hic voluptates, voluptatibus nostrum recusandae ut natus doloribus ipsa quibusdam iusto.",
    },
    {
        id: 3,
        titel: "Crunchy Banana Chips",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/3.jpg",
        category: "Snacks and spices",
        sub_category: "Chips",
        rate: "4",
        isDiscount: true,
        oldPrice: 30,
        newPrice: 20,
        outOfstock: true,
        whight:  250,
        desCription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsum officia minus asperiores doloremque nam itaque ipsam maxime rerum hic voluptates, voluptatibus nostrum recusandae ut natus doloribus ipsa quibusdam iusto.",
    },
    {
        id: 4,
        titel: "Organic dragon fruit",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/9.jpg",
        category: "fruits",
        sub_category: "fruit",
        rate: "3",
        isDiscount: false,
        oldPrice: 30,
        newPrice: null,
        outOfstock: false,
        whight: 100,
        desCription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsum officia minus asperiores doloremque nam itaque ipsam maxime rerum hic voluptates, voluptatibus nostrum recusandae ut natus doloribus ipsa quibusdam iusto.",
    },
    {
        id: 5,
        titel: "Fresh blue berry",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/10.jpg",
        category: "fruits",
        sub_category: "fruit",
        rate: "4",
        isDiscount: true,
        oldPrice: 30,
        newPrice: 20,
        outOfstock: true,
        whight:  250,
        desCription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsum officia minus asperiores doloremque nam itaque ipsam maxime rerum hic voluptates, voluptatibus nostrum recusandae ut natus doloribus ipsa quibusdam iusto.",
    },
    {
        id: 6,
        titel: "Red Cherry Serbia",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/11.jpg",
        category: "fruits",
        sub_category: "fruit",
        rate: "4",
        isDiscount: true,
        oldPrice: 30,
        newPrice: 20,
        outOfstock: true,
        whight: 500,
        desCription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsum officia minus asperiores doloremque nam itaque ipsam maxime rerum hic voluptates, voluptatibus nostrum recusandae ut natus doloribus ipsa quibusdam iusto.",
    },
    {
        id: 7,
        titel: "Red Fresh Coriander",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/product/3.jpg",
        category: "Leaves",
        sub_category: "Leaves",
        rate: "2",
        isDiscount: true,
        oldPrice: 30,
        newPrice: 20,
        outOfstock: true,
        whight:  250,
        desCription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsum officia minus asperiores doloremque nam itaque ipsam maxime rerum hic voluptates, voluptatibus nostrum recusandae ut natus doloribus ipsa quibusdam iusto.",
    },
    {
        id: 8,
        titel: "mango",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/product/4.jpg",
        category: "JUSEIS",
        sub_category: "JUSEIS",
        rate: "5",
        isDiscount: true,
        oldPrice: 30,
        newPrice: 20,
        outOfstock: true,
        whight:  500,
        desCription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsum officia minus asperiores doloremque nam itaque ipsam maxime rerum hic voluptates, voluptatibus nostrum recusandae ut natus doloribus ipsa quibusdam iusto.",
    },
];
let categoryType = "all";
const categoryContainer = document.querySelector(".products-header-categories");
const productsContainer = document.querySelector(".products-container");
function handelFilterProduct() {
    if (categoryType == "all") {
        return handelDisplayProduct(products);
    } else {
        const productsFilter = products.filter((product) => product.category == categoryType);
        return handelDisplayProduct(productsFilter);
    }
}

function handelCategories() {
    const categories = [];
    products.map((product) => categories.push(product.category));
    const uniqueCategories = ["all", ...new Set(categories)];
    const results = uniqueCategories.map((category) => ({
        label: category?.toUpperCase().replaceAll("-", " "),
        value: category,
    }));
    let html = ``;
    results.forEach((result) => {
        return (html += `
                <h3 class="${result.value == categoryType ? "active" : " "} "data-value="${result.value}">
                ${result.label}</h3>
                        <span>/</span>
                        `);
    });
    categoryContainer.innerHTML = html;
    const items = document.querySelectorAll(".products-header-categories h3");
    items.forEach(
        (item) =>
            (item.onclick = () => {
                categoryType = item.dataset.value;
                items.forEach((item) => item.classList.remove("active"));
                item.classList.add("active");
                handelFilterProduct();
            }),
    );
}

function handelDisplayProduct(data) {
    let html = ``;
    data.forEach((product) => {
        html += `<div class="product-card">
                        <div class="product-card-image">
                            <img src="${product.image}" alt="" />
                            <div class="product-card-image-icons">
                                <div class="icon">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="25px" width="25px"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="Heart">
                                            <path
                                                d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                                <div class="icon" onclick="showProductPopup(${product.id})">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="25px" width="25px"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                                            d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z">
                                        </path>
                                        <circle cx="256" cy="256" r="80" fill="none" stroke-miterlimit="10" stroke-width="32"></circle>
                                    </svg>
                                </div>
                                <div class="icon">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="25" width="25"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M233.9 328.1c-2.6-2.6-6.1-4.1-9.9-4.1-3.7 0-7.3 1.4-9.9 4.1-2.6 2.6-4.1 6.1-4.1 9.9 0 3.7 1.4 7.3 4.1 9.9l.1.1 41.1 40.1H166c-20.4 0-33.6-7.5-41.6-23.5-8.4-17-9.4-41.5-9.4-58.5V170.8c15-2.8 28.7-10.5 39-21.9 11.6-12.9 18-29.5 18-46.9 0-38.6-31.4-70-70-70s-70 31.4-70 70c0 17 6.2 33.3 17.3 46.1 9.9 11.3 23.1 19.1 37.7 22.3V306c0 14.7 0 42.1 9.4 65.3 11.9 29.3 36 44.7 69.6 44.7h89.7L216 456.2c-5.4 5.4-5.4 14.3 0 19.8l.1.1c2.7 2.5 6.2 3.9 9.8 3.9 3.8 0 7.3-1.4 9.9-4.1l57.6-57.4c4.2-4.2 6.5-9.8 6.5-15.7 0-5.9-2.3-11.3-6.5-15.5l-59.5-59.2zM102 144c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM425 341.6V206c0-14.7 0-42.1-9.4-65.3-11.9-29.2-36-44.7-69.6-44.7h-89.7L296 55.8c5.4-5.4 5.4-14.3 0-19.8l-.1-.1c-2.7-2.5-6.2-3.9-9.8-3.9-3.8 0-7.3 1.4-9.9 4.1l-57.6 57.4c-4.2 4.2-6.5 9.8-6.5 15.7 0 5.9 2.3 11.3 6.5 15.5l59.6 59.4c2.6 2.6 6.1 4.1 9.9 4.1 3.7 0 7.3-1.4 9.9-4.1 2.6-2.6 4.1-6.1 4.1-9.9 0-3.7-1.4-7.3-4.1-9.9l-.1-.1-41.2-40.2H346c20.4 0 33.6 7.5 41.6 23.5 8.4 17 9.4 41.5 9.4 58.5v135.2c-15 2.8-28.7 10.5-39 21.9-11.6 12.9-18 29.5-18 46.9 0 38.6 31.4 70 70 70s70-31.4 70-70c0-17-6.2-33.3-17.3-46.1-9.9-11.3-23.2-19.1-37.7-22.3zM410 452c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="icon">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="25" width="25"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="Shopping_Cart">
                                            <path
                                                d="M17.437,19.934c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1Zm-11.217,-4.266l-0.945,-10.9c-0.03,-0.391 -0.356,-0.693 -0.749,-0.693l-0.966,-0c-0.276,-0 -0.5,-0.224 -0.5,-0.5c0,-0.276 0.224,-0.5 0.5,-0.5l0.966,-0c0.916,-0 1.676,0.704 1.746,1.617l0.139,1.818l13.03,-0c0.885,-0 1.577,0.76 1.494,1.638l-0.668,7.52c-0.121,1.285 -1.199,2.267 -2.489,2.267l-9.069,0c-1.29,0 -2.367,-0.981 -2.489,-2.267Zm0.274,-8.158l0.722,8.066c0.073,0.77 0.719,1.359 1.493,1.359l9.069,0c0.774,0 1.42,-0.589 1.493,-1.359l0.668,-7.518c0.028,-0.294 -0.203,-0.548 -0.498,-0.548l-12.947,-0Zm4.454,12.424c-0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c-0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1Z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="product-card-content">
                            <div class="product-card-content-category">
                                <span>${product.sub_category}</span>
                                <div class="product-card-content-rate">
                                ${new Array(5)
                                    .fill(0)
                                    .map((_, index) =>
                                        product.rate > index
                                            ? `<svg class="${
                                                  product.rate > index ? "active" : ""
                                              }" stroke="currentColor" fill="currentColor" stroke-width="1px" viewBox="0 0 576 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>`
                                            : `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>`,
                                    )
                                    .join("")}
                                </div>
                            </div>
                            <h3>${product.titel}</h3>
                            <div class="product-card-content-price">
                                <div class="product-card-content-price-container">
                                    <strong>${product.newPrice}$</strong>
                                    <del>${product.oldPrice}$</del>
                                    <span class="out-of-stock">out of stock</span>
                                </div>

                                <span>${product.whight}g</span>
                            </div>
                        </div>
                    </div>`;
    });
    productsContainer.innerHTML = html;
}

handelCategories();
handelFilterProduct();
// ______________________________________________
const popup = document.querySelector(".popup");
const popupContainer = document.querySelector(".popup-container");
function showProductPopup(productId) {
    popup.classList.add("show");
    popupContainer.classList.add("show");
    const currentPorduct = products.find((product) => product.id == productId);
    genratProductshow(currentPorduct);
}
function genratProductshow(productDetalis) {
    let html = ``;
    html = `        <div class="popup-container-close" onclick="removeShowPopup()">
                <span></span>
            </div>
            <div class="popup-container-data">
                <div class="popup-container-data-image">
                    <img src="${productDetalis.image}" alt="">
                </div>
                <div class="popup-container-data-content">
                    <h2>${productDetalis.titel}</h2>
                    <div class="popup-container-data-content-rate">
                    ${new Array(5)
                        .fill(0)
                        .map((_, index) =>
                            productDetalis.rate > index
                                ? `<svg class="${
                                    productDetalis.rate > index ? "active" : ""
                                }" stroke="currentColor" fill="currentColor" stroke-width="1px" viewBox="0 0 576 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>`
                                : `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>`,
                        )
                        .join("")}
                    </div>
                    <p class="popup-container-data-content-description">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Recusandae aperiam, quia expedita iusto necessitatibus sit dolore corporis
                        quaerat veniam nesciunt!</p>
                    <div class="popup-container-data-content-price">
                        <strong>$200</strong>
                        <del>$300</del>
                    </div>
                    <div class="popup-container-data-content-weight">
                        <span class="active">${productDetalis.weight}</span>
                        <span>1k</span>
                        <span>1k</span>
                        <span>1k</span>
                    </div>
                    <div class="popup-container-data-content-cart">
                        <div class="popup-container-data-content-cart-quantity">
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </div>
                        <div class="popup-container-data-content-cart-btn">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                                    d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32">
                                </path>
                            </svg>
                            <span>Add to cart</span>
                        </div>
                    </div>
                </div>
            </div>`;
    popupContainer.innerHTML = html;
}

function removeShowPopup() {
    popup.classList.remove("show");
    popupContainer.classList.remove("show");
}
