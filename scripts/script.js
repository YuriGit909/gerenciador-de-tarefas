// SELEÇÃO DOS ELEMENTOS DO DOM
let activity = document.querySelector('input#idActivity').value
let date = document.querySelector('input#idDate').value
let time = document.querySelector('input#idTime').value
let button = document.querySelector('input#btn')
let activityList = document.querySelector('section#activityList')
let remove = document.querySelector('p#pRemove')
let activityItem = []

// FUNÇÃO PARA FORMATAR DATA PARA O FORMATO DD/MM/AAAA
let dateFormatted = (data) => {
    // OBJETO DATE PASSANDO COMO DADO O PARAMÊTRO DA FUNÇÃO
    let dateObject = new Date(data)

    // FORMATAÇÃO DOS DIAS, MESES E ANOS SEPARADAMENTE
    // O "+ 1" EM "getDate()" E "getMonth()" É USADO PORQUE A CONTAGEM DOS DIAS E MESES INICIA EM 0 (PADRÃO)
    let day = (dateObject.getDate() + 1).toString().padStart(2, '0')
    let month = (dateObject.getMonth() + 1).toString().padStart(2, '0')
    let year = dateObject.getFullYear()

    // RETORNO DOS DADOS
    return `${day}/${month}/${year}`
}

// FUNÇÃO PARA EXECUÇÃO DAS AÇÕES ATRAVÉS "click" DO BOTÃO
button.addEventListener('click', () => {
    // ATUALIZAÇÃO DOS DADOS DOS SELETORES PÓS-FUNÇÃO
    activity = document.querySelector('input#idActivity').value
    date = document.querySelector('input#idDate').value
    time = document.querySelector('input#idTime').value

    if (activity.length == 0) {
        window.alert('Preencha o campo com uma atividade')
    } else {

        // FUNÇÃO PARA VERIFICAR EXISTÊNCIA DE UMA ATIVIDADE NO MESMO DIA E HORÁRIO DE OUTRA
        let activityExist = activityItem.some(item => {
            return item.date === date && item.time === time
        })

        // VERIFICA SE A ATIVIDADE EXISTE CHAMANDO A FUNÇÃO activityExist()
        if(activityExist){
            window.alert('O horário desta data já foi preenchido por outra atividade.')
        } else {

            // JOGA OS DADOS DE ENTRADA EM UM OBJETO QUE ESTÁ CONTIDO NO ARRAY
            activityItem.push({
                activity: activity,
                date: date,
                time: time,
            })

            // EXIBIÇÃO DOS DADOS 
            // ADICIONAR FUNÇÃO PARA REMOVER O "p" DO HTML
            activityList.innerHTML += `
            <div id='itemList'>
                <p>${activity}</p>
                <div id='dateMobile'>
                    <p>${dateFormatted(date)} <br> às ${time}h</p>
                </div>
                <div id='datePC'>
                    <p>Dia ${dateFormatted(date)}, às ${time}h</p>
                </div>
            </div>
            `
        }
    }
     

})

















