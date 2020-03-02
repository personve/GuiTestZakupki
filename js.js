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
  var time1 = Math.round((500 * 1000) / 100);
  var id = setInterval(progressStatus, time1);

  function progressStatus() {
    if (width == 0) {
      clearInterval(id);
      document.getElementById("questions").style.display = "none";
      document.getElementById("progressBar").style.display = "none";
      document.getElementById("result").style.display = "block";
      res.innerHTML = 16; /* Результат теста */
    } else {
      width--;
      elem.style.width = width + "%";
    }
  }
} /* Основной код теста */

function getBall() {
  var ball = 0;
  rightBut1.onclick = function() {};
}

function getSumm() {
  var sumRes = 0;
  for (var i = 0; i < Array.length; i++) {
    sumRes += parseInt(mass[i]);
  }
  return sumRes;
}

