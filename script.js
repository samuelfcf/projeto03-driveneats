const opcoes = document.querySelectorAll(".opcoes");
const opcoesPratos = document.querySelectorAll(".prato");
const opcoesBebidas = document.querySelectorAll(".bebida");
const opcoesSobremesas = document.querySelectorAll(".sobremesa");

const button = document.querySelector("button");


function selectOption(click_id, className) {
  
  if (className === "opcao prato") {
    removeSelectedStyle(opcoesPratos);
    addSelectedStyle(click_id); 
    opcoes[0].classList.add("selected");

  } else if (className === "opcao bebida") {
    removeSelectedStyle(opcoesBebidas);
    addSelectedStyle(click_id); 
    opcoes[1].classList.add("selected");

  } else if (className === "opcao sobremesa") {
    removeSelectedStyle(opcoesSobremesas);
    addSelectedStyle(click_id); 
    opcoes[2].classList.add("selected");
  }

  enableButtom(opcoes);
  
}

function removeSelectedStyle(elements) {
  elements.forEach(opcao => {
    opcao.style.border = "none";
    opcao.classList.remove("selectedd");
    opcao.children[3].children[1].style.display = "none";
  });
}

function addSelectedStyle(id) {
  const element = document.getElementById(id);
  const icon = element.children[3].children[1];
  element.style.border = "2px solid #32B72F";
  element.classList.add("selectedd");
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

function encaminhaZap() {

  let itens = document.querySelectorAll(".selectedd");
  
  let nomePrato = itens[0].children[1].innerHTML;
  let valorPratoString = itens[0].children[3].children[0].innerHTML;
  let valorPratoNumero = converterPrecoParaNumero(valorPratoString);

  let nomeBebida = itens[1].children[1].innerHTML;
  let valorBebidaString = itens[1].children[3].children[0].innerHTML;
  let valorBebidaNumero = converterPrecoParaNumero(valorBebidaString);

  let nomeSobremesa = itens[2].children[1].innerHTML;
  let valorSobremesaString = itens[1].children[3].children[0].innerHTML;
  let valorSobremesaNumero = converterPrecoParaNumero(valorSobremesaString);

  let valorTotal = valorPratoNumero + valorBebidaNumero + valorSobremesaNumero;


  let msg = `Olá, gostaria de fazer o pedido:
  - Prato: ${nomePrato}
  - Bebida: ${nomeBebida}
  - Sobremesa: ${nomeSobremesa}
  Total: R$ ${valorTotal}`;

  let a = document.createElement("a");
  a.target = '_blank';
  a.href = `https://wa.me/5588996756917?text=${encodeURIComponent(msg)}`;
  a.click();
}

function converterPrecoParaNumero(item) {
  let array = item.replace(/,/, '.').split(' ');
  let precoString = array[1];
  let precoNumero = Number(precoString);

  return precoNumero;
}




