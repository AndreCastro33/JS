function rodar() {
    var hora = new Date().getHours()
    var min = new Date().getMinutes()
    var div = document.getElementById('dv')
    var i = document.getElementById('img')
    if (hora >= 0 && hora <12) {
        i.src = 'imagem/imgp.png'
        div.innerHTML += '<p>Bom dia!</p>'
    } else if (hora >= 12 && hora < 18) {
        i.src = 'imagem/tarde.png'
        div.innerHTML = '<p>Boa tarde!</p>'
        document.body.style.background = 'orange'
    } else {
        i.src = 'imagem/noite.png'
        div.innerHTML = ('<h3>Boa noite!</h3>')
        document.body.style.background = 'grey'
    }
    div.innerHTML += (`<p>Agora são <strong>${hora} horas</strong> e <strong>${min} minutos.</p>`)
}
rodar()
setInterval(rodar, 1000)
