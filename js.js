function checkData(event) {
  event.preventDefault();
  if (document.forms.form2.tab_no.value !== null) {
    if (document.forms.form2.name.value !== null) {
      if (document.forms.form2.pass.value === "123") {
        fio_tab();
        document.getElementById("hidePass").style.display = "none";
        document.getElementById("questions").style.display = "block";
        document.getElementById("progressBar").style.display = "block";

        progress();
        getIdOfClickButton();
      } else {
        alert("Неверный пароль-подтверждение");
      }
    } else {
      alert("Неверная фамилия");
    }
  } else {
    alert("Неверный табельный");
  }
} /* Валидация для начала теста */

function fio_tab() {
  let val1 = document.getElementById("name").value;
  let val2 = document.getElementById("tab_no").value;
  document.getElementById("hideHello").style.display = "block";
  fio.innerHTML = val1;
  tab.innerHTML = val2;
} /* Заполнение поля приветствия тестируемого */

function progress() {
  var width = 100;
  var elem = document.getElementById("progress_line");
  let time1 = Math.round((6 * 1000) / 100);
  var id = setInterval(progressStatus, time1);
  function progressStatus() {
    if (width == 0) {
      clearInterval(id);
      document.getElementById("questions").style.display = "none";
      document.getElementById("progressBar").style.display = "none";
      document.getElementById("result").style.display = "block";
    } else {
      width--;
      elem.style.width = width + "%";
    }
  }
} /* Прогресс Бар */

function getIdOfClickButton() {
  
  var button = questions.querySelectorAll("button");
  for (let i = 0; i < button.length; i++) {
    // button[i].addEventListener("click", clickButton(event));
    button[i].addEventListener("click", function(e) {
      clickButton(e);
    });
  }
} /* Создание списка кнопок с ответами для нажатия */

function clickButton(event) {
  var summ = 0;
  for (;;) {
    console.log(event.target.getAttribute("id"));
    switch (event.target.getAttribute("id")) {
      case "right_otv_1_1":
        summ = summ + 1;
        hideQuestion1();
        // res.innerHTML = '16';
        break;
      case "wrong_otv_1_2":
      case "wrong_otv_1_3":
      case "wrong_otv_1_4":
        hideQuestion1();
        // res.innerHTML = '17';
        break;
      default:
        break;
    }
    break;
  }
  res.innerHTML = (summ*100/5);
} /* Действие после нажатия на кнопку с ответом */

function hideQuestion1() {
  document.querySelector("#question1").style.display = "none";
}

function hideQuestion2() {
  document.querySelector("#question2").style.display = "none";
}
function hideQuestion3() {
  document.querySelector("#question3").style.display = "none";
}
function hideQuestion4() {
  document.querySelector("#question4").style.display = "none";
}
function hideQuestion5() {
  document.querySelector("#question5").style.display = "none";
}
