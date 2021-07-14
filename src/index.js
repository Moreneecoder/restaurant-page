function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // const myIcon = new Image();
    // myIcon.src = Icon;

    // element.appendChild(myIcon);
    
    // const paragraph = document.createElement('p');
    // paragraph.innerHTML = 'Check am find!'
    // element.appendChild(paragraph)

    // const paragraph2 = document.createElement('p');
    // paragraph2.innerHTML = 'Who dey zuzuzu!'
    // element.appendChild(paragraph2)

    // console.log(Data);
    // console.log(Notes);

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
  
    return element;
  }
  
  document.body.appendChild(component());