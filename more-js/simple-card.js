const card = [
    {name : 'show', price : 1200, quantity : 3},
    {name : 'pant', price :1000, quantity : 5},
    {name : 'balt', price :1000, quantity : 3},
    {name : 'T-shart', price : 2000, quantity : 6},
]

function totalCost(allProduct) {
    let totalPrice = 0;
    for(i=0; i<allProduct.length;i++){
        const product = allProduct[i];
        const quantity = product.quantity;
        const productTotalprice = quantity * product.price;
        totalPrice = totalPrice + productTotalprice;
    }
    return totalPrice
}
const myAllProducts = totalCost(card)
console.log(myAllProducts)