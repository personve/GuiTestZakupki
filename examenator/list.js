fio_list();

function fio_list() {
  var massTestersTab = [1];
  let trList = document.querySelectorAll("tr:nth-child(n+2)");
  console.log(trList);
  for (let i = 0; i < trList.length; ++i) {
    let tdNum = trList[i].querySelectorAll("td:nth-child(2)");
    for (let j = 0; j < tdNum.length; j++) {
      let tab = tdNum[j].innerHTML;
      console.log("11111 " + tab);
      let newTab;
      console.log("22222 " + newTab);
      if (999 < tab && tab < 10000) {
        newTab = "0" + tab;
      } else if (99 < tab && tab < 1000) {
        newTab = "00" + tab;
      } else if (9 < tab && tab < 100) {
        newTab = "000" + tab;
      }
      console.log("33333 " + newTab);

       massTestersTab.push(newTab);
      console.log("44444 " + massTestersTab);
    }
   
  }

  return massTestersTab;
}

// Math.pow(10, i)

// const str = Number(fio_list().join(""));
// console.log(str);

// export { str };
// let hexString = Number(str).toString(16);
// if (hexString.length % 2) {
//   hexString = '0' + hexString;
// }
// console.log(Number(hexString));

// for (var i = 0; i<fio_list().length; i++) {
//   // window['perem'+i] = fio_list()[i] ;
//   console.log(window['perem'+i] = fio_list()[i]);
//   }

// for (let i = 0; i < fio_list().length; i++) {
//   var e = fio_list()[i];
//   console.log(e);
// }

