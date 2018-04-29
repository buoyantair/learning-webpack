import printMe from './print';
import './style.css';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = 'gay as webpack';
  
  btn.innerHTML = 'Summon the printer!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepted updated module');
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}