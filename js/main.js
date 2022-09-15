const primero = document.querySelector('#primero');
const segundo = document.querySelector('#segundo');
const btncalcular = document.querySelector('#btncalcular');
const resultado = document.querySelector('#resultado');
btncalcular.addEventListener('click', calcular);
function calcular(){
 let resultadorprimario = Number(primero.value) + Number(segundo.value)
 
 return resultado.append(resultadorprimario);
}