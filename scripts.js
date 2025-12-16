const converterBotao = document.querySelector('.converterBotao')
const selectConversor = document.querySelector('.select-conversor')

function converterValores() {
    const inputMoedaValor = document.querySelector('.input-moeda').value
    const dolarDoDia = 5.2
    const euroDoDia = 6.2
    const libraDoDia = 7.3
    const converterValorConvertido = document.querySelector('.moeda-valor-convertida')
    const converterValor = document.querySelector('.moeda-valor')

    console.log(selectConversor.value)


    if (selectConversor.value == "dolar") {
        converterValor.innerHTML =  new Intl.NumberFormat("en-US", {
        style: 'currency',
        currency: "USD"
    }).format(inputMoedaValor / dolarDoDia)
    }

        if (selectConversor.value == "libra") {
        converterValor.innerHTML =  new Intl.NumberFormat("GPB", {
        style: 'currency',
        currency: "GPB"
    }).format(inputMoedaValor / libraDoDia)
    }

    if (selectConversor.value == "euro") {
        converterValor.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
        }).format(inputMoedaValor / euroDoDia)
    }

    converterValorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: 'currency',
        currency: "BRL"
    }).format(inputMoedaValor)


}

function changeConversor(){
    const conversorMoeda = document.getElementById('moeda')
    const conversorImg = document.querySelector('.img')

    if ( selectConversor.value == 'dolar') {
        conversorMoeda.innerHTML = 'Dólar'
        conversorImg.src = './assets/dolar.png'
    }

    if ( selectConversor.value == 'euro') {
        conversorMoeda.innerHTML = 'Euro'
        conversorImg.src = './assets/euro.png'
    }

     if ( selectConversor.value == 'libra') {
        conversorMoeda.innerHTML = 'Libra'
        conversorImg.src = './assets/libra.png'
    }

    converterValores()
}

selectConversor.addEventListener('change', changeConversor)
converterBotao.addEventListener('click',converterValores )