var calcolaPrezzo = document.getElementById('calcola-prezzo');
var burgerName = document.getElementById("burgername");
var checkBox = document.getElementsByClassName("box");
var sum = 50;
var prezzo = document.getElementById("prezzo");
var couponList = ["124", "4321", "1234qbc", "qbc1234"]
var coupon = document.getElementById("coupon");
//ascolto click

calcolaPrezzo.addEventListener("click",
  function() {

    if ( burgerName.value != ""){
      //scorre fra la lista di cekbox e guarda se sono cekati

      for (var i = 0; i < checkBox.length; i++) {

        if (checkBox[i].checked == true) {
          //sommo
          sum += parseInt(checkBox[i].value);

        }

      }

    } else {

      alert("inserisci nome hamburger");

    }
    //applico sconto se c'è coupon
    if (couponList.includes(coupon.value)) {

      prezzo.innerHTML = Math.trunc(sum * 0.8) + "$";

    } else {

      prezzo.innerHTML = sum + "$";

    }

  }
);
