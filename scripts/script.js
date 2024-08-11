// SELEÇÃO DOS ELEMENTOS DO DOM
let button = document.querySelector('input#btn')
let activityList = document.querySelector('section#activityList')
let remove = document.querySelector('p#pRemove')
let activityItem = []

// FUNÇÃO PARA FORMATAR DATA PARA O FORMATO DD/MM/AAAA
let dateFormatted = (data) => {
    let dateObject = new Date(data)
    let day = (dateObject.getDate()).toString().padStart(2, '0')
    let month = (dateObject.getMonth() + 1).toString().padStart(2, '0')
    let year = dateObject.getFullYear()
    return `${day}/${month}/${year}`
}

// FUNÇÃO PARA EXECUÇÃO DAS AÇÕES ATRAVÉS "click" DO BOTÃO
button.addEventListener('click', () => {
    // ATUALIZAÇÃO DOS DADOS DOS SELETORES PÓS-FUNÇÃO
    let activity = document.querySelector('input#idActivity').value
    let date = document.querySelector('input#idDate').value
    let time = document.querySelector('input#idTime').value

    if (activity.length === 0 || date === '' || time === '') {
        window.alert('Preencha todos os campos para salvar uma atividade')
    } else {
        // FUNÇÃO PARA VERIFICAR EXISTÊNCIA DE UMA ATIVIDADE NO MESMO DIA E HORÁRIO DE OUTRA
        let activityExist = activityItem.some(item => item.date === date && item.time === time)

        // CONDIÇÃO PARA REMOVER O ELEMENTO "p" COM O AVISO DE "Nenhuma atividade cadastrada."
        if (remove.parentNode) {
            remove.parentNode.removeChild(remove)
        }

        // VERIFICA SE A ATIVIDADE EXISTE CHAMANDO A FUNÇÃO activityExist()
        if(activityExist) {
            window.alert('O horário desta data já foi preenchido por outra atividade.')
        } else {
            // CRIA O CHECKBOX
            let inputCheck = document.createElement('input')
            inputCheck.type = 'checkbox'

            // JOGA OS DADOS DE ENTRADA EM UM OBJETO QUE ESTÁ CONTIDO NO ARRAY
            activityItem.push({
                activity: activity,
                date: date,
                time: time,
                inputCheck: inputCheck,
            })

            // EXIBIÇÃO DOS DADOS 
            let divItem = document.createElement('div')
            divItem.id = 'itemList'
            divItem.appendChild(inputCheck)

            let pActivity = document.createElement('p')
            pActivity.textContent = activity
            pActivity.id = 'pActivity'
            divItem.appendChild(pActivity)

            let divDateMobile = document.createElement('div')
            divDateMobile.id = 'dateMobile'
            divDateMobile.className = 'date'
            divDateMobile.innerHTML = `<p>${dateFormatted(date)} <br> às ${time}h</p>`
            divItem.appendChild(divDateMobile)

            let divDatePC = document.createElement('div')
            divDatePC.id = 'datePC'
            divDatePC.className = 'date'
            divDatePC.innerHTML = `<p>Dia ${dateFormatted(date)}, às ${time}h</p>`
            divItem.appendChild(divDatePC)

            // ADICIONA A NOVA ATIVIDADE DA LISTA ANTES DAS JÁ EXISTENTES (com o método pretend())
            activityList.prepend(divItem)
        }
    }
})
