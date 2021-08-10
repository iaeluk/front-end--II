let notas = [9, 8, 7, 6];

let soma = notas.reduce((a, b) => {
    let sum = a + b;
        console.log(`Soma: ${sum}`);
      return sum;
})

let media = soma/notas.length

console.log(`A média é: ${media}`)

notas.forEach(e => {
    if(e>7) {
        console.log(`Parabéns pela conclusão do ${notas.indexOf(e)+1}º bimestre. Sua nota foi ${e}`)
    } else {
       console.log(`Infelizmente sua nota do ${notas.indexOf(e)+1}º bimestre foi ${e}`)
    }
})

if(media > 7) {
    console.log(`Você foi aprovado!!! Parabéns!`)
}else {
    console.log(`Você foi reprovado.`)
}