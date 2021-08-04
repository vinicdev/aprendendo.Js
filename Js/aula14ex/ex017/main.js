function gerartabuada(){
    //recebendo número do input
    let numTabuada = window.document.querySelector('input#numTabuada')

    //recebendo div res
    let res = window.document.querySelector('div#res')

    //convertendo número do input
    let n = Number(numTabuada.value)

    res.innerHTML = `Tabada do <strong>${n}</strong>: <br>`

    for(let c = 0; c <= 10; c++){
        let s = n * c
        res.innerHTML += `${n}  x  ${c}  =  <strong>${s}</strong> <br>`
    }
}