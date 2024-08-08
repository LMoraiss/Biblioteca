const prompt = require ("prompt-sync")();

const livros = []
let nextId = 1
const menu = () => {
    while(true){
    console.log(`Menu biblioteca
    1-Adicionar livro
    2-Listar livros
    3-Atualizar livro
    4-Excluir livro
    5-Sair`);

    let opcao = parseInt(prompt("Selecione a opção desejada:").trim());
    if (opcao < 1 || opcao > 5 || isNaN(opcao) ){
        console.log("Opção inválida!");
    }
}
}

const add = () => {
    let = titulo = prompt("Informe o título do livro a ser adicionado:");
    let = autor = prompt("Informe o autor do livro a ser adicionado:");
    let = ano = prompt("Informe o ano do livro a ser adicionado:");
    let = genero = prompt("Informe o gênero do livro a ser adicionado:");

    let livro ={
        id: nextId++,
        titulo: titulo,
        autor: autor,
        ano: ano,
        genero: genero
    };
}

const listar = () => {
    console.log("Lista de livros cadastrados no sistema:");

    livros.forEach(livro => {console.log(`ID: $ {livro.id}, Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.ano}, Gênero: ${livro.genero}, `)});
}

const atualizar = () => {
    let id =
    parseInt
}