const html = document.querySelector("html");
const focoBt = document.querySelector('.app__card-button')
const curtoBt = document.querySelector('.app__card-button--curto')
const longBt = document.querySelector('.app__card-button--longo')
const figureImg = document.querySelector('.app__image')
const textoTitulo = document.querySelector('.app__title')
const botao = document.querySelectorAll('.app__card-button')
const musicaTocar = document.querySelector('#alternar-musica')
const startPauseBt = document.querySelector('#start-pause')
const playPause = document.querySelector('#start-pause span')
const TempoDiv = document.querySelector('#timer')
const musica = new Audio('/sons/luna-rise-part-one.mp3')
const playAlerte = new Audio ('/sons/play.wav')
const pauseAlerte = new Audio ('sons/pauseAlerte.mp3')
const alarme = new Audio ('/sons/beep.mp3')
const pausaTxt = document.querySelector('#start-pause')
const pauseImg = document.querySelector('.app__card-primary-butto-icon')
console.log(mostrarTempo)
let temporizadorCorrido = 1500;
let intervaloId = null;

musica.loop = true;
startPauseBt.addEventListener('click', function(){
    if (intervaloId) {
       pauseAlerte.play()
       playPause.textContent = 'Pause'
       pauseImg.setAttribute('src', '/imagens/pause.png')
    }  else {
        playAlerte.play()
        playPause.textContent = "Começar"
        pauseImg.setAttribute('src', '/imagens/play_arrow.png')
       
    }
})
musicaTocar.addEventListener('change', function () {
    if (musica.paused) {
        musica.play()
        
       
    } else {
        musica.pause()
    }
})

function alertcaConteudo(conteudo) {
    mostrarTempo()
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
    temporizadorCorrido = 1500
    alertcaConteudo('foco');
    focoBt.classList.add('active')
    
}
)
curtoBt.addEventListener('click', function () {
    temporizadorCorrido = 300
    alertcaConteudo('descanso-curto')
    curtoBt.classList.add('active')
})
longBt.addEventListener('click', function () {
    temporizadorCorrido = 900
    alertcaConteudo('descanso-longo')
    longBt.classList.add('active')
})



const contagemregressiva = () => {
    if (temporizadorCorrido <= -0) {
        alarme.play()
        zerar();
        alert('Tempo Finalizado');
        
        return 
    }
    temporizadorCorrido -= 1
    mostrarTempo()
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

function mostrarTempo(){
    const tempo = new Date(temporizadorCorrido * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-BR' ,{minute: '2-digit', second:'2-digit'})
    TempoDiv.innerHTML = `${tempoFormatado}`

}
mostrarTempo()


