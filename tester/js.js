// Константы

const state = {
  timeOfTest: 5, // Время теста в минутах
  pass: "123" // пароль для начала теста
};

let rightAnswersLaw = [
  "right_otv_1_1",
  "right_otv_2_3",
  "right_otv_3_3",
  "right_otv_4_2",
  "right_otv_5_2"
];

var testerAnswersLaw = {};
// Переменная результата теста

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

console.log();
function validation() {
  var btn = document.querySelector('input[type="submit"]');
  btn.addEventListener("click", function(e) {
    checkData(e);
  });
}

function checkData(event) {
  event.preventDefault();

  let fio = document.forms.form2.name.value;
  let tab_no = document.forms.form2.tab_no.value;
  let pass = document.forms.form2.pass.value;

  switch (true) {
    case fio == null:
      alert("Неверное имя");
      break;

    case tab_no == null:
      alert("Неверный табельный");
      break;

    case pass != state.pass:
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

//  Потеря фокуса

function focusOut() {
  window.onblur = function() {
    place = true;
  };
}

/* Создание списка кнопок с ответами для нажатия */

function getIdOfClickButton() {
  let button = questions.querySelectorAll("button");
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function(e) {
      clickButton(e);
    });
  }
}

/* Действие после нажатия на кнопку с ответом */
// Прячем ответ, чтобы не нажать вторую (или более) кнопку с ответом в одном
// вопросе = нарушение логики кода!

function clickButton(event) {
  let nameQuestion = "#question" + (counter + 1);
  let idAnswer = event.target.getAttribute("id");
  testerAnswersLaw[nameQuestion] = idAnswer;
  counter++;
  seeHideElement(nameQuestion);
}

//  Преждевременное завершение теста.
//  После него идет подсчет того, что нарешали

function fastFinishTest() {
  document.querySelector("#finishTest").onclick = function() {
    exitTest = true;
  };
}

// Подсчет результата теста, вывод в html

function counterButtons() {
  let summ = 0;
  for (key in testerAnswersLaw) {
    for (let i = 0; i < rightAnswersLaw.length; i++) {
      if (testerAnswersLaw[key] == rightAnswersLaw[i]) {
        summ++;
      }
    }
  }

  if (counter != 0 || counter == 5) {
    let ball = Math.round((summ * 10) / 5);
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
