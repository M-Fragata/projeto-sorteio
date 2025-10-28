//Variáveis globais
const sortear = document.querySelector('input#sortear')
const res = document.querySelector('div#res')
const buttonCheck = document.querySelector('input#buttonCheck')
const repetir = document.querySelector('input#repetir')

//Ocultar
const texto = document.querySelector('section#texto')
const blocos = document.querySelector('section#blocos')
const buttonRepeat = document.querySelector('div#buttonRepeat')

//Evento para quando clicar em sortear
sortear.addEventListener('click', () => {

    repetir.style.display = "block"
    sortear.style.display = "none"
    buttonRepeat.style.display = "none"
    texto.style.display = "none"
    blocos.style.display = "none"

    //Pegando valor inserido na quantidade de números
    const num = Number(document.querySelector('input#number').value)
    //Pegando valor de quanto
    const de = Number(document.querySelector('input#de').value)
    //Pegando valor até quanto
    const ate = Number(document.querySelector('input#ate').value)

    //Criando um array
    let numeros = []

    numeroAleatorio()


        function numeroAleatorio() {
            for (let i = 0; i < num; i++) {
                //Criando uma div
                const newDiv = document.createElement('div')
                newDiv.classList.add("aleatorio")
                //Criando uma variavel para receber o valor aleatório e transformar em numero
                let valorDiv = randomInt(ate, de)

                //Inserindo o valor aleatório no último lugar do array
                numeros.push(valorDiv)

                //Conferindo se o botão de repetir está marcado ou não
                if (buttonCheck.checked) {
                    console.log("Marcado!")

                    //Criando uma variavel para verificar se o valor repete
                    const repeticoes = numeros.filter(n => n === valorDiv).length
                    //Caso esteja marcado, irá conferir se o número repetiu, caso tenha se repetido irá retirar do array
                    if (repeticoes > 1) {
                        console.log(`${valorDiv} Repetiu`)
                        numeros.pop()
                        numeroAleatorio()

                        //Caso contrário irá mostrar para o usuário o ultimo numero do array
                    } else {
                        newDiv.textContent = numeros[numeros.length - 1]
                        res.append(newDiv)
                    }
                    //Caso botão não esteja marcado, irá poder repetir os números
                } else {
                    console.log("Não marcado!")

                    newDiv.textContent = numeros[numeros.length - 1]
                    res.append(newDiv)
                }

            }
        }

    })


repetir.addEventListener('click', () => {
    repetir.style.display = "none"

    sortear.style.display = ""
    buttonRepeat.style.display = ""
    texto.style.display = ""
    blocos.style.display = ""
})

//Função para calcular valor aleatório no range que o usuário criou.
function randomInt(max, min) {

    let aleatorio = Number(Math.floor(Math.random() * max))
    console.log(aleatorio)
    if (aleatorio < min) {
        return aleatorio + min
    } else if (aleatorio > max) {
        return aleatorio - max + min
    } else {
        return aleatorio
    }
}

