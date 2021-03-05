var calcolaPrezzo = document.getElementById('calcola-prezzo');
//var burgerName = document.getElementById("burgername").value;
var checkBox = document.getElementsByClassName("box");

//ascolto click

calcolaPrezzo.addEventListener("click",
  function() {

    if (document.getElementById("burgername").value != ""){
      //scorre fra la lista di cekbox e guarda se sono cekati
      var sum = 50;
      for (var i = 0; i < checkBox.length; i++) {

        if (checkBox[i].checked == true) {

          sum += parseInt(checkBox[i].value);

        }

      }
      console.log(sum);

    } else {

      alert("inserisci nome hamburger");

    }

  }
);
