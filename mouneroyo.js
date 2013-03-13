var nowHour = (new Date()).getHours();
window.addEventListener('load', function() {
  if (0 <= nowHour && nowHour <= 7) {
    document.getElementsByTagName('title')[0].innerHTML = 'もう寝ろよ';
    document.getElementById('mouneroyo').style.display = 'block';
    document.getElementById('audio').play();
  } else {
    document.getElementById('madanenakuteii').style.display = 'block';
  }
}, false);
