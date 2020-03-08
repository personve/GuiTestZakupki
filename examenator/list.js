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

function dateToday() {
  var d = new Date();
  var date = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();
  todayDate.innerHTML =
    "<p> Сегодня <b>" +
    ("0" + date).slice(-2) +
    "." +
    ("0" + month).slice(-2) +
    "." +
    year +
    " г.</b> </p>";
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
  console.log(document.querySelector("#listToday"));
  document.querySelector("#listToday").addEventListener("click", function() {
    clickButton();
  });
}

function clickButton() {
  let listTr = Array.from(document.querySelectorAll("tr")).slice(1);
  console.log(listTr);
  // let sortedRows = Array.from(table.rows).slice(1).sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

  // table.tBodies[0].append(...sortedRows);
}

clickButton();

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
  // console.log(switching);

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
          console.log('2222222222'+dir);
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
          console.log('55555555555'+dir);

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
      console.log(switchcount);
      console.log(dir);
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */

      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
        console.log(dir);
      }console.log(dir);
    }console.log(dir);
  }console.log(dir);
}
