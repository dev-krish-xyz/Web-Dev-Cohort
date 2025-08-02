const listContainer = document.querySelector(".items-container");
const productWrapper = document.querySelector(".product-wrapper");
const shoes = document.querySelector(".shoes");
const addbtnAll = document.querySelectorAll(".add");
const leftbtn = document.querySelector(".left");
const rightbtn = document.querySelector(".right");
const scrollAmount = productWrapper.clientWidth * 0.8;

leftbtn.addEventListener("click", () => {
    productWrapper.scrollBy({
    left: -scrollAmount, // negative scroll to go left
    behavior: "smooth",
  });


  setTimeout(updateArrowVisibility, 300);
});


rightbtn.addEventListener("click", () => {
  productWrapper.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
  setTimeout(updateArrowVisibility, 300);
});

 productWrapper.addEventListener("scroll", updateArrowVisibility);
 window.addEventListener('load', () => {
  productWrapper.scrollLeft = scrollAmount;
  updateArrowVisibility();
 });

const cartValue = document.createElement("span");
cartValue.className = "total-price";
cartValue.innerText = `Total: ₹ 0.00`;
listContainer.appendChild(cartValue);

function updateTotalPrice() {
  const prices = listContainer.querySelectorAll(".item-price");
  let total = 0;

  prices.forEach((priceSpan) => {
    const priceText = priceSpan.innerText.replace("₹", "").trim();
    total += parseFloat(priceText);
  });

  cartValue.innerText = `Total: ₹ ${total.toFixed(2)}`;

  listContainer.appendChild(cartValue);
}

function addItem(name, price) {
  const existingItem = [...listContainer.querySelectorAll(".items")].find(
    (item) => item.querySelector(".name-wrapper").innerText === name
  );

  if (existingItem) {
    const currentQuantity = existingItem.querySelector(".quantity");
    const currentPrice = existingItem.querySelector(".item-price");

    let quant = Number(currentQuantity.innerText);
    quant++;
    currentQuantity.innerText = quant;

    const totalPrice = (price * quant).toFixed(2);
    currentPrice.innerText = `₹ ${totalPrice}`;

    updateTotalPrice();
    return;
  }

  // if item does not exist create the new one

  const plusBtn = document.createElement("button");
  plusBtn.className = "pmbtn";
  plusBtn.innerText = "+";

  const minusBtn = document.createElement("button");
  minusBtn.className = "pmbtn";
  minusBtn.innerText = "-";

  const delbtn = document.createElement("button");
  delbtn.className = "del-btn";
  delbtn.innerText = "Remove";

  const quantity = document.createElement("span");
  quantity.className = "quantity";
  quantity.innerText = "1";

  const itemPrice = document.createElement("span");
  itemPrice.className = "item-price";
  itemPrice.innerText = `₹ ${price.toFixed(2)}`;

  const nameWrapper = document.createElement("span");
  nameWrapper.className = "name-wrapper";
  nameWrapper.innerText = name;

  const btnWrapper = document.createElement("span");
  btnWrapper.className = "btn-wrapper";
  btnWrapper.append(minusBtn, quantity, plusBtn, itemPrice, delbtn);

  const li = document.createElement("li");
  li.className = "items";
  li.append(nameWrapper, btnWrapper);

  listContainer.insertBefore(li, cartValue); // inserts after the last li

  plusBtn.addEventListener("click", () => {
    let quant = Number(quantity.innerText);
    quant++;
    quantity.innerText = quant;
    itemPrice.innerText = `₹ ${(quant * price).toFixed(2)}`;
    updateTotalPrice();
  });

  minusBtn.addEventListener("click", () => {
    let quant = Number(quantity.innerText);
    if (quant > 1) {
      quant--;
      quantity.innerText = quant;
      itemPrice.innerText = `₹ ${(quant * price).toFixed(2)}`;
      updateTotalPrice();
    } else {
      li.remove();
    }
  });

  delbtn.addEventListener("click", () => {
    li.remove();
    updateTotalPrice();
  });

  updateTotalPrice();
}


addbtnAll.forEach((btn) => {
  btn.addEventListener("click", () => {
    const shoeCard = btn.closest(".shoes"); // get the parent shoe card
    const shoeImg = shoeCard.querySelector(".shoeimg img");
    const shoeName = shoeCard.querySelector("span").innerText;
    let shoePrice = parseFloat(shoeImg.dataset.price);

    addItem(shoeName, shoePrice);
  });
});

function updateArrowVisibility() {
  const scrollLeft = productWrapper.scrollLeft;
  const maxScrollLeft = productWrapper.scrollWidth - productWrapper.clientWidth;

  leftbtn.style.opacity ='1';
  rightbtn.style.opacity = '1';
  leftbtn.style.pointerEvents ='auto';
  rightbtn.style.pointerEvents = 'auto';
  // leftbtn.style.display = 'flex';
  // rightbtn.style.display = 'flex';

  // leftbtn.style.opacity = scrollLeft > 0 ? '1' : '0.3';
  // leftbtn.style.pointerEvents = scrollLeft > 0? "auto" : "none";

  
  // rightbtn.style.opacity = scrollLeft < maxScrollLeft -5 ? '1' : '0.3';
  // rightbtn.style.pointerEvents = scrollLeft < maxScrollLeft - 5 ? "auto" : "none";

  if(scrollLeft <=0) {
    leftbtn.style.opacity ='0.3';
    leftbtn.style.pointerEvents = 'none';
  }
  if(scrollLeft >= maxScrollLeft -5){
    rightbtn.style.opacity = '0.3';
    rightbtn.style.pointerEvents = 'none';
  }
}
updateArrowVisibility();