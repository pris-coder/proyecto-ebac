

//---------> Seleccionar elementos
 const nombreFlor = document.getElementById("flor");
 //console.log(nombreFlor);

 const image = document.getElementsByClassName("banner__titulo"); 
 //console.log(image);

 const tags = document.getElementsByTagName("section");
 //console.log(tags);

 const elem = document.querySelector(".cart");
 //console.log(elem);

 //Crear elemento y agregar attribute
 const parent = document.querySelector(".products"); 

 const newElem = document.createElement("a");

 newElem.setAttribute("class", "new");

 parent.append(newElem);
 //console.log(newElem);

 //------------>Attributes

 const cambioLogo = document.querySelector(".cambiar");
 //cambioLogo.setAttribute("src", "img/lili..jpg");

 console.log(cambioLogo.getAttribute("src"));
 console.log(cambioLogo.hasAttribute("src"));
 //console.log(cambioLogo.removeAttribute("src"));


 if(cambioLogo.hasAttribute("src")); {
    //alert("Si tiene src")
 }

 //--------------------> CSS CLASSES Modificar

 const parent2 = document.querySelector(".products");
 const parent3 = parent2.firstElementChild;
 const buttonBuy = parent3.lastElementChild;
 //console.log(buttonBuy);
// buttonBuy.classList.add("red");
// buttonBuy.classList.replace("red", "blue");
 //buttonBuy.classList.remove("blue");//

 //-------------->Modificar texto
 const button = document.getElementsByTagName("button");
 console.log(button[1].innerText);
 //button[1].innerText = "BUY";

 //----------------->Modificar Style.
 console.log(button[1].style);
 //button[1].style.backgroundColor ="blue";

 //----------->EVENTOS

 const elemButton = button[1];
 elemButton.addEventListener('click', () =>{
   elemButton.classList.toggle("toggle");
 })

 const iconRemove = document.querySelectorAll(".remove");
 console.log(iconRemove);

 iconRemove.forEach(elem =>{
  elem.addEventListener("click", () => {
  const elemParent = elem.parentElement;
  elemParent.remove();
  })
 })

 const header = document.querySelector("header");
 const cartIcon = header.lastElementChild;
 const cart = document.querySelector(".cart");

 cartIcon.addEventListener("click", () => {
      cart.classList.toggle("show");
 
 })

 const mouse = document.querySelector(".products__img");

 mouse.addEventListener("mouseenter", () => {
    mouse.style.opacity = ".5";

 })

 mouse.addEventListener("mouseleave", () => {
  mouse.style.opacity = "1";

})



const menuIcon = header.firstElementChild;
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
   menu.classList.toggle("show");
})

const exit = document.querySelector(".exit");

exit.addEventListener("click", () =>{
   menu.classList.toggle("show");
})


//-----------------------------------//

const cartInfo = document.querySelector(".cart__elements");
const rowProduct = document.querySelector(".cart");

//Lista de todos los contenedores de productos//
const productList = document.querySelector(".products");

//Variables de arreglos de productos//
let allProducts =[]

const valorTotal = document.querySelector(".total-pagar");
const countProducts =document.querySelector(".numero_carrito");




productList.addEventListener('click', e => {

   if(e.target.classList.contains("products__button")){
         const product3 = e.target.parentElement

         const infoProduct = {
            quantity: 1,
            tittle: product3.querySelector("h3").textContent,
            price: product3.querySelector("p").textContent,
         }

         const exits = allProducts.some(product3 => product3.tittle === infoProduct.tittle)

         if(exits){
            const products = allProducts.map(product3 =>{
               if(product3.tittle === infoProduct.tittle){
                  product3.quantity++;
                  return product3
               } else {
                  return product3
               }
            })
            allProducts = [...products]
         } else {
            allProducts = [...allProducts, infoProduct];
         }

         

         showHTML();
   }

   
});


// Funcion para mostras HTML

const showHTML = () => {

   //Limpiar HTML
   rowProduct.innerHTML = '';

   let total = 0;
   let totalOfProducts = 0;


   allProducts.forEach(product3 => {
      const containerProduct = document.createElement('div')
      containerProduct.classList.add("cart-product")


      containerProduct.innerHTML = `
         <div class="cart__elements">
            <img src="./img/orquidea..jpg" alt="Orquidea">
            <span class="cantidad-producto-carrito">${product3.quantity}</span>
            <p>${product3.tittle}</p>
            <p>${product3.price}</p>
            <i class="remove"><img src="img/quitar.png" alt="Icono Quitar" class="cart__delete"></i>
         </div >
      `

      rowProduct.append(containerProduct)

      total += parseInt(product3.quantity * product3.price.slice(1));
      totalOfProducts = totalOfProducts + product3.quantity;
   })

   valorTotal.innerText = `$${total}`;
   countProducts.innerText = totalOfProducts;
};
