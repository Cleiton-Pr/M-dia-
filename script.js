const html = document.querySelector("html");
const focoBt = document.querySelector('.app__card-button')
const curtoBt = document.querySelector('.app__card-button--curto')
const longBt = document.querySelector('.app__card-button--longo')
const figureImg = document.querySelector('.app__image')
const textoTitulo = document.querySelector('.app__title')
const botao = document.querySelectorAll('.app__card-button')
const musicaTocar = document.querySelector('#alternar-musica')
const startPauseBt = document.querySelector('#start-pause')
const musica = new Audio('/sons/luna-rise-part-one.mp3')

let temporizadorCorrido = 5;
let intervaloId = null;

musica.loop = true;

musicaTocar.addEventListener('change', function () {
    if (musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})

function alertcaConteudo(conteudo) {
    botao.forEach(function (conteudo) {
        conteudo.classList.remove('active')

    })
    html.setAttribute('data-contexto', conteudo)
    figureImg.setAttribute('src', `/imagens/${conteudo}.png`)

    switch (conteudo) {
        case 'foco':
            textoTitulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;

        case 'descanso-curto':
            textoTitulo.innerHTML = `Que tal dar uma respirada?  <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;

        case 'descanso-longo':
            textoTitulo.innerHTML = `Hora de voltar à superfície.<strong 
            class="app__title-strong"> Faça uma pausa longa.</strong>`

        default:
            break
    }
}
focoBt.addEventListener('click', function () {
    alertcaConteudo('foco');
    focoBt.classList.add('active')
}
)
curtoBt.addEventListener('click', function () {
    alertcaConteudo('descanso-curto')
    curtoBt.classList.add('active')
})
longBt.addEventListener('click', function () {
    alertcaConteudo('descanso-longo')
    longBt.classList.add('active')
})



const contagemregressiva = () => {
    if (temporizadorCorrido <= -0) {
        zerar();
        alert('Tempo Finalizado');
        temporizadorCorrido = 5
        return 
    }
    temporizadorCorrido -= 1
    console.log('Temporizador: ' + temporizadorCorrido)
}

startPauseBt.addEventListener('click', iniciarOuPauser)

function iniciarOuPauser() {
    if (intervaloId) {
        zerar()
        return

    }
    intervaloId = setInterval(contagemregressiva, 1000)
}

function zerar() {
    clearInterval(intervaloId)
    intervaloId = null
}


