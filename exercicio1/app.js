'use strict'

const nota1 = document.getElementById('nota1')
const nota2 = document.getElementById('nota2')
const calcular = document.getElementById('calcular')
const media = document.getElementById('media')
const formulario = document.getElementById('formulario')

function calcularMedia (){
    media.value = (parseInt(nota1.value) + Number(nota2.value))/2

    if(med){

    }
}

calcular.addEventListener('click', calcularMedia)

