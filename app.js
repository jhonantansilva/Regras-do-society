function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";
  
    // Itera sobre cada item de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {
      // Concatena HTML para cada resultado, formatando com as propriedades do objeto 'dado'
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }