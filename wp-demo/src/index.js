import { cube, square } from './math';
import './style.css';

function component() {
  var element = document.createElement('div');
  element.innerHTML = `gay as webpack = ${cube(50)}%`;
  element.appendChild(btn);
  console.log(cube(50), square(15), square(3));
  return element;
}

let element = component();
document.body.appendChild(element);
