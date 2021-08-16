import {user} from './user_information.js';
console.log(user)
const accounts = [
  {
    iban: "trxx yyyy xxxx yyyy",
    balance: 100,
  },
  {
    iban: "trxx yyyy xxxx yyyx",
    balance: 5040,
  },
  {
    iban: "trxx yyyy xxxx xyyx",
    balance: 10594,
  },
];
let sendMoney =document.querySelector('#aliciIban');


var dropdown = document.getElementById("bankAccount");
 dropdown && accounts.forEach(function (e) {
  var account_number = `Hesap No: ${e.iban} - Bakiye: ${e.balance} £`;
     var accounts = document.createElement("option");
     accounts.innerText = account_number;
     dropdown.appendChild(accounts);
     activeButton();
});

function activeButton() {
  if (sendMoney) {
    document.getElementById("sendAccount").disabled = false;
  } else if (!sendMoney){
    document.getElementById("sendAccount").disabled = true;
  }
}

activeButton();
//timer
let interval;
function startTimer(duration, display) {
  let start = Date.now(),
    diff =null,
    minutes=null,
    seconds=null;

  function timer() {
    diff = duration - (((Date.now() - start) / 1000) | 0);
    minutes = (diff / 60) | 0;
    seconds = diff % 60 | 0;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display &&  (display.textContent = minutes + ":" + seconds);


    if (minutes == 0 && seconds == 0) {
      clearInterval(interval);
      alert("Oturumunuz sonlanmıştır");
      setTimeout(function(){
        location.href='index.html'
      },1000);
    } 
  }
  interval=setInterval(timer, 120);
}
window.onload = function (display) {
  var twoMinutes = 60 * 2;
  display && (display = document.querySelector("#time"));
  startTimer(twoMinutes, display);
};

//Banka onay
let sendAccount=document.getElementById('sendAccount');
sendAccount && sendAccount.addEventListener('click',function () {
 const moneyAlert = document.getElementById("labelMoney").value;
 document.querySelector('#aliciIban').value="";
 
 if(moneyAlert!="" && moneyAlert<=500){
   alert("İŞLEM BAŞARILI");
   location.reload();
 }else if (moneyAlert != "" && moneyAlert > 500) {
  for (let i = 0; i< 3; i++) {
    const bankPassword = prompt(
      "Telefonunuza Gelen Şifreyi Giriniz",
      "Buraya yazınız lütfen"
    );
    if (bankPassword == "1234") {
      alert("Şifre Başarılı.");
      location.reload();

      break;
    } else alert("Şifre Yanlış");
    if (i == 2) {
      alert("Hesabınız Bloke Oldu");
      location.reload();
    }
  }
}

console.log("basıldı")
});

