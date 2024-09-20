let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}

const btnCart=document.querySelector('#cart-btn');
const cart=document.querySelector('.cart-items-container');
const btnClose=document.querySelector('#cart-close');
const btnBuy = document.querySelector('.btn-buy');


btnCart.addEventListener('click',() =>{
    cart.classList.add('active'); 

});

btnClose.addEventListener('click',() =>{
    cart.classList.remove('active'); 

});
 
 document.addEventListener('DOMContentLoaded',loadFood);

 function loadFood(){
    loadContent();
}

function loadContent(){
    //remove items from cart
    let btnRemove=document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click',removeItem);
   
});

      let qtyElements=document.querySelectorAll('.cart-quantity');
     qtyElements.forEach((input)=>{
    input.addEventListener('change',changeQty);

});

//product cart add

let cartBtns=document.querySelectorAll('.addtocart');
cartBtns.forEach((btn)=>{
    btn.addEventListener('click',addCart);
});

updateTotal();

 
}
 
  //remove item
  function removeItem(){
    let title=this.parentElement.querySelector('.cart-food-title').innerHTML;
    itemList=itemList.filter(el=>el.title!=title); 
    this.parentElement.remove();
    loadContent();
     
  }
  //change quantity
    function changeQty(){
        if(isNaN(this.value) || this.value<1){
            this.value=1;
        }
        loadContent();
    } 
    
    let itemList=[];

    //add cart
    function addCart(){
        let product=this.parentElement;
        let title= product.querySelector('.producttitle').innerHTML;
        let price= product.querySelector('.price').innerHTML;
        let imgSrc= product.querySelector('.product-img').src;

        let newProduct={title,price,imgSrc}

        //chech product already exist in cart
        if(itemList.find((el)=>el.title==newProduct.title))
            {
                alert("product already added in cart");
                return;
            }else{
                itemList.push(newProduct);
            }

        let newProductElement= createCartProduct(title,price,imgSrc);
        let elements=document.createElement('div');
        elements.innerHTML=newProductElement;
         let cartBasket=document.querySelector('.cart-content');
         cartBasket.append(elements); 
         loadContent();
    }

    function createCartProduct(title,price,imgSrc){

        return `  
         <div class="cart-box">
        
                <img src="${imgSrc}" class="cart-img">
                <div class="detail-box">
                    <div class="cart-food-title">${title}</div>
                    <div class="price-box">
                    <div class="cart-price">${price}</div>
                    <div class="cart-amt">${price}</div>
                </div>
                <input type="number" value="1" class="cart-quantity">
                </div>
                <ion-icon name="trash" class="cart-remove"></ion-icon>
                 </div>
        
        `;

    }

    function updateTotal()
    {
        const cartItems=document.querySelectorAll('.cart-box');
        const totalValue=document.querySelector('.total-price');

      let total=0;

      cartItems.forEach(product=>{
        let priceElement=product.querySelector('.cart-price');
        let price=parseFloat(priceElement.innerHTML.replace("Rs.",""));
        let qty=product.querySelector('.cart-quantity').value;

        total+=(price*qty);
        product.querySelector('.cart-amt').innerText="Rs."+(price*qty);

        
    });

    totalValue.innerHTML='Rs.'+total;

    //Add product count in cart Icon

    const cartCount=document.querySelector('.cart-count');
    let count=itemList.length;
    cartCount.innerHTML=count;

    if(count==0){
        cartCount.style.display="none";

    }else{
        cartCount.style.display="block";


    }


 }

 btnBuy.addEventListener('click', () => {
    if (itemList.length > 0) {
        alert("Order placed successfully");
        clearCart();
    } else {
        alert("Please choose any one product");
    }
})

function clearCart() {
    itemList = [];
    const cartContent = document.querySelector('.cart-content');
    cartContent.innerHTML = '';
    updateTotal();
}
    
    

// account form

let accountform = document.querySelector('.account-form');
  
document.querySelector('#account-btn').onclick = () =>{
    accountform.classList.add('active');
}

document.querySelector('.close-btn').onclick = () =>{
    accountform.classList.remove('active');
}

let registerbtn = document.querySelector('.account-form .register-btn');
let loginbtn = document.querySelector('.account-form .login-btn');

registerbtn.onclick = () => {
    registerbtn.classList.add('active');
    loginbtn.classList.remove('active');
    document.querySelector('.account-form .login-form').classList.remove('active');
    document.querySelector('.account-form .register-form').classList.add('active');
}

loginbtn.onclick = () => {
    registerbtn.classList.remove('active');
    loginbtn.classList.add('active');
    document.querySelector('.account-form .login-form').classList.add('active');
    document.querySelector('.account-form .register-form').classList.remove('active');
};



document.querySelector('.login-form').onsubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    let email = document.querySelector('.emaillogin').value;
    let password = document.querySelector('.passwordlogin').value;
    if(email && password) {
        alert('Login form successfully submitted');
        document.querySelector('.login-form').reset();
    } else {
        alert('Please fill out all fields');
    }
}


document.querySelector('.register-form').onsubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    let email = document.querySelector('.emailregister').value;
    let mobile = document.querySelector('.numberregister').value;
    let password = document.querySelector('.passwordregister').value;
    let confirmPassword = document.querySelector('.passwordreregister').value;
    if(email && mobile && password && confirmPassword) {
        alert('Register form successfully submitted');
        document.querySelector('.register-form').reset();
    } else {
        alert('Please fill out all fields');
    }
}



// Handle contact form submission
document.querySelector('.contactform').onsubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    // Get the values of all input fields
    let name = document.querySelector('.contactform .namebox').value;
    let number = document.querySelector('.contactform .numberbox').value;
    let email = document.querySelector('.contactform .emailbox').value;
    let message = document.querySelector('.contactform .messagebox').value;

    // Check if all fields are filled
    if (name && number && email && message) {
        alert('Contact form successfully submitted');
        // Clear the input fields
        document.querySelector('.contactform').reset();
    } else {
        alert('Please fill out all the fields');
    }
}







































