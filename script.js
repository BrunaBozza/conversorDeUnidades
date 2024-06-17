function temperatura() {
  const graus = document.getElementById("input-temp").value;
  const resultadoTemperatura = document.getElementById("res-temp");
  const unidadeTemp = document.getElementById("select-temp").value;

  if (graus !== "") {
    if (unidadeTemp === "celsius") {
      resultadoTemperatura.innerHTML = ((graus * 9) / 5 + 32).toFixed(2) + "°F";
    } else if (unidadeTemp === "fahrenheit") {
      resultadoTemperatura.innerHTML =
        (((graus - 32) * 5) / 9).toFixed(2) + "°C";
    }
  } else {
    alert("Por favor, insira um valor!");
  }
}

function comprimento() {
  const comprimento = document.getElementById("input-comp").value;
  const resultadoComprimento = document.getElementById("res-comp");
  const unidadeComp = document.getElementById("select-comp").value;

  if (comprimento !== "") {
    if (unidadeComp === "metros") {
      resultadoComprimento.innerHTML = (comprimento * 3.28).toFixed(2) + "ft";
    } else if (unidadeComp === "pes") {
      resultadoComprimento.innerHTML = (comprimento / 3.28).toFixed(2) + "m";
    }
  } else {
    alert("Por favor, insira um valor!");
  }
}

function peso() {
  const peso = document.getElementById("input-peso").value;
  const resultadoPeso = document.getElementById("res-peso");
  const unidadePeso = document.getElementById("select-peso").value;

  if (peso !== "") {
    if (unidadePeso === "quilogramas") {
      resultadoPeso.innerHTML = (peso * 2.2).toFixed(2) + "lb";
    } else if (unidadePeso === "libras") {
      resultadoPeso.innerHTML = (peso / 2.2).toFixed(2) + "kg";
    }
  } else {
    alert("Por favor, insira um valor!");
  }
}