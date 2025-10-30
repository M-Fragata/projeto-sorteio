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

    //Pegando valor inserido na quantidade de números
    const num = Number(document.querySelector('input#number').value)
    //Pegando valor de quanto
    const de = Number(document.querySelector('input#de').value)
    //Pegando valor até quanto
    const ate = Number(document.querySelector('input#ate').value)

    if (num === "" || de === "" || ate === "") {
        alert("[ERRO] Valor vazio!")
        return
    } else if (num < 0 || de < 0 || ate < 0) {
        alert("[ERRO] Valores negativos não são aceitos!")
        return
    } else if (de > ate) {
        alert("[ERRO] Valor inválido!")
        return
    } else if (num == 0) {
        alert('[ERRO] Insira um valor para "Números" maior que 0!')
        return
    }

    res.style.height = "50dvh"

    repetir.style.display = "block"
    sortear.style.display = "none"
    buttonRepeat.style.display = "none"
    texto.style.display = "none"
    blocos.style.display = "none"

    //Criando um array
    let numeros = []

    function mostrarComEfeito(newDiv, valorFinal, min, max) {
        let contador = 0;
        const intervalo = setInterval(() => {
            // Mostra números aleatórios rapidamente
            newDiv.textContent = randomInt(min, max);
            contador++;

            // Após ~1,5s, para e mostra o valor final
            if (contador > 15) {
                clearInterval(intervalo);
                newDiv.textContent = valorFinal;
            }
        }, 100);
    }



    function numeroAleatorio() {
        for (let i = 0; i < num; i++) {
            //Criando uma div
            const newDiv = document.createElement('div')
            newDiv.classList.add("aleatorio")
            //Criando uma variavel para receber o valor aleatório e transformar em numero
            let valorDiv = randomInt(de, ate)

            //Inserindo o valor aleatório no último lugar do array
            numeros.push(valorDiv)

            //Conferindo se o botão de repetir está marcado ou não
            if (buttonCheck.checked) {
                console.log("Marcado!")

                //Criando uma variavel para verificar se o valor repete
                const repeticoes = numeros.filter(n => n === valorDiv).length
                //Caso esteja marcado, irá conferir se o número repetiu, caso tenha se repetido irá retirar do array
                if (repeticoes > 1) {
                    numeros.pop()
                    numeroAleatorio()

                    //Caso contrário irá mostrar para o usuário o ultimo numero do array
                } else {
                    res.append(newDiv);
                    mostrarComEfeito(newDiv, numeros[numeros.length - 1], de, ate);

                }
                //Caso botão não esteja marcado, irá poder repetir os números
            } else {
                res.append(newDiv);
                mostrarComEfeito(newDiv, numeros[numeros.length - 1], de, ate);

            }

        }
    }

    numeroAleatorio()

})


repetir.addEventListener('click', () => {
    repetir.style.display = "none"

    res.innerHTML = ""

    sortear.style.display = ""
    buttonRepeat.style.display = ""
    texto.style.display = ""
    blocos.style.display = ""

    //Pegando valor inserido na quantidade de números
    const num = (document.querySelector('input#number'))
    num.value = ""
    //Pegando valor de quanto
    const de = (document.querySelector('input#de'))
    de.value = ""
    //Pegando valor até quanto
    const ate = (document.querySelector('input#ate'))
    ate.value = ""

})

//Função para calcular valor aleatório no range que o usuário criou.
function randomInt(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

