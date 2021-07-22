const opcoesPratos = document.querySelectorAll(".prato");
const opcoesBebidas = document.querySelectorAll(".bebida");
const opcoesSobremesas = document.querySelectorAll(".sobremesa");


function selectOption(click_id, className) {
  
  if (className === "opcao prato") {
    removeSelectedStyle(opcoesPratos);
    addSelectedStyle(click_id); 

  } else if (className === "opcao bebida") {
    removeSelectedStyle(opcoesBebidas);
    addSelectedStyle(click_id); 

  } else if (className === "opcao sobremesa") {
    removeSelectedStyle(opcoesSobremesas);
    addSelectedStyle(click_id); 

  }
  
}

function removeSelectedStyle(elements) {
  elements.forEach(opcao => {
    opcao.style.border = "none";
    opcao.children[3].children[1].style.display = "none";
  });
}

function addSelectedStyle(id) {
  const element = document.getElementById(id);
  const icon = element.children[3].children[1];
  element.style.border = "2px solid #32B72F";
  icon.style.display = "initial";
}