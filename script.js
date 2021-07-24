const foodsOptions = document.querySelectorAll(".food");
const drinksOptions = document.querySelectorAll(".drink");
const dessertsOptions = document.querySelectorAll(".dessert");

let foodName;
let drinkName;
let dessertName;
let foodPriceNumber;
let drinkPriceNumber;
let dessertPriceNumber;
let orderPrice;

function selectOption(item, className) {

  if (className === "option food") {
    removeSelectedStyleFromCategoryElements(foodsOptions);
    addSelectedStyleToItem(item); 

  } else if (className === "option drink") {
    removeSelectedStyleFromCategoryElements(drinksOptions);
    addSelectedStyleToItem(item); 

  } else if (className === "option dessert") {
    removeSelectedStyleFromCategoryElements(dessertsOptions);
    addSelectedStyleToItem(item); 
  }

  enableOrderButtom();  
}

function removeSelectedStyleFromCategoryElements(itens) {
  itens.forEach(item => {
    item.classList.remove("selected");
    item.children[3].children[1].style.display = "none";
  });
}

function addSelectedStyleToItem(item) {
  item.classList.add("selected");
  item.children[3].children[1].style.display = "initial";
}

function enableOrderButtom() {

  const allItensSelected = document.querySelectorAll(".selected");
  const buttonFinalizeOrder = document.querySelector(".finalize-order-button");
  
  if(allItensSelected.length === 3) {
    buttonFinalizeOrder.disabled = false;
    buttonFinalizeOrder.innerHTML = "Fechar pedido";
    buttonFinalizeOrder.style.backgroundColor = "#32B72F";
  }
}

function enableConfirmationCard() {
  const confirmCard = document.querySelector(".confirm-order-card");
  confirmCard.style.display = "initial";

  const contentSite = document.querySelector(".container");
  contentSite.classList.add("bluried");

  const allItensSelected = document.querySelectorAll(".selected");
  
  // Pegando os campos Nome e Preço dos itens selecionados no menu.
  foodName = allItensSelected[0].children[1].innerHTML;
  const foodPriceString = allItensSelected[0].children[3].children[0].innerHTML;
  foodPriceNumber = convertPriceStringToNumber(foodPriceString);

  drinkName = allItensSelected[1].children[1].innerHTML;
  const drinkPriceString = allItensSelected[1].children[3].children[0].innerHTML;
  drinkPriceNumber = convertPriceStringToNumber(drinkPriceString);

  dessertName = allItensSelected[2].children[1].innerHTML;
  const dessertPriceString = allItensSelected[2].children[3].children[0].innerHTML;
  dessertPriceNumber = convertPriceStringToNumber(dessertPriceString);

  orderPrice = foodPriceNumber + drinkPriceNumber + dessertPriceNumber;
  const orderPriceRounded = orderPrice.toFixed(2);

  // Adicionando Nome e Preço dos itens ao card de confirmaçao
  const foodNameField = document.querySelector(".food-field").children[0];
  const foodPriceField = document.querySelector(".food-field").children[1];
  foodNameField.innerHTML = foodName;
  foodPriceField.innerHTML = `${foodPriceNumber.toFixed(2)}`;

  const drinkNameField = document.querySelector(".drink-field").children[0];
  const drinkPriceField = document.querySelector(".drink-field").children[1];
  drinkNameField.innerHTML = drinkName;
  drinkPriceField.innerHTML = `${drinkPriceNumber.toFixed(2)}`;

  const dessertNameField = document.querySelector(".dessert-field").children[0];
  const dessertPriceField = document.querySelector(".dessert-field").children[1];
  dessertNameField.innerHTML = dessertName;
  dessertPriceField.innerHTML = `${dessertPriceNumber.toFixed(2)}`;

  const orderPriceField = document.querySelector(".price-field").children[1];
  orderPriceField.innerHTML = `R$ ${orderPriceRounded}`;
}

function convertPriceStringToNumber(price) {
  const priceWithDot = price.replace(/,/, '.');
  const [, priceString] = priceWithDot.split(' ');
  const priceNumber = Number(priceString);

  return priceNumber;
}

function sendOrderToZap() {
  const clientName = prompt("Por favor, informe seu nome: ");
  const clientAdress = prompt("Por favor, informe seu endereço");
  const orderPriceRounded = orderPrice.toFixed(2);

  const msg = `Olá, gostaria de fazer o pedido:
  - Prato: ${foodName}
  - Bebida: ${drinkName}
  - Sobremesa: ${dessertName}
  Total: R$ ${orderPriceRounded}
  
  Nome: ${clientName}
  Endereço: ${clientAdress}`;

  const a = document.createElement("a");
  a.target = '_blank';
  a.href = `https://wa.me/5588996756917?text=${encodeURIComponent(msg)}`;
  a.click();
}