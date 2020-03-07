// Константы

const state = {
  timeOfTest: 2, // Время теста в минутах
  pass: "123" // пароль для начала теста
};

// Переменная результата теста

var summ = 0;
var counter = 0; // Счетчик количества нажатых кнопок ответов (нажать 5 для завершения)
var exitTest;
var place;

// Прятать и показывать элементы

function seeHideElement(...theArgs) {
  for (let i = 0; i < theArgs.length; i++) {
    let elem = document.querySelector(theArgs[i]);
    let stl = getComputedStyle(elem).display;
    if (stl == "none" || stl == null) {
      elem.style.display = "block";
    } else if (stl == "block") {
      elem.style.display = "none";
    }
  }
}

/* Валидация для начала теста */
// import { fio_list } from "./../examenator/list.js";

validation();

function validation() {
  var btn = document.querySelector('input[type="submit"]');
  btn.addEventListener("click", function(e) {
    checkData(e);
  });
}

function checkData(event) {
  event.preventDefault();

  let form = document.forms.form2;

  // let fioV = form.name.value;

  // export { fioV };

  // let fio = fio_list();
  // let tab = tab_list();

  switch (true) {
    case form.name.value == null:
      alert("Неверное имя");
      break;

    case form.tab_no.value == null:
      alert("Неверный табельный");
      break;

    case form.pass.value != "123":
      alert("Неверный пароль-подтверждение");
      break;

    default:
      getFioTab();
      seeHideElement(
        "#pass",
        ".goToMainMenu",
        "#space",
        "#progressBar",
        "#questions",
        "#finishTest"
      );

      passTestBar();
      passTestTime();
      getIdOfClickButton();
      fastFinishTest();
      focusOut();
      break;
  }
}

/* Заполнение полей тестируемого в конце теста (фио, табельный, результат теста) */

function getFioTab() {
  let val1 = document.querySelector("#name").value;
  let val2 = document.querySelector("#tab_no").value;
  fio.innerHTML = val1;
  tab.innerHTML = val2;
}

//  Прогресс Бар - заполнение зеленой полоски. Заполнение и окончание
//  происходит одновременно с Таймером теста

function passTestBar() {
  let width = 100;
  let elem = document.querySelector("#progress_line");
  let mlSecOfTest = state.timeOfTest * 60 * 1000;
  let lostSec = mlSecOfTest / 100;

  let id = setInterval(progressTime, lostSec);
  function progressTime() {
    if (mlSecOfTest == 0) {
      clearInterval(id);
    } else {
      width--;
      elem.style.width = width + "%";
    }
  }
}

//  Таймер теста, ПО ОКОНЧАНИЮ которого ЛИБО по нажатию кнопки завершение
//  теста, ЛИБО после нажатия 5 кнопок с ответами по 5 вопросам
//  ПРОИСХОДИТ подсчет балла теста

function passTestTime() {
  let timeOfTest = state.timeOfTest * 60 * 1000;
  let lostSec = 1000;

  let id = setInterval(progressStatus, lostSec);

  function progressStatus() {
    if (timeOfTest == 0 || counter == 5 || exitTest || place) {
      seeHideElement(
        "#finishTest",
        "#progressBar",
        "#space",
        "#questions",
        "#hello",
        "#result",
        ".goToMainMenu"
      );
      clearInterval(id);
      counterButtons(); //Подсчет результатов теста
    } else {
      timeOfTest -= lostSec;
    }
  }
}

// Подсчет результата теста, вывод в html

function counterButtons() {
  if (counter != 0 || counter == 5) {
    var ball = Math.round((summ * 10) / 5);
    if (ball == 1) {
      res.innerHTML = ball + " балл";
    } else if (ball == 2 || ball == 3 || ball == 4) {
      res.innerHTML = ball + " балла";
    } else {
      res.innerHTML = ball + " баллов";
    }
  } else {
    res.innerHTML = 0 + " баллов";
  }
}

/* Создание списка кнопок с ответами для нажатия */

function getIdOfClickButton() {
  var button = questions.querySelectorAll("button");
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function(e) {
      clickButton(e);
    });
  }
}

//  Потеря фокуса

function focusOut() {
  window.onblur = function() {
    place = true;
  };
}

/* Действие после нажатия на кнопку с ответом */
// Прячем ответ, чтобы не нажать вторую (или более) кнопку с ответом в одном
// вопросе = нарушение логики кода!

function clickButton(event) {
  counter++;
  switch (event.target.getAttribute("id")) {
    case "right_otv_1_1": // Выбор ответа на Вопрос 1
      summ++;
      seeHideElement("#question1");
      break;
    case "wrong_otv_1_2":
    case "wrong_otv_1_3":
    case "wrong_otv_1_4":
      seeHideElement("#question1");
      break;

    case "right_otv_2_3": // Выбор ответа на Вопрос 2
      summ++;
      seeHideElement("#question2");
      break;
    case "wrong_otv_2_1":
    case "wrong_otv_2_2":
    case "wrong_otv_2_4":
      seeHideElement("#question2");
      break;

    case "right_otv_3_3": // Выбор ответа на Вопрос 3
      summ++;
      seeHideElement("#question3");
      break;
    case "wrong_otv_3_1":
    case "wrong_otv_3_2":
    case "wrong_otv_3_4":
      seeHideElement("#question3");
      break;

    case "right_otv_4_2": // Выбор ответа на Вопрос 4
      summ++;
      seeHideElement("#question4");
      break;
    case "wrong_otv_4_1":
    case "wrong_otv_4_3":
    case "wrong_otv_4_4":
      seeHideElement("#question4");
      break;

    case "right_otv_5_2": // Выбор ответа на Вопрос 5
      summ++;
      seeHideElement("#question5");
      break;
    case "wrong_otv_5_1":
    case "wrong_otv_5_3":
    case "wrong_otv_5_4":
      seeHideElement("#question5");
      break;

    default:
      break;
  }
}

// function fastFinishTest() {

//   document.querySelector("#finishTest").onclick = function() {
//     return;
//   };
//   return true;
// }

// function fastFinishTest() {
//   var button = questions.querySelector("#finishTest");
//   button.addEventListener("click", function() {
//     console.log("xjxf");
//     return;
//   });
//   return true;
// }

function fastFinishTest() {
  document.querySelector("#finishTest").onclick = function() {
    exitTest = true;
  };
}
