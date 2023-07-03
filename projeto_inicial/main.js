// como criar um bloqueador JavaScript IIFE 
// de eu preciso criar uma função e c
//olocar meus eventos dentro dessa função começando pelo primeiro parenteses em amarelo.

    import BotaoConclui from './componentes/concluiTarefa.js'
    import BotaoDeleta from './componentes/deletaTarefa.js'
    //eventos
    const criarTarefa = (evento) => {

        evento.preventDefault()
    
        const lista  = document.querySelector ('[data-list]') 
        const input = document.querySelector ('[data-form-input]')
        const valor = input.value
    
        const tarefa = document.createElement ('li') //create element cria uma tarefa, ai preciso passar os parametros para criar essa terefa
        tarefa.classList.add ('task')
    
        const conteudo =`<p class= 'content'> ${valor} </p>`
    
        tarefa.innerHTML = conteudo
       
        tarefa.appendChild (BotaoConclui ())
        tarefa.appendChild (BotaoDeleta ())
        lista.appendChild (tarefa)
        input.value = ' ' // esse campo limpa o imnput
    }
    const novaTarefa = document.querySelector('[data-form-button]')
    
    novaTarefa.addEventListener ('click', criarTarefa)
    
    
            


    


