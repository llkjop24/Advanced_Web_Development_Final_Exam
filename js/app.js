console.log('my-note app.js');

window.onload = function (ev) {
    text = document.getElementById('memo').value = localStorage.getItem('text');
}

newBtn = document.querySelector('.btn-newnote');

console.log(newBtn);

newBtn.addEventListener('click', function() {
    document.getElementById('memo').value = '';
})

saveBtn = document.querySelector('.btn-savenote');

saveBtn.addEventListener('click', function() {
    localStorage.text = document.getElementById('memo').value;
})


