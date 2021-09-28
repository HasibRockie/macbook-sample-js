function costUpdate(costType, price){
    document.getElementById(costType).innerText = price;

    const bestPrice =   parseInt(document.getElementById("best-price").innerText);
    const memoryPrice =   parseInt(document.getElementById("memory-price").innerText);
    const storagePrice =   parseInt(document.getElementById("storage-price").innerText);
    const deliveryPrice =   parseInt(document.getElementById("delivery-charge").innerText);

    const totalPrice = bestPrice + memoryPrice + storagePrice + deliveryPrice;

    document.getElementById("total-price").innerText = totalPrice;
    document.getElementById("final-total").innerText = totalPrice;
    document.getElementById("discount-details").style.display = "none";
}


document.getElementById("8gb").addEventListener('click',function(){
    costUpdate("memory-price", 0);
});

document.getElementById("16gb").addEventListener('click',function(){
    costUpdate("memory-price", 180);
});

document.getElementById("256gb-ssd").addEventListener('click',function(){
    costUpdate("storage-price", 0);
});

document.getElementById("512gb-ssd").addEventListener('click',function(){
    costUpdate("storage-price", 100);
});

document.getElementById("1tb-ssd").addEventListener('click',function(){
    costUpdate("storage-price", 150);
});

document.getElementById("regular").addEventListener('click',function(){
    costUpdate("delivery-charge", 0);
});

document.getElementById("fast").addEventListener('click',function(){
    costUpdate("delivery-charge", 20);
});


function promoCheck(){
    const promoCode = document.getElementById("promo-input").value;
    const priceWithoutPromo =  document.getElementById("total-price").innerText;
    if(promoCode.toLowerCase() == "stevekaku"){
        const discountedPrice = parseInt(priceWithoutPromo) * 0.8;
        document.getElementById("final-total").innerText = discountedPrice;
        document.getElementById("discount-details").style.display = 'block';
        document.getElementById("discount").innerText = (priceWithoutPromo - discountedPrice).toFixed(2);
        document.getElementById("promo-warning").style.display = "none";
    }
    else{
        document.getElementById("discount-details").style.display = 'none';
        document.getElementById("final-total").innerText = priceWithoutPromo;
        document.getElementById("wrong-promo").innerText = promoCode;
        document.getElementById("promo-warning").style.display = "block";
    }
    document.getElementById("promo-input").value = '';
}


document.getElementById("promo-code").addEventListener("click",function(){ 
    promoCheck();
})
