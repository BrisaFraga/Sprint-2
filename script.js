const btn = document.getElementById("agregar");
let personas = [];

function agregar(id1, id2) {
  let valor = $("#" + id2).val();
  if (typeof valor != "string") {
    let Resultado = `<p>${valor}</p>`;
    $("#" + id1).append(Resultado);
  } else {
    let Resultado = `<p>$${valor}</p>`;
    $("#" + id1).append(Resultado);
  }
}

function limpiar(id) {
  btn.addEventListener("click", function handleClick(event) {
    event.preventDefault();
    const Input = document.getElementById(id);
    Input.value = "";
  });
}

btn.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("agregar").click();
  }
});

function calcular(valores, id1, id2) {
  let valor = $("#" + valores).val();
  console.log(valor);
  if (valor != "") {
    personas.push(valor);
    let suma = 0;
    let promedio = 0;

    for (const i of personas) {
      suma += parseFloat(i);
      promedio = suma / personas.length;
    }

    $("p").remove(".p");
    let Suma = `<p class="p">$${suma}</p>`;
    let Promedio = `<p class="p">$${promedio}</p>`;

    $("#" + id1).append(Suma);
    $("#" + id2).append(Promedio);
  } else if (valor == "") {
    alert("Datos mal ingresados");
  }
}
