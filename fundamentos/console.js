for (i = 0; i <= 10; i++) {
    console.log(`O número é: ${i}`)
}

var mapArray = new Map()

mapArray.set('Nome', 'Francisco')
mapArray.set('Sobrenome', 'Nascimento')
mapArray.set('Idade', '33')
mapArray.set('Sexo', 'Masculino')

console.log(mapArray.get('Idade'))