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

  switch(className) {
    case "option food":
      removeSelectedStyleFromCategoryElements(foodsOptions);
      break;
    case "option drink":
      removeSelectedStyleFromCategoryElements(drinksOptions);
      break;
    case "option dessert":
      removeSelectedStyleFromCategoryElements(dessertsOptions);
  }

  addSelectedStyleToItem(item); 
  enableOrderButtom();  
}

function removeSelectedStyleFromCategoryElements(itens) {
  itens.forEach(item => {
    item.classList.remove("selected");
    const checkmark = item.children[3].children[1];
    checkmark.classList.remove("on");
  });
}

function addSelectedStyleToItem(item) {
  item.classList.add("selected");
  const checkmark = item.children[3].children[1];
  checkmark.classList.add("on");
}

function enableOrderButtom() {

  const allItensSelected = document.querySelectorAll(".selected");
  const buttonFinalizeOrder = document.querySelector(".finalize-order-button");
  
  if(allItensSelected.length === 3) {
    buttonFinalizeOrder.disabled = false;
    buttonFinalizeOrder.innerHTML = "Fechar pedido";
    buttonFinalizeOrder.classList.add("button-on");
  }
}

function enableConfirmationCard() {
  const confirmCard = document.querySelector(".confirm-order-card");
  confirmCard.classList.add("on");

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
  - *Prato*: ${foodName}
  - *Bebida*: ${drinkName}
  - *Sobremesa*: ${dessertName}
  Total: R$ *${orderPriceRounded}*
  
  Nome: ${clientName}
  Endereço: ${clientAdress}`;

  window.open(`https://wa.me/5588996756917?text=${encodeURIComponent(msg)}`, '_blank');
}