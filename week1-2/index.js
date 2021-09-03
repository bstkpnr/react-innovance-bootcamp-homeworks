document.getElementById("totalMoney").innerHTML = Number.MAX_SAFE_INTEGER;

let totalMoney = Number.MAX_SAFE_INTEGER;

const productList = [
  {
    id: 1,
    name: "Kola",
    price: 4,
    img: "https://i.sozcu.com.tr/wp-content/uploads/2016/01/19/diyet-kola.jpg",
  },
  {
    id: 2,
    name: "Iskender",
    price: 30,
    img: "https://i.lezzet.com.tr/images-xxlarge-recipe/ev-yapimi-iskender-33bd7089-fa36-4398-95f8-02c6463ea27c.jpg",
  },
  {
    id: 3,
    name: "Yat",
    price: 450000,
    img: "https://i.ytimg.com/vi/9BCZpcgsAb8/maxresdefault.jpg",
  },
  {
    id: 4,
    name: "Bahceli Ev",
    price: 9500000,
    img: "https://www.neredekal.com/res/blog/1582812421_7.jpg",
  },
  {
    id: 5,
    name: "Araba Fabrikası",
    price: 120000000,
    img: "https://i.ytimg.com/vi/rfMkp55oTv0/maxresdefault.jpg",
  },
  // ... Kendi örneklerinizi eklemeye çekinmeyin.
];
//diziyi tek bir liste şeklinde göstermek için reduce yapısını kullandım.
document.querySelector(".container").innerHTML = productList.reduce(
  (acc, products) =>
    (acc += `<div class="card  border border-danger shadow p-3 mb-5 bg-white rounded" id="products${products.id}" style="width: 30rem;">
  
  <img class="card-img-top" src="${products.img}" width="450px" height="250px" >
  <div class="card-body ">
    <h4 id="name" class="text-primary">${products.name}</h4>
    <h4 id="price" class="text-info bg-light">${products.price}TL</h4>
    <br><span id="increase" >
    <div class="dropdown">
    <button onmouseover="quantity(this)" onclick="addToBasket(this)" id="${products.id}" class="btn btn-success">Add to Basket</button>
    <br><span id="quantity" class="dropdown-content text-warning font-weight-bold " ></span></div>
  </div>
  </div>`),
  ""
);

function addToBasket(val) {
  let productsID = val.id;
  let productsPrice = productList.find((e) => e.id == productsID).price;
  let productsCard = document.getElementById("products" + productsID);

  if (productsPrice < totalMoney) {
    totalMoney = totalMoney - productsPrice;
    document.getElementById("totalMoney").innerHTML = totalMoney;
    let productIncrease = productsCard.querySelectorAll("#increase");
    let counter = productIncrease.content;

    counter++;
    productIncrease.content = counter;
    alert("ADD TO BASKET");
  }
}

function quantity(val) {
  let productsID = val.id;
  let productsPrice = productList.find((e) => e.id == productsID).price;

  val.parentElement.querySelector("#quantity").innerHTML =
    Math.floor(totalMoney / productsPrice) + " CAN ADD PRODUCT";
}
