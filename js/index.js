class Order{
    constructor(biryani, butterChicken, shahiPaneer, naan, roti, dal, rice, choleBhature, pizza, burger,cost)
    {
        this.biryani = biryani;
        this.butterChicken = butterChicken;
        this.shahiPaneer = shahiPaneer;
        this.naan = naan;
        this.roti = roti;
        this.dal = dal;
        this.rice = rice;
        this.choleBhature = choleBhature;
        this.pizza = pizza;
        this.burger = burger;
        this.cost=cost;
    }
}

const prices={"0":200,"1":240,"2":180,"3":35,"4":20,"5":150,"6":120,"7":110,"8":220,"9":190}
const orderTaken=()=>{
    let f = [0,0,0,0,0,0,0,0,0,0];
    let sum=0;
    for(let i=0;i<10;i++){
        f[i]=Number(document.getElementById(`i${i}`).innerText);
        sum+=(f[i]*prices[i]);
    }
    const currentOrder= new Order(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9],sum);
    console.log(currentOrder);
    console.log(JSON.stringify(currentOrder));
    fetch('http://localhost:3000/order',{
        method : "POST",
        headers: {
            'Content-Type' : 'application/json' 
        },
        body: JSON.stringify(currentOrder)
    })
    .then(res => {
        return res.json();
    })
    console.log(sum*1.05);
}

function plus1(ele){
    const parent = ele.parentNode;
    const qty = parent.childNodes[3];
    const cart=document.getElementById('cart-value');
    let value= Number(cart.innerText);
    console.log(prices[(qty.id)[1]]);
    cart.innerText=`${value+prices[(qty.id)[1]]}`;
    qty.innerText=`${Number(qty.innerText)+1}`;
}
function minus1(ele){
    const parent = ele.parentNode;
    const qty = parent.childNodes[3];
    const cart=document.getElementById('cart-value');
    let value= Number(cart.innerText);
    console.log(prices[(qty.id)[1]]);
    if(Number(qty.innerText)>0) {
        cart.innerText=`${value-prices[(qty.id)[1]]}`;
        qty.innerText=`${Number(qty.innerText)-1}`;
    }
}
const orderPrice=()=>{
    let sum=0;
    for(let i=0;i<10;i++){
        if(document.getElementById(`cbid${i}`).checked==true) sum+=prices[`${i}`];
    }
    document.getElementById('cart-value').innerText=sum;
    console.log(sum);
}

// const plus = document.querySelector(".plus"),
// minus = document.querySelector(".minus"),
// num = document.querySelector(".num");
// let a = 0;
// plus.addEventListener("click", ()=>{
//     a++;
//     a = (a < 10) ? "0" + a : a;
//     num.innerText = a;
// });

// minus.addEventListener("click", ()=>{
//     if(a > 0){
//     a--;
//     a = (a < 10) ? "0" + a : a;
//     num.innerText = a;
//     }
// });


    










//{
    //     "burger":320,
    //     "biryani":0,
//     "pizza":120
//}