/*
1. table ==> 3cft.
2. chair ==> 5cft.
3. bad ==> 7cft
*/ 

function woodCalculator(chairQuantity,tableQuantity,badQuantity) {
    const perTableWood = 3;
    const perChairWood = 5;
    const perBadWood =  50;
    const chairWood = chairQuantity *  perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const badWood  =  badQuantity * perBadWood;
    const totalWood = chairWood + tableWood + badWood;
    return totalWood
}
console.log(woodCalculator(1,1,1));