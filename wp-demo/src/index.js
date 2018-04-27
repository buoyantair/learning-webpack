import _ from 'lodash';
import './style.css';
import mountainsImage from './mountains.jpg';
import Data from './data.xml';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

   // Add the image to our existing div.
  var mountains = new Image();
  mountains.src = mountainsImage;
  mountains.height = 500;
  mountains.width = 600;

  element.appendChild(mountains);

  console.log(Data);

  return element;
}

document.body.appendChild(component());