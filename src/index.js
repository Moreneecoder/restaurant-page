import _ from 'lodash';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoBello from './mobello.jpg';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('text-success');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = MoBello;

    element.appendChild(myIcon);

    return element;
  }
  
  document.body.appendChild(component());