function gerartabuada(){
    //recebendo número do input e seltab
    let numTabuada = document.querySelector('input#numTabuada')
    let tab = document.querySelector('select#seltab')

    //testando se o número é 0 e convertendo número do input
    if(numTabuada.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(numTabuada.value)
        //Contador da tabuada
        res.innerHTML = `Tabada do <strong>${n}</strong>: <br>`
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n}  x  ${c}  =  ${n*c} `
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
    }
