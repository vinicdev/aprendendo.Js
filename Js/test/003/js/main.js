function trocar(){
    var corpo = window.document.body
    var b = window.document.querySelector('button#botao')
    var p = window.document.querySelector('p')
    var i = window.document.querySelector('input#atualiza')

    corpo.style.background = 'black'
    corpo.style.color = 'white'
   
    b.style.background = 'white'
    b.style.color = 'black'
   
    i.style.background = 'white'
    i.style.color = 'black'

    p.style.color = 'white'
    p.innerHTML = 'black'
    
}