function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora >= 0 && hora < 12) {
        foto.innerHTML = '<img id="imagem" src="img/manha.jpg" width="480">'
        document.body.style.background = '#82f8f2'
        alert('Bom dia!')
    }else if (hora > 12 && hora <= 19) {
        foto.innerHTML = '<img id="imagem" src="img/tarde.jpg" width="480">'
        document.body.style.background = ' #e2cd9f'
        alert('Boa tarde!')
    } else {
        foto.innerHTML = '<img id="imagem" src="img/noite.jpg" width="480" >' 
        img.src = 'noite.jpg'
        document.body.style.background = '#474446'
        alert('Boa noite!')
        }
}
