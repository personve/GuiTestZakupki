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
  var time1 = Math.round((6 * 1000) / 100);
  var id = setInterval(progressStatus, time1);
  function progressStatus() {
    if (width == 0) {
      clearInterval(id);
      document.getElementById("questions").style.display = "none";
      document.getElementById("progressBar").style.display = "none";
    } else {
      width--;
      elem.style.width = width + "%";
    }
  }
} /* Основной код теста */

function getIdOfClickButton() {
  var summ = 0;
  var buttons = question1.querySelectorAll("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {
      if (e.target.getAttribute("id") === "right_otv_1_1") {
        document.getElementById("question1").style.display = "none";
        res.innerHTML += 1;
      } else if (e.target.getAttribute("id") !== "right_otv_1_1") {
        document.getElementById("question1").style.display = "none";
        res.innerHTML += 2;
      }
    });
  }
}
