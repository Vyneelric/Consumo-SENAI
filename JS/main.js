'use strict'

import { getContatos, getContatosPorNome } from "./contatos.js"


function criarCard(contato){
    const container = document.getElementById('container')

    const novaDiv = document.createElement('div')
    novaDiv.classList.add('cardContato')
    novaDiv.innerHTML = `
                <img src="${contato.foto}" alt="avatar">
                <h2>${contato.nome}</h2>
                <p>${contato.celular}</p>`

    container.appendChild(novaDiv)
}

async function exibirContatos(){
    const contatos = await getContatos()
    contatos.forEach(criarCard)
}

async function exibirPesquisa(evento){
    const container = document.getElementById('container')


    if(evento.key == 'Enter'){
        const contatos = await getContatosPorNome(evento.target.value)
        container.replaceChildren()
        contatos.forEach(criarCard)   

    }
}

exibirContatos()

document.getElementById('nomeContato')
        .addEventListener('keydown', exibirPesquisa)