/* tudo dentro dessa função será executado ao carregar a página */
document.addEventListener("DOMContentLoaded", function () {
  const contributionGraph = document.getElementById("contribution-graph");

  /* gerando a tabela de registros */
  const contributions = Array.from({ length: 365 });

  contributions.forEach((contribution) => {
    const square = document.createElement("div");
    square.classList.add("contribution-square");
    
    if (contribution) {
      square.classList.add("contribution-green");
    } else {
      square.classList.add("contribution-gray");
    }

    // interatividade com as caixinhas
    square.addEventListener("click", function () {
      if (contribution) {
        square.classList.remove("contribution-green");
        square.classList.add("contribution-gray");
      } else {
        square.classList.remove("contribution-gray");
        square.classList.add("contribution-green");
      }
    });

    contributionGraph.appendChild(square);
  });
});
