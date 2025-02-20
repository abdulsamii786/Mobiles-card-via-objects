let divContainer = document.getElementById("div-container");

let mobilesDetails = [
  {
    brand: "Apple",
    model: "Apple iPhone 15 Pro Max",
    price: "$ 923.95",
    os: "iOS 17, upgradable",
    spec: "512GB 8GB RAM",
    color: "Black Titanium, White Titanium, Blue Titanium",
    img: "./assets/imgs/apple-iphone-15-pro-max.jpg",
    location: "https://www.gsmarena.com/apple_iphone_15_pro_max-12548.php",
  },
  {
    brand: "Vivo",
    model: "Vivo Y58",
    price: "$ 189.2",
    os: "Android 14, Funtouch 14",
    spec: "128GB 8GB RAM",
    color: "Himalayan Blue, Sundarbans Green",
    img: "./assets/imgs/vivo-u38.jpg",
    location: "https://www.gsmarena.com/vivo_y58-13156.php",
  },
  {
    brand: "OnePlus",
    model: "OnePlus Nord CE4",
    price: "$304.87",
    os: "Android 14, ColorOS 14",
    spec: "128GB 8GB RAM",
    color: "Celadon Marble, Dark Chrome",
    img: "./assets/imgs/oneplus-nord-ce4-.jpg",
    location: "https://www.gsmarena.com/oneplus_nord_ce4-12892.php",
  },
  {
    brand: "Apple",
    model: "Apple iPhone 11 Pro",
    price: "$ 242.69",
    os: "iOS 13, upgradable",
    spec: "64GB 4GB RAM",
    color: "Matte Space Gray, Matte Silver, Matte Gold,",
    img: "./assets/imgs/iphone-11-pro-max-.jpg",
    location: "https://www.gsmarena.com/apple_iphone_11_pro-9847.php",
  },
  {
    brand: "Samsung",
    model: "Samsung Galaxy A15 5G",
    price: "$ 148.38",
    os: "Android 14, ColorOS 14",
    spec: "128GB 4GB RAM",
    color: "Brave Black, Personality Yellow, Magical Blue",
    img: "./assets/imgs/samsung-galaxy-a15-5g-new.jpg",
    location: "https://www.gsmarena.com/samsung_galaxy_a15_5g-12638.php",
  },
  {
    brand: "Xiaomi",
    model: "Xiaomi Redmi Note 12 Pro",
    price: "$ 229.95",
    os: "Android 12, MIUI 13",
    spec: "128GB 6GB RAM, 128GB 8GB RAM",
    color: "Frosted Blue (Sky Blue), Onyx Black (Midnight Black)",
    img: "./assets/imgs/xiaomi-redmi-note-12-pro.jpg",
    location: "https://www.gsmarena.com/xiaomi_redmi_note_12_pro-11955.php",
  },
  {
    brand: "Google Pixel",
    model: "Google Pixel 7a",
    price: "$ 240.94 ",
    os: "Android 13, upgradable to Android 14",
    spec: "128GB 8GB RAM",
    color: "Charcoal, Snow, Sea, Coral, Onyx Black",
    img: "./assets/imgs/google-pixel-7a.jpg",
    location: "https://www.gsmarena.com/google_pixel_7a-12170.php",
  },
  {
    brand: "Apple",
    model: "Apple iPhone XS Max",
    price: "$ 212.87",
    os: "iOS 12, upgradable to iOS 17.5.1",
    spec: "256GB 4GB RAM, 512GB 4GB RAM",
    color: "Space Gray, Silver, Gold",
    img: "./assets/imgs/apple-iphone-xs-max-new1.jpg",
    location: "https://www.gsmarena.com/apple_iphone_xs_max-9319.php",
  },
  {
    brand: "Nothing",
    model: "Nothing Phone (2a)",
    price: "$ 388.00",
    os: "Android 14, Nothing OS",
    spec: "128GB 8GB RAM, 256GB 8GB RAM, 256GB 12GB RAM",
    color: "Black, White, Milk, Blue",
    img: "./assets/imgs/nothing-phone-2a.jpg",
    location: "https://www.gsmarena.com/nothing_phone_(2a)-12760.php",
  },
  {
    brand: "OnePlus",
    model: "OnePlus Nord 3",
    price: "$ 219.00",
    os: "Android 13, OxygenOS 13.1",
    spec: "	128GB 8GB RAM, 256GB 16GB RAM",
    color: "Misty Green, Tempest Gray",
    img: "./assets/imgs/oneplus-nord-3r.jpg",
    location: "https://www.gsmarena.com/oneplus_nord_3-12135.php",
  },
  {
    brand: "Apple",
    model: "Apple iPhone 15 Pro Max",
    price: "$ 923.95",
    os: "iOS 17, upgradable",
    spec: "512GB 8GB RAM",
    color: "Black Titanium, White Titanium, Blue Titanium",
    img: "./assets/imgs/apple-iphone-15-pro-max.jpg",
    location: "https://www.gsmarena.com/apple_iphone_15_pro_max-12548.php",
  },
  {
    brand: "Vivo",
    model: "Vivo Y58",
    price: "$ 189.2",
    os: "Android 14, Funtouch 14",
    spec: "128GB 8GB RAM",
    color: "Himalayan Blue, Sundarbans Green",
    img: "./assets/imgs/vivo-u38.jpg",
    location: "https://www.gsmarena.com/vivo_y58-13156.php",
  },
  {
    brand: "OnePlus",
    model: "OnePlus Nord CE4",
    price: "$304.87",
    os: "Android 14, ColorOS 14",
    spec: "128GB 8GB RAM",
    color: "Celadon Marble, Dark Chrome",
    img: "./assets/imgs/oneplus-nord-ce4-.jpg",
    location: "https://www.gsmarena.com/oneplus_nord_ce4-12892.php",
  },
  {
    brand: "Apple",
    model: "Apple iPhone 11 Pro",
    price: "$ 242.69",
    os: "iOS 13, upgradable",
    spec: "64GB 4GB RAM",
    color: "Matte Space Gray, Matte Silver, Matte Gold,",
    img: "./assets/imgs/iphone-11-pro-max-.jpg",
    location: "https://www.gsmarena.com/apple_iphone_11_pro-9847.php",
  },
  {
    brand: "Samsung",
    model: "Samsung Galaxy A15 5G",
    price: "$ 148.38",
    os: "Android 14, ColorOS 14",
    spec: "128GB 4GB RAM",
    color: "Brave Black, Personality Yellow, Magical Blue",
    img: "./assets/imgs/samsung-galaxy-a15-5g-new.jpg",
    location: "https://www.gsmarena.com/samsung_galaxy_a15_5g-12638.php",
  },
  {
    brand: "Xiaomi",
    model: "Xiaomi Redmi Note 12 Pro",
    price: "$ 229.95",
    os: "Android 12, MIUI 13",
    spec: "128GB 6GB RAM, 128GB 8GB RAM",
    color: "Frosted Blue (Sky Blue), Onyx Black (Midnight Black)",
    img: "./assets/imgs/xiaomi-redmi-note-12-pro.jpg",
    location: "https://www.gsmarena.com/xiaomi_redmi_note_12_pro-11955.php",
  },
  {
    brand: "Google Pixel",
    model: "Google Pixel 7a",
    price: "$ 240.94 ",
    os: "Android 13, upgradable to Android 14",
    spec: "128GB 8GB RAM",
    color: "Charcoal, Snow, Sea, Coral, Onyx Black",
    img: "./assets/imgs/google-pixel-7a.jpg",
    location: "https://www.gsmarena.com/google_pixel_7a-12170.php",
  },
  {
    brand: "Apple",
    model: "Apple iPhone XS Max",
    price: "$ 212.87",
    os: "iOS 12, upgradable to iOS 17.5.1",
    spec: "256GB 4GB RAM, 512GB 4GB RAM",
    color: "Space Gray, Silver, Gold",
    img: "./assets/imgs/apple-iphone-xs-max-new1.jpg",
    location: "https://www.gsmarena.com/apple_iphone_xs_max-9319.php",
  },
  {
    brand: "Nothing",
    model: "Nothing Phone (2a)",
    price: "$ 388.00",
    os: "Android 14, Nothing OS",
    spec: "128GB 8GB RAM, 256GB 8GB RAM, 256GB 12GB RAM",
    color: "Black, White, Milk, Blue",
    img: "./assets/imgs/nothing-phone-2a.jpg",
    location: "https://www.gsmarena.com/nothing_phone_(2a)-12760.php",
  },
  {
    brand: "OnePlus",
    model: "OnePlus Nord 3",
    price: "$ 219.00",
    os: "Android 13, OxygenOS 13.1",
    spec: "	128GB 8GB RAM, 256GB 16GB RAM",
    color: "Misty Green, Tempest Gray",
    img: "./assets/imgs/oneplus-nord-3r.jpg",
    location: "https://www.gsmarena.com/oneplus_nord_3-12135.php",
  },
];

