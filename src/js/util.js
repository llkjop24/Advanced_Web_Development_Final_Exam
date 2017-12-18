
about = document.querySelector('.about');

var setMemo = function () {
  document.getElementById('memo').value = '';
};

var saveMemo = function() {
  localStorage.text = document.getElementById('memo').value;
};


var downloadMemo = function () {
  var blob = new Blob([document.getElementById('memo').value], {type: "text/plain;charset=utf-8"});
  saveAs(blob, "text.txt");
};


var displayOn = function () {
  about.style.display = "block";
};

var displayOff = function() {
  about.style.display = "none";
};

var screenFull = function() {
  if(screenfull.enabled){
    screenfull.request();
  }else {
    console.log('전체화면이 안되요');
  }
};
