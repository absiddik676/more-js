/*
1. if ticket number is less then 100,  per ticket price 100,
2. if ticket number is more then 100, but less than 200, firs 100 tickets will be 100 rest ticket will be 90 taka per pice
3. if buy more then 200 
    firs 100 ticket --- 100tk
    second 101 to 200 --- 90tk
    300+ --- 70tk

*/ 

function ticketPrice(number) {
    const first100 = 100;
    const second100 = 90;
    const rest = 70;
    if( number<= 100){
        const totalPrice = number * first100
        return totalPrice;
    }
    else if(number <= 200){
        const  restTicket = number - 100;
        const restTicketPrice = restTicket * 90;
        const first100Price = 100*100;
        const totalCost = first100Price + restTicketPrice;
        return totalCost;
    }
    else{
        const firs100Price = 100  * 100
        const second100Price = 100 * 90;
        const restTicket =number-200;
        const restTicketPrice = restTicket * 70;
        const totalCost = firs100Price + second100Price + restTicketPrice;
        return totalCost
    }
}
const cost = ticketPrice(201);
console.log(cost);