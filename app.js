function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (campoPesquisa == "") {
    section.innerHTML =
      "<p class='mensagem-erro'>Unidade não encontrada, digite novamente.</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Verifica se o elemento foi encontrado
  if (section) {
    // Limpa o conteúdo anterior do section, se necessário
    let resultados = "";
    let foto = "";
    let titulo = "";
    let endereco = "";
    let contato = "";
    let link = "";
    // Para cada dado dentro da lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.endereco.toLowerCase();
      contato = dado.contato.toLowerCase();
      if (
        foto.includes(campoPesquisa) ||
        titulo.includes(campoPesquisa) ||
        endereco.includes(campoPesquisa) ||
        contato.includes(campoPesquisa)
      ) {
        resultados += `
        <div class="item-resultado">
        <img src="${dado.foto}" alt="">
          <h2>
              ${dado.titulo}
          </h2>
          <div class="endereco-meta"><b>Endereço: </b> ${dado.endereco} <br>
          <b>Contato:</b> ${dado.contato}</div>
          <div class="ancora">
          <a href="${dado.link}" target="_blank">Ver no mapa.</a>
          <img src="${dado.mapa}" alt="">
          </div>
         <a href="planos.html"><button class="botao-enviar">Ver Planos</button></a>
        </div>
      `;
      }
    }

    if (!resultados) {
      resultados = "<p class='mensagem-erro'>Unidade não encontrada!</p>";
    }

    section.innerHTML = resultados;
  } else {
    console.error("Elemento com ID 'resultados-pesquisa' não encontrado.");
  }
}
