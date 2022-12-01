const data = new Date();
const diaSemana = data.getDay();
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = zeroAEsquerda(data.getHours());
const min = zeroAEsquerda(data.getMinutes());



let diaSemanaTexto;
//Convertendo dia da semana para texto
switch(diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda-Feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-Feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta-Feira';
        break;
    case 4:
        diaSemanaTexto = 'Quinta-Feira';
        break;
    case 5:
        diaSemanaTexto = 'Sexta-Feira';
        break;
    case 6:
        diaSemanaTexto = 'Sabado';
        break;        
}

//Convertendo mes para texto
let mesTexto;

switch(mes){
    case 0:
        mesTexto = 'Janeiro';
        break;
    case 1:
        mesTexto = 'Fevereiro';
        break;
    case 2:
        mesTexto = 'Março';
        break;
    case 3:
        mesTexto = 'Abril';
        break;
    case 4:
        mesTexto = 'Maio';
        break;
    case 5:
        mesTexto = 'Junho';
        break;
    case 6:
        mesTexto = 'Julho';
        break;
    case 7:
        mesTexto = 'Agosto';
        break;
    case 8:
        mesTexto = 'Setembro';
        break;
    case 9:
        mesTexto = 'Outubro';
        break;
    case 10:
        mesTexto = 'Novembro';
        break;
    case 11:
        mesTexto = 'Dezembro';
        break;    
}

//adiciona 0 a esquerda no horario quando o número for menor que 10
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}` 
}


const resultado = document.querySelector('.data');
resultado.innerHTML = `${diaSemanaTexto}, ${dia} ${mesTexto} de ${ano} ${hora}:${min}`