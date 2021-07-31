var idade = 71
if (idade < 16){
    console.log(`${idade} anos: AINDA NÃO PODE VOTAR`)
}else if(idade < 18 || idade > 70){
        console.log(`${idade} anos: VOTO FACULTATIVO`)
    }else{  
        console.log(`${idade} anos: VOTO OBRIGATÓRIO`)
    }
