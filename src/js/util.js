
about = document.querySelector('.about');  //프로그램 정보

var setMemo = function () {
  document.getElementById('memo').value = '';  //메모 초기화
};

var saveMemo = function() {
  localStorage.text = document.getElementById('memo').value;  //메모내용 로컬 저장소 저장
};


var downloadMemo = function () {
  var blob = new Blob([document.getElementById('memo').value], {type: "text/plain;charset=utf-8"}); // 메모 내용 다운로드
  saveAs(blob, "text.txt");
};


var displayOn = function () {
  about.style.display = "block"; //프로그램 정보 나타내기
};

var displayOff = function() {
  about.style.display = "none";  //프로그램 정보 안보이게 하기
};

var screenFull = function() {
  if(screenfull.enabled){
    screenfull.request();       //전체 화면
  }else {
    console.log('전체화면이 안되요');
  }
};
