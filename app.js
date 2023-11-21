document.addEventListener("DOMContentLoaded", function () {
  const contributionGraph = document.getElementById("contribution-graph");

  const contributions = Array.from({ length: 365 });

  contributions.forEach((contribution) => {
    const square = document.createElement("div");
    square.classList.add("contribution-square");

    if (contribution) {
      square.classList.add("contribution-green");
    } else {
      square.classList.add("contribution-gray");
    }

    square.addEventListener("click", function () {
      // Simulação de interatividade (pode ser personalizado conforme necessário)
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
