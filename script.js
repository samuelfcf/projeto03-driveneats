const opcoes = document.querySelectorAll(".opcoes");
const opcoesPratos = document.querySelectorAll(".prato");
const opcoesBebidas = document.querySelectorAll(".bebida");
const opcoesSobremesas = document.querySelectorAll(".sobremesa");

const button = document.querySelector("button");;


function selectOption(click_id, className) {
  
  if (className === "opcao prato") {
    removeSelectedStyle(opcoesPratos);
    addSelectedStyle(click_id); 
    opcoes[0].classList.add("selected")

  } else if (className === "opcao bebida") {
    removeSelectedStyle(opcoesBebidas);
    addSelectedStyle(click_id); 
    opcoes[1].classList.add("selected")

  } else if (className === "opcao sobremesa") {
    removeSelectedStyle(opcoesSobremesas);
    addSelectedStyle(click_id); 
    opcoes[2].classList.add("selected")
  }

  enableButtom(opcoes);
  
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

function enableButtom(opcoes) {

  let cont = 0;

  opcoes.forEach(opcao => {
    if (opcao.classList.contains("selected")) {
      cont++;
    }
  });

  if(cont === 3) {
    button.disabled = false;
    button.innerHTML = "Fechar pedido";
    button.style.backgroundColor = "#32B72F";
  }
}




