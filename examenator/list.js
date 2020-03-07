fio_list();

function fio_list() {
  let massTesters = [];
  let nameKeys = document.querySelectorAll("tr>th");
  let listTr = document.querySelectorAll("tr:nth-child(n+2)");
  for (let i = 0; i < listTr.length; ++i) {
    let tdNum = listTr[i].querySelectorAll("td");
    let tester = {};
    for (let j = 0; j < tdNum.length; ++j) {
      let nameKey = nameKeys[j].id;
      tester[nameKey] = tdNum[j].textContent;
    }
    massTesters.push(tester);
  }
  return massTesters;
}



import { fio, tab_no, pass } from "./../tester/js.js";

validation();

function validation() {
  var summ = 0;
  if (fio == "Иванов И.И.") {
    summ++;
  }
  if (tab_no == 1567) {
    summ++;
  }
  if (pass == 123) {
    summ++;
  }
}

export { summ };

console.log(fio, tab_no, pass);
