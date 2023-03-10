'use strict'

const adicionar = document.getElementById('add')

// const adicionarCard = () => {
//     const container = document.getElementById('container')
//     container.innerHTML += '<div class="items"><div>'   
// }

const adicionarCard = (aluno) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    let status = ""

    if(aluno =="" || nota ==""){
        alert('Erro: Preencha todos os campos!')
    } else if (isNaN(nota)) {
        alert('Erro: Digite um Número') 
    } else if(nota < 0 || nota > 10) {
        alert('Erro: Insira as notas de 0 à 10')
    } else {
        if (nota >= 5) {
            status = "aprovado"
        }
        else {
            status = "reprovado"
        }
    }

    novaDiv.classList.add('aluno', status)
    novaDiv.innerHTML = `<h2 class="aluno__title">
                        ${aluno.nome}
                    </h2>
                    
                    <p class="aluno__nota">
                    ${aluno.nota}
                    </p>`

    container.appendChild(novaDiv)
}

const hadleClick = () => {

    const aluno ={
        nome: prompt('Digite o nome do aluno:'),
        nota: prompt('Digite a nota do aluno:')
    }

    // const nomeAluno = prompt('Digite o nome do aluno:')
    // const notaAluno = prompt('Digite a nota do aluno:')

    adicionarCard(aluno)
}

adicionar.addEventListener('click', hadleClick)

//pesquisar : solid - responsabilidade unica / funções puras
