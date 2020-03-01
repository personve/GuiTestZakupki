function checkData(event) {
  event.preventDefault();
  if (document.forms.form2.tab_no.value !== null) {
    if (document.forms.form2.name.value !== null) {
      if (document.forms.form2.pass.value === "123") {
        fio_tab();
        document.getElementById("hidePass").style.display = "none";
        document.getElementById("hideQuestions").style.display = "block";
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
}

function fio_tab() {
  let val1 = document.getElementById("name").value;
  let val2 = document.getElementById("tab_no").value;
  document.getElementById("hideHello").style.display = "block";
  fio.innerHTML = val1;
  tab.innerHTML = val2;
}

function progress() {
  var width = 100;
  var elem = document.getElementById("progress_line");
  var time1 = Math.round((60 * 1000) / 100);
  var id = setInterval(progressStatus, time1);

  function progressStatus() {
    if (width == 0) {
      clearInterval(id);
      document.getElementById("hideQuestions").style.display = "none";
    }
    // else if (нажимаем кнопку с правильным ответом) {
    //   clearInterval(id);
    //   добавляем +1 к итоговому результату за тест
    //   hidden();
    // }
    else {
      width--;
      elem.style.width = width + "%";
    }
  }
}
