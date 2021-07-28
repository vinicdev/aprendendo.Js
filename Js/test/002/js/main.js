var r = window.document.querySelector('div#resultado')


function gerarSenha(){
    var num = Math.floor(Math.random() * 50)
    r.innerHTML = num
}