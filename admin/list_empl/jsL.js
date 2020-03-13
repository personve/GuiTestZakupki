//  Вывод текущей даты
var dateTod;

function dateToday() {
  let d, date, month, year;
  d = new Date();
  date = d.getDate();
  month = d.getMonth() + 1;
  year = d.getFullYear();
  dateTod = ("0" + date).slice(-2) + "." + ("0" + month).slice(-2) + "." + year;
  document.querySelector("#todayDate").innerHTML = "<p> Сегодня <b>" + dateTod + " г.</b> </p>";
}

dateToday();

//  Печать списка сдающих сегодня

getIdOfClickButton();

function getIdOfClickButton() {
  var btn = document.querySelector("#listToday");
  btn.addEventListener("click", function(e) {
    clickButton(e);
  });
}

function clickButton(event) {
  event.preventDefault();
  let table, listTr, td;
  table = document.querySelector("table");
  listTr = table.querySelectorAll("tr");

  for (let i = 1; i < listTr.length; i++) {
    td = listTr[i].querySelectorAll("td")[3];
    if (td.innerHTML != dateTod) {
      console.log(listTr[i]);
      listTr[i].style.display = "none";
    }
  }

  seeHideElement("#todayDate", "#listToday", ".goToMainMenu", ".goBack");
  document.querySelector(".actions").innerHTML = dateTod;
  window.print();
  location.reload();
}

// Спрятать элементы

function seeHideElement(...theArgs) {
  for (let i = 0; i < theArgs.length; i++) {
    let elem = document.querySelector(theArgs[i]);
    elem.style.display = "none";
  }
}

//  Сортировка таблицы

function sortTable(n) {
  let table,
    rows,
    switching,
    i,
    firstTr,
    secondTr,
    shouldSwitch,
    dir,
    switchcount = 0;

  table = document.querySelector("table");
  switching = true;
  dir = "asc";

  while (switching) {
    switching = false;
    rows = table.querySelectorAll("tr");

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      firstTr = rows[i].querySelectorAll("td")[n];
      secondTr = rows[i + 1].querySelectorAll("td")[n];

      if (dir == "asc") {
        if (
          firstTr.innerHTML.toLowerCase() > secondTr.innerHTML.toLowerCase()
        ) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (
          firstTr.innerHTML.toLowerCase() < secondTr.innerHTML.toLowerCase()
        ) {
          shouldSwitch = true;
          break;
        }
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
