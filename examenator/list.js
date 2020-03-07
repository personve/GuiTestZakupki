// function true_value() {
//   let value = true;
//   return console.log(value);
// }

// true_value();

function fio_list() {
    let tester = {};
  let listTr = document.querySelectorAll("tr:nth-child(n+2)");

  for (let i = 0; i < listTr.length; ++i) {
    let listTd = listTr[i].querySelector("td:nth-child(1)");
    tester["fio" + [i]] = listTd;
    console.log(tester);
  }
  return tester;
}
// export { tester };

fio_list();

//   function seeHideElement(...theArgs) {
//     for (let i = 0; i < theArgs.length; i++) {
//       let elem = document.querySelector(theArgs[i]);
//       let stl = getComputedStyle(elem).display;
//       if (stl == "none" || stl == null) {
//         elem.style.display = "block";
//       } else if (stl == "block") {
//         elem.style.display = "none";
//       }
//     }
//   }

// export { fio_list, tab_list };
