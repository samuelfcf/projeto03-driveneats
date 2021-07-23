const menuCategories = document.querySelectorAll(".opcoes");
const foodsOptions = document.querySelectorAll(".prato");
const drinksOptions = document.querySelectorAll(".bebida");
const dessertsOptions = document.querySelectorAll(".sobremesa");

const button = document.querySelector("button");


function selectOption(click_id, className) {

  if (className === "opcao prato") {
    removeSelectedStyleToItem(foodsOptions);
    addSelectedStyleToItem(click_id); 
    menuCategories[0].classList.add("selected");

  } else if (className === "opcao bebida") {
    removeSelectedStyleToItem(drinksOptions);
    addSelectedStyleToItem(click_id); 
    menuCategories[1].classList.add("selected");

  } else if (className === "opcao sobremesa") {
    removeSelectedStyleToItem(dessertsOptions);
    addSelectedStyleToItem(click_id); 
    menuCategories[2].classList.add("selected");
  }

  enableOrderButtom(menuCategories);
  
}

function removeSelectedStyleToItem(itens) {
  itens.forEach(item => {
    item.style.border = "none";
    item.classList.remove("selectedd");
    item.children[3].children[1].style.display = "none";
  });
}

function addSelectedStyleToItem(id) {
  const element = document.getElementById(id);
  const icon = element.children[3].children[1];
  element.style.border = "2px solid #32B72F";
  element.classList.add("selectedd");
  icon.style.display = "initial";
}

function enableOrderButtom(menuCategories) {

  let cont = 0;

  menuCategories.forEach(category => {
    if (category.classList.contains("selected")) {
      cont++;
    }
  });

  if(cont === 3) {
    button.disabled = false;
    button.innerHTML = "Fechar pedido";
    button.style.backgroundColor = "#32B72F";
  }
}

function sendOrderToZap() {

  const selectedItens = document.querySelectorAll(".selectedd");

  const clientName = prompt("Por favor, informe seu nome: ");
  const clientAdress = prompt("Por favor, informe seu endereço");
  
  const foodName = selectedItens[0].children[1].innerHTML;
  const foodPriceString = selectedItens[0].children[3].children[0].innerHTML;
  const foodPriceNumber = convertPriceStringToNumber(foodPriceString);

  const drinkName = selectedItens[1].children[1].innerHTML;
  const drinkPriceString = selectedItens[1].children[3].children[0].innerHTML;
  const drinkPriceNumber = convertPriceStringToNumber(drinkPriceString);

  const dessertName = selectedItens[2].children[1].innerHTML;
  const dessertPriceString = selectedItens[2].children[3].children[0].innerHTML;
  const dessertPriceNumber = convertPriceStringToNumber(dessertPriceString);

  const orderPrice = foodPriceNumber + drinkPriceNumber + dessertPriceNumber;


  const msg = `Olá, gostaria de fazer o pedido:
  - Prato: ${foodName}
  - Bebida: ${drinkName}
  - Sobremesa: ${dessertName}
  Total: R$ ${orderPrice}
  
  Nome: ${clientName}
  Endereço: ${clientAdress}`;

  const a = document.createElement("a");
  a.target = '_blank';
  a.href = `https://wa.me/5588996756917?text=${encodeURIComponent(msg)}`;
  a.click();
}

function convertPriceStringToNumber(price) {
  const priceWithDot = price.replace(/,/, '.');
  const [, priceString] = priceWithDot.split(' ');
  const priceNumber = Number(priceString);

  return priceNumber;
}

function enableConfirmationCard() {
  const confirmCard = document.querySelector(".confirmar-pedido");
  confirmCard.style.display = "initial";

  const main = document.querySelector("main");
  main.style.opacity = "0.5";

  const itens = document.querySelectorAll(".selectedd");
  
  // Pegando os campos Nome e Preço dos itens selecionados no menu.
  const foodName = itens[0].children[1].innerHTML;
  const foodPriceString = itens[0].children[3].children[0].innerHTML;
  const foodPriceNumber = convertPriceStringToNumber(foodPriceString);

  const drinkName = itens[1].children[1].innerHTML;
  const drinkPriceString = itens[1].children[3].children[0].innerHTML;
  const drinkPriceNumber = convertPriceStringToNumber(drinkPriceString);

  const dessertName = itens[2].children[1].innerHTML;
  const dessertPriceString = itens[2].children[3].children[0].innerHTML;
  const dessertPriceNumber = convertPriceStringToNumber(dessertPriceString);

  const orderPrice = foodPriceNumber + drinkPriceNumber + dessertPriceNumber;
  const orderPriceRounded = orderPrice.toFixed(2);

  // Adicionando Nome e Preço dos itens ao card de confirmaçao
  const foodNameField = document.querySelector(".pratoo").children[0];
  const foodPriceField = document.querySelector(".pratoo").children[1];
  foodNameField.innerHTML = foodName;
  foodPriceField.innerHTML = `${foodPriceNumber.toFixed(2)}`;

  const drinkNameField = document.querySelector(".bebidaa").children[0];
  const drinkPriceField = document.querySelector(".bebidaa").children[1];
  drinkNameField.innerHTML = drinkName;
  drinkPriceField.innerHTML = `${drinkPriceNumber.toFixed(2)}`;

  const dessertNameField = document.querySelector(".sobremesaa").children[0];
  const dessertPriceField = document.querySelector(".sobremesaa").children[1];
  dessertNameField.innerHTML = dessertName;
  dessertPriceField.innerHTML = `${dessertPriceNumber.toFixed(2)}`;

  const orderPriceField = document.querySelector(".valor-total").children[1];
  orderPriceField.innerHTML = `R$ ${orderPriceRounded}`;
}




