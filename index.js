let listaPecas=[]
let nomePeca='Pe'
let pesoPeca=300
let podeCadastrar=true

if (pesoPeca<100){
    console.log('Não há possibilidade de cadastrar!')
    podeCadastrar=false
}

if (listaPecas.length > 10){
    console.log("limite de peças atingido!")
    podeCadastrar=false
}

if (nomePeca.length<3){
    console.log('Quantidade de letras inferior ao permitido!')
    podeCadastrar=false
}

if (podeCadastrar){
    listaPecas.push(nomePeca)
    console.log("Peça cadastrada com sucesso!")
} else {
  console.log("Ocorreu um problema para cadastrar a peça!")
}   

console.log('listando as peças!')

for(let i=0;i<listaPecas.length;i++){
    console.log(listaPecas[i])
}
