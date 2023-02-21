let start = document.querySelectorAll('.start');

for (let i=0; i<start.length; i++) {
  start[i].onclick = function() {
    location.reload();
  }
}

let buttons = document.querySelectorAll('button'); 

for (let i=0; i<buttons.length; i++) {
  buttons[i].onclick = function(event) {
    document.querySelector('.first').classList.add('hide');
    document.querySelector('.first').classList.remove('first');
    document.querySelector(`#${event.target.getAttribute('data-num')}`).classList.remove('hide');
    document.querySelector(`#${event.target.getAttribute('data-num')}`).classList.add('first');
  }
} 