const displayMobiles = () => {
  for (let i = 0; i < mobilesDetails.length; i++) {
    divContainer.innerHTML += `<div class="box-wrapper">
    <div class="img-wrapper"><img src="${mobilesDetails[i].img}"><h2>${mobilesDetails[i].model}</h2></div>
  <div><div class="details"><span class="heading">Brand:</span>${mobilesDetails[i].brand} </div>
    <div class="details"><span class="heading">Specs:</span>${mobilesDetails[i].spec} </div>
    <div class="details"><span class="heading">OS:</span>${mobilesDetails[i].os} </div>
    <div class="details"><span class="heading">Color:</span>${mobilesDetails[i].color} </div>
    <div class="details"><span class="heading">Price:</span>${mobilesDetails[i].price} </div></div>
    <div class="btn"><a href="${mobilesDetails[i].location}" target="_blank">Details</a></div>
    </div>
    `;
  }
};
displayMobiles();

let search = document.getElementById("search");

const searchBar = () => {
  divContainer.innerHTML = "";
  if (search.value.trim() === "") {
    displayMobiles();
    return;
  }
  let filteredData = mobilesDetails.filter(
    (mobiles) =>
      mobiles.brand.toLowerCase().includes(search.value.toLowerCase()) ||
      mobiles.model.toLowerCase().includes(search.value.toLowerCase())
  );
  filteredData.forEach((item) => {
    divContainer.innerHTML += `<div class="box-wrapper">
    <div class="img-wrapper"><img src="${item.img}"><h2>${item.model}</h2></div>
  <div><div class="details"><span class="heading">Brand:</span>${item.brand} </div>
    <div class="details"><span class="heading">Specs:</span>${item.spec} </div>
    <div class="details"><span class="heading">OS:</span>${item.os} </div>
    <div class="details"><span class="heading">Color:</span>${item.color} </div>
    <div class="details"><span class="heading">Price:</span>${item.price} </div></div>
    <div class="btn"><a href="${item.location}" target="_blank">Details</a></div>
    </div>
    `;
  });
};
