// fio_list();

// function fio_list() {
//   var massTestersTab = [1];
//   let trList = document.querySelectorAll("tr:nth-child(n+2)");
//   console.log(trList);
//   for (let i = 0; i < trList.length; ++i) {
//     let tdNum = trList[i].querySelectorAll("td:nth-child(2)");
//     for (let j = 0; j < tdNum.length; j++) {
//       let tab = tdNum[j].innerHTML;
//       console.log("11111 " + tab);
//       let newTab;
//       console.log("22222 " + newTab);
//       if (999 < tab && tab < 10000) {
//         newTab = "0" + tab;
//       } else if (99 < tab && tab < 1000) {
//         newTab = "00" + tab;
//       } else if (9 < tab && tab < 100) {
//         newTab = "000" + tab;
//       }
//       console.log("33333 " + newTab);

//        massTestersTab.push(newTab);
//       console.log("44444 " + massTestersTab);
//     }

//   }

//   return massTestersTab;
// }

//  Вывод текущей даты
var dateTod;
function dateToday() {
  let d = new Date();
  let date = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  dateTod = ("0" + date).slice(-2) + "." + ("0" + month).slice(-2) + "." + year;
  todayDate.innerHTML = "<p> Сегодня <b>" + dateTod + " г.</b> </p>";
}

dateToday();

// function myFunction() {
//   var input, filter, tr, td, i;
//   input = document.querySelector("table");
// console.log(input);
//   filter = input.value.toLowerCase();
//   console.log(filter);

//   tr = table.querySelectorAll("tr");
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }

// myFunction();

getIdOfClickButton();

function getIdOfClickButton() {
  var btn = document.querySelector("#listToday");
  btn.addEventListener("click", function(e) {
    clickButton(e);
  });
}

function clickButton(event) {
  event.preventDefault();

  let newTable = [],
  table = document.querySelector("table")
  listTh = table.querySelectorAll("th"),
  listTr = table.querySelectorAll("tr");
  console.log(listTh);
  newTable.push(listTh);
 
  for (let i = 1; i < listTr.length; i++) {

    console.log(listTr[i]);
    console.log(listTr[i].querySelector("td")[3]);
    if (listTr[i].querySelector("td")[3].innerHTML == dateTod) {
      newTable.push(listTr[i]);
    }
  }
  console.log(listTr);
  // let sortedRows = Array.from(table.rows).slice(1).sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

  // table.tBodies[0].append(...sortedRows);
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
  console.log(switchcount);

  table = document.querySelector("table");
  switching = true;
  dir = "asc"; //  Задаем начальную сортировку по возрастанию
  console.log(dir);
  console.log(77777777777777777);

  //  Цикл, где будет меняться значение строк, пока это необходимо
  while (switching) {
    console.log(77777777777777777);
    //  Начинаем с отсутствия необходимости в сортировке.
    //  Это значение попадет в цикл while, когда мы дойдем до последних двух строк
    //  и выполним (либо нет) для них сортировку
    switching = false;
    rows = table.querySelectorAll("tr");

    //  Перебираем все строки таблицы кроме заголовка (поэтому rows.length - 1)
    for (i = 1; i < rows.length - 1; i++) {
      console.log(77777777777777777);
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
          console.log("2222222222" + dir);
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
          console.log("55555555555" + dir);

          //  Если первое значение (Я) меньше второго (А), то поменять строки
          //  и завершить for для данной строки (rows[i]) - перейти к следующей
          shouldSwitch = true;
          break;
        }
      }
    }
    console.log(77777777777777777);
    if (shouldSwitch) {
      //  Меняем местами строки (второй ставим перед первым) и отмечаем, что сменили, чтобы продолжался цикл проверки строк на необходимость смены
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //  Каждая смена строк подсчитывается
      switchcount++;
      console.log(switchcount);
      console.log('1'+dir);
    } else {
      console.log(77777444444444444777);
      //  Если сортировка (смена мест строк) не выполнялась и задана сортировка asc
      //  (по возрастанию), то сменить на desc (по убыванию) и запустить цикл while - 
      //  это выполняется в начале при нажатии на кнопку
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
        console.log('2'+dir);
        console.log(7777777777000000000000000000007777777);
      }
      console.log('3'+dir);
    }
    console.log('4'+dir);
  }
  console.log('5'+dir);
}
