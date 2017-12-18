console.log('my-note app.js');

newBtn = document.querySelector('.btn-newnote');
saveBtn = document.querySelector('.btn-savenote');
downloadBtn = document.querySelector('.btn-download');
aboutBtn = document.querySelector('.btn-about');
closeBtn = document.getElementById('close');
fullscreenBtn = document.querySelector('.btn-fullscreen');    //버튼 객체로 가지고 오기



window.onload = function (ev) {
    text = document.getElementById('memo').value = localStorage.getItem('text');  //시작할때 이전에 저장한 내용 불러오기
};


newBtn.addEventListener('click', setMemo);

saveBtn.addEventListener('click', saveMemo);

downloadBtn.addEventListener('click', downloadMemo);

fullscreenBtn.addEventListener('click', screenFull);

aboutBtn.addEventListener('click',displayOn);

closeBtn.addEventListener('click',displayOff);
