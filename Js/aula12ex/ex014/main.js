function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var txt = window.document.getElementById('txtfinal')
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'img/fotomanha.png'
        document.body.style.background = '#f6d2b3'
        txt.innerHTML = 'Bom dia! 🖤'
    }else if (hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'img/fototarde.png'
        document.body.style.background = '#765f56'
        txt.innerHTML = 'Boa tarde! 🖤'
    }else {
        //boa noite
        img.src = 'img/fotonoite.png'
        document.body.style.background = '#091b1f'
        txt.innerHTML = 'Boa noite! 🖤'
    }
}