// Константы

const timeOfTest = 60; // Задать в секундах
const time1 = Math.round((timeOfTest * 1000) / 100); // Время теста в миллисекундах

// Переменная результата теста

var summ = 0;
var counter = 0; // Счетчик количества нажатых кнопок ответов (нажать 5 для завершения)
var exitTest;

// Прятать и показывать элементы

function hideElement(elem) {
  document.querySelector(elem).style.display = "none";
}

function seeElement(elem) {
  document.querySelector(elem).style.display = "block";
}

/* Валидация для начала теста */

function checkData(event) {
  event.preventDefault();
  if (document.forms.form2.tab_no.value !== null) {
    if (document.forms.form2.name.value !== null) {
      if (document.forms.form2.pass.value === "123") {
        getFioTab();

        hideElement("#pass");
        hideElement(".goToMainMenu");

        seeElement("#space");
        seeElement("#progressBar");
        seeElement("#questions");
        seeElement("#finishTest");

        passTest();
        getIdOfClickButton();
        fastFinishTest();
      } else {
        alert("Неверный пароль-подтверждение");
      }
    } else {
      alert("Неверная фамилия");
    }
  } else {
    alert("Неверный табельный");
  }
}

/* Заполнение полей тестируемого в конце теста (фио, табельный, результат теста) */

function getFioTab() {
  let val1 = document.querySelector("#name").value;
  let val2 = document.querySelector("#tab_no").value;
  fio.innerHTML = val1;
  tab.innerHTML = val2;
}

//  Прогресс Бар, ПО ОКОНЧАНИЮ которого ЛИБО по нажатию кнопки завершение теста,
//  ЛИБО после нажатия 5 кнопок с ответами по 5 вопросам ПРОИСХОДИТ подсчет балла теста

function passTest() {
  var width = 100;
  var elem = document.querySelector("#progress_line");
  var id = setInterval(progressStatus, time1);
  function progressStatus() {
    if (width == 0 || counter == 5 || exitTest) {
      hideElement("#finishTest");
      hideElement("#progressBar");
      hideElement("#space");
      hideElement("#questions");

      clearInterval(id);
      counterButtons(); //Подсчет результатов теста

      seeElement("#hello");
      seeElement("#result");
      seeElement(".goToMainMenu");
    } else {
      width--;
      elem.style.width = width + "%";
    }
  }
}

// Подсчет результата теста, вывод в html

function counterButtons() {
  if (counter != 0 || counter == 5 ) {
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

/* Действие после нажатия на кнопку с ответом */
// Прячем ответ, чтобы не нажать вторую (или более) кнопку с ответом в одном
// вопросе = нарушение логики кода!

function clickButton(event) {
  switch (event.target.getAttribute("id")) {
    case "right_otv_1_1": // Выбор ответа на Вопрос 1
      counter++;
      summ++;
      hideElement("#question1");
      break;
    case "wrong_otv_1_2":
    case "wrong_otv_1_3":
    case "wrong_otv_1_4":
      counter++;
      hideElement("#question1");
      break;

    case "right_otv_2_3": // Выбор ответа на Вопрос 2
      counter++;
      summ++;
      hideElement("#question2");
      break;
    case "wrong_otv_2_1":
    case "wrong_otv_2_2":
    case "wrong_otv_2_4":
      counter++;
      hideElement("#question2");
      break;

    case "right_otv_3_3": // Выбор ответа на Вопрос 3
      counter++;
      summ++;
      hideElement("#question3");
      break;
    case "wrong_otv_3_1":
    case "wrong_otv_3_2":
    case "wrong_otv_3_4":
      counter++;
      hideElement("#question3");
      break;

    case "right_otv_4_2": // Выбор ответа на Вопрос 4
      counter++;
      summ++;
      hideElement("#question4");
      break;
    case "wrong_otv_4_1":
    case "wrong_otv_4_3":
    case "wrong_otv_4_4":
      counter++;
      hideElement("#question4");
      break;

    case "right_otv_5_2": // Выбор ответа на Вопрос 5
      counter++;
      summ++;
      hideElement("#question5");
      break;
    case "wrong_otv_5_1":
    case "wrong_otv_5_3":
    case "wrong_otv_5_4":
      counter++;
      hideElement("#question5");
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
