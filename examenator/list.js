function true_value() {
  return true;
}

true_value();

function fio_list() {
  

  //   let tabL = tabV;

  var list = document.querySelectorAll("td:nth-child(1)");

  for (var i = 0; i < list.length; ++i) {
    import { fioV } from "./../tester/js.js";
    if (list[i] == fioV) {
      export { true_value };
    }
    // f1 = list[i].getElementsByTagName("td")[0];
  }
  //   return 18;
}

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
