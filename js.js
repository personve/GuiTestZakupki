function progress() {
  var width = 100;
  var elem = document.getElementById("progress_line");
  var time1 = Math.round((5 * 1000) / 100);
  var id = setInterval(progressStatus, time1);
  
  function progressStatus() {
    if (width == 0) {
      clearInterval(id);
      hidden();
     
    }
    // else if (нажимаем кнопку с правильным ответом) {
    //   clearInterval(id);
    //   добавляем +1 к итоговому результату за тест
    //   hidden();
    // }
    
    else {
      width--;
      elem.style.width = width + '%';
    }
  }
}

function hidden(){
document.querySelector('.que').style.display = "none";
}
progress();

