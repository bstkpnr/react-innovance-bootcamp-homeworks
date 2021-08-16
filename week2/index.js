//Loading sona erme
//Loading sona erme
let loading = document.getElementById("loading")
loading.style.display = "block"
//verileri listeleme
let ul = document.querySelector("#dataList");
let liste = document.querySelector("#liste");

setTimeout(() => {
  fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
      data.map((item) => {
        let foodList = document.createElement("li");
        let tag = document.createElement("button");
        foodList.innerHTML = item.title;
        ul.appendChild(foodList);
        foodList.appendChild(tag);
        tag.innerHTML = '<i class="bi bi-suit-heart-fill"></i>'
      });
    
    
    

    //favori ekle-çıkar işlemi
    const addToFav = '<i class="bi bi-suit-heart-fill"></i>';
    const remove = '<i class="bi bi-trash-fill"></i>';
    
    $("#dataList button").each(function (e) {
      if (localStorage.getItem($(this).parent().contents()[0].nodeValue)) {
        $(this).html(remove);
      } else {
        $(this).html(addToFav);
      }
    });

    $("#dataList button").click(function (e) {
      var nodeVal = $(this).parent().contents()[0].nodeValue;
      if (localStorage.getItem(nodeVal)) {
        localStorage.removeItem(nodeVal);
        $(this).html(addToFav);
        console.log("NASIL YA")
      } else {
        localStorage.setItem(nodeVal, "kocaman kalp");
        $(this).html(remove);
      }
    });

    //listede arama yapma

    let searchBar = document.getElementById("searchBar");
    searchBar &&
      searchBar.addEventListener("input", function (e) {
        let filter = e.target.value.toUpperCase();
        let dataList = document.getElementById("dataList");
        let li = dataList.getElementsByTagName("li");
        for (let i = 0; i < li.length; i++) {
          li[i].style.display = "inline";
          if (e.target.value === "") {
            li[i].style.display = "inline";
            li[i].style.border = "4px solid #93D9A3";
          } else if (li[i].innerText.toUpperCase().indexOf(filter) > -1) {
            li[i].style.boxShadow = "10px 10px 5px #171717";
          } else {
            li[i].style.display = "none";
          }
        }

        console.log("tıkla bakalım ");
      });
  });
}, 3000);


//Kullanıcı bilgisinin gösterimi
setTimeout(function () {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => res.json())
    .then((nameData) => {
      document.getElementById("myName").innerHTML =
        "Merhaba, " + nameData.name + "<br>" + " Hoşgeldiniz";
        loading.style.display = "none"
    });
}, 3000);



