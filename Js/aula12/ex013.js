var agora = new Date()
var diaSem = agora.getDay()

switch (diaSem){
    case 0: 
        console.log('Olá, hoje é DOMINGO')
        break

    case 1: 
        console.log('Olá, hoje é SEGUNDA-FEIRA')
        break

    case 2: 
        console.log('Olá, hoje é TERÇA-FEIRA')
        break

    case 3: 
        console.log('Olá, hoje é QUARTA-FEIRA')
        break

    case 4: 
        console.log('Olá, hoje é QUINTA-FEIRA')
        break

    case 5: 
        console.log('Olá, hoje é SEXTA-FEIRA')
        break
    
    case 6: 
        console.log('Olá, hoje é SÁBADO')
        break

    default:
        console.log('[ERRO] Dia inválido!')
        break
}