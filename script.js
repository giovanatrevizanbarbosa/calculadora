var number1 = document.getElementById('1');
var number2 = document.getElementById('2');
var number3 = document.getElementById('3');
var number4 = document.getElementById('4');
var number5 = document.getElementById('5');
var number6 = document.getElementById('6');
var number7 = document.getElementById('7');
var number8 = document.getElementById('8');
var number9 = document.getElementById('9');
var number0 = document.getElementById('0');

var limpar = document.getElementById('limpar');
var calcular = document.getElementById('calcular');

var somar = document.getElementById('soma');
var subtrair = document.getElementById('subtracao');
var dividir = document.getElementById('divisao');
var multiplicar = document.getElementById('multiplicacao');

var tela = document.getElementById('tela-texto');

var calculo = [];
var i = 0;

var operator = '';
var result = 0;

tela.textContent = '';

number1.addEventListener('click', function () {
    if (tela.textContent === 'Erro' || result !== 0) {
        tela.textContent = '1';
        calculo = [1];
        i = 1;
        result = 0;
    } else {
        tela.textContent += '1';
        calculo[i] = 1;
        i++;
    }
});
number2.addEventListener('click', function () {
    if (tela.textContent === 'Erro' || result !== 0) {
        tela.textContent = '2';
        calculo = [2];
        i = 1;
        result = 0;
    } else {
        tela.textContent += '2';
        calculo[i] = 2;
        i++;
    }
}
);
number3.addEventListener('click', function () {
    if (tela.textContent === 'Erro' || result !== 0) {
        tela.textContent = '3';
        calculo = [3];
        i = 1;
        result = 0;
    } else {
        tela.textContent += '3';
        calculo[i] = 3;
        i++;
    }
}
);
number4.addEventListener('click', function () {
    if (tela.textContent === 'Erro' || result !== 0) {
        tela.textContent = '4';
        calculo = [4];
        i = 1;
        result = 0;
    } else {
        tela.textContent += '4';
        calculo[i] = 4;
        i++;
    }
}
);
number5.addEventListener('click', function () {
    if (tela.textContent === 'Erro' || result !== 0) {
        tela.textContent = '5';
        calculo = [5];
        i = 1;
        result = 0;
    } else {
        tela.textContent += '5';
        calculo[i] = 5;
        i++;
    }
}
);
number6.addEventListener('click', function () {
    if (tela.textContent === 'Erro' || result !== 0) {
        tela.textContent = '6';
        calculo = [6];
        i = 1;
        result = 0;
    } else {
        tela.textContent += '6';
        calculo[i] = 6;
        i++;
    }
}
);
number7.addEventListener('click', function () {
    if (tela.textContent === 'Erro' || result !== 0) {
        tela.textContent = '7';
        calculo = [7];
        i = 1;
        result = 0;
    } else {
        tela.textContent += '7';
        calculo[i] = 7;
        i++;
    }
}
);
number8.addEventListener('click', function () {
    if (tela.textContent === 'Erro' || result !== 0) {
        tela.textContent = '8';
        calculo = [8];
        i = 1;
        result = 0;
    } else {
        tela.textContent += '8';
        calculo[i] = 8;
        i++;
    }
}
);
number9.addEventListener('click', function () {
    if (tela.textContent === 'Erro' || result !== 0) {
        tela.textContent = '9';
        calculo = [9];
        i = 1;
        result = 0;
    } else {
        tela.textContent += '9';
        calculo[i] = 9;
        i++;
    }
}
);
number0.addEventListener('click', function () {
    if (tela.textContent === 'Erro' || result !== 0) {
        tela.textContent = '0';
        calculo = [0];
        i = 1;
        result = 0;
    } else {
        tela.textContent += '0';
        calculo[i] = 0;
        i++;
    }
}
);
limpar.addEventListener('click', function(){
    tela.textContent = '';
    calculo = [];
    i = 0;
}
);
somar.addEventListener('click', function () {
    operator = '+';
    calculo.push('+');
    i++;
    tela.textContent += '+';
});
subtrair.addEventListener('click', function () {
    operator = '-';
    calculo.push('-');
    i++;
    tela.textContent += '-';
});
multiplicar.addEventListener('click', function () {
    operator = '*';
    calculo.push('*');
    i++;
    tela.textContent += '*';
});
dividir.addEventListener('click', function () {
    operator = '/';
    calculo.push('/');
    i++;
    tela.textContent += '/';
});
calcular.addEventListener('click', function () {
    var expression = calculo.join('');
    try{
        result = eval(expression);
        tela.textContent = result;
    }catch(error){
        tela.textContent = 'Erro';
    }
    calculo = [];
    i = 0;
    operator = '';
});