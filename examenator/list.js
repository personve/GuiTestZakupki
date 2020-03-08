fio_list();

function fio_list() {
  var massTestersTab = [];
  let trList = document.querySelectorAll("tr:nth-child(n+2)");
  for (let i = 0; i < trList.length; ++i) {
    let tdNum = trList[i].querySelectorAll("td:nth-child(2)");
    for (let j = 0; j < tdNum.length; j++) {
      let tab = tdNum[j].innerHTML;
      var newTab;

      newTab = tab + ".5";

      console.log(newTab);

      massTestersTab.push(newTab);
    }
  }

  return massTestersTab;
}

// Math.pow(10, i)

let str = fio_list().join("");
console.log(str);

// for (var i = 0; i<fio_list().length; i++) {
//   // window['perem'+i] = fio_list()[i] ;
//   console.log(window['perem'+i] = fio_list()[i]);
//   }

// for (let i = 0; i < fio_list().length; i++) {
//   var e = fio_list()[i];
//   console.log(e);
// }
// export { e };
