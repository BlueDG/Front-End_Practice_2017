console.log("youpi");


// 1)           mes variables ce que je dois récupérer dans le document




// je récupère la section checkout
let myCheckout = document.querySelector(".checkout");
let myCheckoutOpen = document.querySelector(".basket");
let myCheckoutClose = document.querySelector(".checkout-close");


console.log(myCheckout);
console.log(myCheckoutOpen);
console.log(myCheckoutClose);


// 2)           mes fonctions

function openCheckout(){
    console.log("open");
    myCheckout.classList.add("is-showing");
};





function closeCheckout(info){
    info.preventDefault();
    console.log("close");
    myCheckout.classList.remove("is-showing");
};




// 3)            Code principal

myCheckoutOpen.addEventListener("click", openCheckout);

myCheckoutClose.addEventListener("click", closeCheckout);



