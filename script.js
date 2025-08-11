const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const iconCart = document.querySelector(".logo3");
const body = document.querySelector("body");
const closeCart = document.querySelector('.closeBtn');
const checkoutBtn = document.querySelector('.checkoutbtn');
const addCartBtn = document.querySelector('.addCart');
const cartTab = document.querySelector('.cartTab');
const listCart = document.querySelector('.listCart');

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

iconCart.addEventListener('click', ()=>{
  body.classList.toggle('showCart');
});
closeCart.addEventListener('click', ()=>{
  body.classList.toggle('showCart');
});

const productImage = document.querySelector('.single-pro-image img').src;
const productName = document.querySelector('.single-pro-details h4').innerText;
const productPrice = document.querySelector('.single-pro-details h2').innerText;


addCartBtn.addEventListener('click', () => {
  const existingItem = Array.from(listCart.children).find(item => {
    return item.querySelector('.cart-name').innerText === productName;
  });

  if (existingItem) {
    const qtyElem = existingItem.querySelector('.quantity span:nth-child(2)');
    qtyElem.innerText = parseInt(qtyElem.innerText) + 1;
    
    const totalElem = existingItem.querySelector('.totalPrice');
    const priceNum = parseFloat(productPrice.replace('$', ''));
    const newQty = parseInt(qtyElem.innerText);
    totalElem.innerText = `$${(priceNum * newQty).toFixed(2)}`;
  } else {
   
    const cartItem = document.createElement('div');
    cartItem.classList.add('item');
    cartItem.innerHTML = `
      <div class="cart-img">
        <img src="${productImage}" alt="">
      </div>
      <div class="cart-name">${productName}</div>
      <div class="totalPrice">${productPrice}</div>
      <div class="quantity">
        <span class="minus"><</span>
        <span>1</span>
        <span class="plus">></span>
      </div>
    `;
    listCart.appendChild(cartItem);
  }
});

checkoutBtn.addEventListener('click', () => {
  listCart.innerHTML = ''; 
  cartTab.classList.remove('active');
});
