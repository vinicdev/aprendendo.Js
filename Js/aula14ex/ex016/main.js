function contar(){
    //recebe os números
    let ninicio = window.document.querySelector('input#nInicio')
    let nfim = window.document.querySelector('input#nFim')
    let npasso = window.document.querySelector('input#nPasso')
   
    //converter os numero que estavam em string
    let i = Number(ninicio.value)
    let f = Number(nfim.value)
    let p = Number(npasso.value)

    //recebe a div de resposta
    let res = window.document.querySelector('div#res')

    if(p <= 0){
        window.alert('Passo inválido! Ele passara valer 1 agora')
        p = 1
    }
    //testando se os números não são zero
    if(i == 0 || f == 0 || p == 0){
        // window.alert('[Erro] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    }else{
        res.innerHTML = 'Contando: <br>'
    }
    
    //testa se vamos fazer contagem crescente ou decrescente
    if(i < f){
        //contagem crescente
        let c = i
        while(c <= f){
             res.innerHTML += ` 👉 ${c} `
             c = c + p
        }
    }else{
        //contagem decrescente
        let c = i
        while(c >= f){
            res.innerHTML += ` 👉 ${c} `
            c = c - p
        }
    }
    res.innerHTML += ' 🏁' 
}