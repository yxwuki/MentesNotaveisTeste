//desculpa, não sei tanto js 
const div = document.querySelector('#div');
const mult = document.querySelector('#mult');
const min = document.querySelector('#min');
const sum = document.querySelector('#sum');
const buttons = document.querySelector('.buttons');
const calculator = documento.querySelector('.calculator')


function calculate(n1, op, n2){
    if(op === 'div'){
        result = n1 / n2
    }
    else if (op === 'mult'){
        result = n1 / n2
    }
    else if (op === 'min'){
        result = n1 - n2
    }
    else if (op === 'sum'){
        result = n1 + n2
    }
}

//buttons.addEventListener('click'){ }
