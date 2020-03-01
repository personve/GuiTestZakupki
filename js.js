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
  var time1 = Math.round((300 * 1000) / 100);
  var id = setInterval(progressStatus, time1);

  function progressStatus() {
    if (width == 0) {
      clearInterval(id);
      document.getElementById("hideQuestions").style.display = "none";
      document.getElementById("result").style.display = "block";
    } else {
      width--;
      elem.style.width = width + "%";
      getMass();
    }
  }
}

function getMass() {
  var mass = [null];
  rightBut1.onclick = function () {
    mass.push(20);
    alert(mass);
  }
}

function getSumm() {
  var sumRes = 0;
  for (var i = 0; i < Array.length; i++) {
    sumRes += parseInt(mass[i]);
  }
  return sumRes;
}

function res() {}
