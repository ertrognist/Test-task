const input = document.querySelector('#inputBtn'),
  btn = document.querySelector('#button');
      
  btn.addEventListener('click',(e) => {
  e.preventDefault();
  createElementDom();
});
 
function createElementDom() {
  const form = document.querySelector('form');
  const div = document.createElement('div');
  const inputText = input.value.split('');
  input.value = '';
 
  div.classList.add('canc');
  form.insertAdjacentElement('afterend', div);
  createSpanAndText(div, inputText)
 
  let bodyChildren = document.body.children;
  deleteElement([...bodyChildren]);
}
 
function deleteElement(elements) {
  elements.forEach(element => {
    const nextDivCanc = element.nextElementSibling;
    if (element.nodeName === 'DIV' && element.className === 'canc' && nextDivCanc !== null){     
      nextDivCanc.remove();
    }
  });
}
 
function createSpanAndText(element, textArr) {
  const fragment = document.createDocumentFragment();
    textArr.forEach(word => {
      const span = document.createElement('span');
      span.textContent = word;
      fragment.appendChild(span);
 
      grabWord(element, span)
    });
 
  element.appendChild(fragment); 
}
 
 
function grabWord(descContainer, wordElement) {
  
  wordElement.addEventListener('click', e => {
  
    const word = e.target;
    word.classList.add('position');
    const container = document.querySelector('.canc');
   
    
    let listener = (e) => {
      word.style.top = `${e.layerY}px`;
      word.style.left = `${e.layerX}px`;
      
      
    }
    container.addEventListener('mousemove', listener, false);
   
    descContainer.addEventListener('click', (e) => {
      if(e.target.nodeName === 'DIV') {
        container.removeEventListener('mousemove', listener, false);
    }
    });
});
}



















    // document.querySelector('button').addEventListener('click', button_1);

    // function button_1() {
     
    //   let z =  document.querySelector('.input_0').value;
    //   console.log(z);
    //   document.querySelector('.conclusion').innerHTML += z;
     
    // }

    
    
  