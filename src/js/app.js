console.log('my-note app.js');

newBtn = document.querySelector('.btn-newnote');
saveBtn = document.querySelector('.btn-savenote');
downloadBtn = document.querySelector('.btn-download');
aboutBtn = document.querySelector('.btn-about');
closeBtn = document.getElementById('close');
fullscreenBtn = document.querySelector('.btn-fullscreen');



window.onload = function (ev) {
    text = document.getElementById('memo').value = localStorage.getItem('text');
};


newBtn.addEventListener('click', setMemo);

saveBtn.addEventListener('click', saveMemo);

downloadBtn.addEventListener('click', downloadMemo);

fullscreenBtn.addEventListener('click', screenFull);

aboutBtn.addEventListener('click',displayOn);

closeBtn.addEventListener('click',displayOff);
