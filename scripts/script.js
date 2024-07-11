// SELEÇÃO DOS ELEMENTOS DO DOM
let activity = document.querySelector('input#idActivity').value
let date = document.querySelector('input#idDate').value
let time = document.querySelector('input#idTime').value
let button = document.querySelector('input#btn')
let activityList = document.querySelector('section#activityList')

// FUNÇÃO PARA FORMATAR DATA PARA O FORMATO DD/MM/AAAA
let dateFormatted = (data) => {
    // OBJETO DATE PASSANDO COMO DADO O PARAMÊTRO DA FUNÇÃO
    let dateObject = new Date(data)

    // FORMATAÇÃO DOS DIAS, MESES E ANOS SEPARADAMENTE
    // O + 1 EM "getDate()" E "getMonth()" É USADO POIS A CONTAGEM DOS DIAS E MESES INICIA EM 0 (PADRÃO)
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


    activityList.innerHTML = `${activity}, ${dateFormatted(date)} ${time}`
})
















