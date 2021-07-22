const opcoesPratos = document.querySelectorAll(".prato");
const opcoesBebidas = document.querySelectorAll(".bebida");
const opcoesSobremesas = document.querySelectorAll(".sobremesa");


function selecionaOpcao(click_id, className) {
  
  if (className === "opcao prato") {
    retiraBorda(opcoesPratos);
    addBorda(click_id); 

  } else if (className === "opcao bebida") {
    retiraBorda(opcoesBebidas);
    addBorda(click_id); 

  } else if (className === "opcao sobremesa") {
    retiraBorda(opcoesSobremesas);
    addBorda(click_id); 

  }
  
}

function retiraBorda(elements) {
  elements.forEach(opcao => {
    opcao.style.border = "none";
    opcao.children[3].children[1].style.display = "none";
  });
}

function addBorda(id) {
  const element = document.getElementById(id);
  const icon = element.children[3].children[1];
  element.style.border = "2px solid #32B72F";
  icon.style.display = "initial";
}