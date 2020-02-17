'use strict';


let state = {};

let button = document.getElementById('clicker');
button.addEventListener('click', handleClick);

let input = document.getElementById('wordsInput');
input.addEventListener('change', handleWords);

function handleWords(event) {
  state.words = event.target.value;
}

function handleClick(event) {
  event.preventDefault();
  state.clicks++;
  state.words = state.words
    .split('')
    .reverse()
    .join('');


  render();
}

function render(){

  document.getElementById('words').textContent = state.words;
  document.getElementById('clickcount').textContent = state.clicks;
}

function init() {

  state.clicks = 0;
  state.words = 'nothing to see here';
  render();
}

init();
