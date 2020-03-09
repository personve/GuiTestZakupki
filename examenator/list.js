//  Вывод текущей даты
var dateTod;

function dateToday() {
  let d, date, month, year;
  d = new Date();
  date = d.getDate();
  month = d.getMonth() + 1;
  year = d.getFullYear();
  dateTod = ("0" + date).slice(-2) + "." + ("0" + month).slice(-2) + "." + year;
  todayDate.innerHTML = "<p> Сегодня <b>" + dateTod + " г.</b> </p>";
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
      listTr[i].style.display = "none";
    }
  }

  seeHideElement("#listToday", ".goToMainMenu");

  document.querySelector("#todayDate").style.position = "inherit";

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
  dir = "asc"; //  Задаем начальную сортировку по возрастанию

  //  Цикл, где будет меняться значение строк, пока это необходимо
  while (switching) {
    //  Начинаем с отсутствия необходимости в сортировке.
    //  Это значение попадет в цикл while, когда мы дойдем до последних двух строк
    //  и выполним (либо нет) для них сортировку
    switching = false;
    rows = table.querySelectorAll("tr");

    //  Перебираем все строки таблицы кроме заголовка (поэтому rows.length - 1)
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false; //  Начинаем с отсутствия сортировки (задается для очистки значения)

      //  Берем две строки
      firstTr = rows[i].querySelectorAll("td")[n];

      secondTr = rows[i + 1].querySelectorAll("td")[n];

      //  Проверка: надо ли меняться местами

      //  Срабатывает после первого нажатия на сортировку, исходя из
      //  заданного по умлочанию dir = 'asc' (должно быть АБВГ..Я
      //  тогда срабатывать не будет)
      if (dir == "asc") {
        if (
          firstTr.innerHTML.toLowerCase() > secondTr.innerHTML.toLowerCase()
        ) {
          //  Если первое значение (Я) больше второго (А), то поменять строки
          //  и завершить for для данной строки (rows[i]) - перейти к следующей
          shouldSwitch = true;
          break;
        }
        //  Срабатывает после второго нажатия на сортировку, исходя из
        //  после прохождения первой сортировки dir становится равным 'desc' (Я..ГВБА)
      } else if (dir == "desc") {
        if (
          firstTr.innerHTML.toLowerCase() < secondTr.innerHTML.toLowerCase()
        ) {
          //  Если первое значение (Я) меньше второго (А), то поменять строки
          //  и завершить for для данной строки (rows[i]) - перейти к следующей
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      //  Меняем местами строки (второй ставим перед первым) и отмечаем, что сменили, чтобы продолжался цикл проверки строк на необходимость смены
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //  Каждая смена строк подсчитывается
      switchcount++;
    } else {
      //  Проверяется имеющийся список. Если уже сортировка по asc была (задана asc сейчас),
      //  то менять местами нечего, НО мы нажали на сортировку еще раз => мы хотим
      //  запустить сортировку по desc (по убыванию),а так как мы еще ниче не меняли, то
      //   switchcount == 0.  Этот if выполняется в начале при нажатии на кнопку
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
