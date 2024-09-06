function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //Se campoPesquisa for uma string sem nada
    //quando nao temos uma pesquisa, pode-se escrever dois sinais de igual e aspas duplas vazias OUUUU, podemos apenas colocar um ponto de explamação na frente do nome da variável como, por exemplo: (!campoPesquisa)
    if (campoPesquisa == "") {
        section.innerHTML = "Digite antes de pesquisar! Tente novamente."
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    //para cada dado dentro da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        //se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //então, faça...
            //cria um novo elemento    


            resultados += `
        <div class="item-resultado">
                    <h2><a href="https://www.youtube.com/watch?v=Z0DpQpcFT8g&list=PLfF8g7jAU3bww9WKW5Qb0yxvJjtghvKg2&pp=gAQBiAQB"
                            target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank"><button>Playlist</button></a>
        </div>
    `
        }
    }

    if (!resultados) {
        resultados = "Nada foi encontrado. Pesquise outro assunto."

    }

    section.innerHTML = resultados

}//console.log(dados);
/*console.log(dados[1 - 1].titulo) Caso eu queira mostrar apeans um dado expecífico*/
