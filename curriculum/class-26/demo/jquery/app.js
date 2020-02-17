let state = {};

let source = document.getElementById('stuff-template').innerHTML;
let template = Handlebars.compile(source);

$('#clicker').on('click', handleClick);
$('#wordsInput').on('change', handleWords);

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

function init() {

  state.clicks = 0;
  state.words = 'nothing to see here';
  render();
}

function render() {
  $('#stuff').html(template(state));
}

init();
