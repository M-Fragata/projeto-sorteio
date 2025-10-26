const sortear = document.querySelector('input#sortear')
const res = document.querySelector('div#res')

sortear.addEventListener('click', () => {
    const num = Number(document.querySelector('input#number').value)
    const de = Number(document.querySelector('input#de').value)
    const ate = Number(document.querySelector('input#ate').value)

    let numeros = []

    for (let i = 0; i < num; i++) {
        numeros.push(randomInt(ate))

        const newDiv = document.createElement('div')
        newDiv.classList.add("aleatorio")
        newDiv.textContent = randomInt(ate)

        res.append(newDiv)

        console.log(numeros == newDiv.textContent)
    }

})

function randomInt(max) {

        let aleatorio = Math.random()

        return Math.floor(aleatorio * max)
}

