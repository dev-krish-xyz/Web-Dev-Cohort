const equal = document.querySelector('.equal');

const buttons = document.querySelectorAll('[data-value]');

const display = document.querySelector('.display');
display.textContent ='0';
const result = document.querySelector('.result');

const acbtn = document.querySelector('.acbtn');
const delback = document.querySelector('.delback');


function appendDisplay (value){
    if(display.textContent === '0'){
        display.textContent = value;
    }
    else{
        display.textContent += value;
    }
}

buttons.forEach(button => {
   button.addEventListener('click', ()=>{
       appendDisplay(button.dataset.value);
       adjustFont();
   })
})

equal.addEventListener('click',()=> {
   let evaluation = eval(display.textContent);
    result.textContent = evaluation;
})

acbtn.addEventListener('click', ()=>{
    display.textContent ='0';
    result.textContent ='';
    adjustFont();
})
delback.addEventListener('click',()=>{
    display.textContent = display.textContent.slice(0,-1);
    adjustFont();
})

const displaycontainer = document.querySelector('.display-box');
// function adjustFont(){
//     const containerwidth = displaycontainer.clientWidth;
//     const textwidth = display.scrollWidth;
//     const percent = (textwidth/containerwidth)*100;

//     if(percent<50){
//         display.style.fontSize = '1.7rem';
//     }
//     else if(percent>=50 && percent <100){
//         display.style.fontSize = '1.2rem';
//     }
//     else if(percent >=100){
//         display.style.fontSize ='1rem';
//     }

// }

function adjustFont() {
  requestAnimationFrame(() => {
    const maxFontSize = 2.3;
    const minFontSize = 1.0;

    const computed = getComputedStyle(display);
    let lineHeight = computed.lineHeight;

    if (lineHeight === 'normal') {
      const fontSize = parseFloat(computed.fontSize);
      lineHeight = fontSize * 1.2;
    } else {
      lineHeight = parseFloat(lineHeight);
    }

    const scrollHeight = display.scrollHeight;

    const linesUsed = scrollHeight / lineHeight;

    console.log(`linesUsed: ${linesUsed}, scrollHeight: ${scrollHeight}, lineHeight: ${lineHeight}`);

    let scale = 1;
    if (linesUsed <= 1) {
      scale = 1;
    } else if (linesUsed <= 2) {
      scale = 0.75;
    } else {
      scale = 0.6;
    }

    const fontSize = Math.max(minFontSize, maxFontSize * scale);
    display.style.fontSize = `${fontSize.toFixed(2)}rem`;
  });
}




