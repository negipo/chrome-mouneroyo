var nowHour = (new Date()).getHours();
if (0 <= nowHour && nowHour <= 7) {
  window.addEventListener('load', function() {
    document.getElementById('mouneroyo').style.display = 'block';
    document.getElementById('audio').play();
  }, false);
}
