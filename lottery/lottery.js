const denominations = [100,20,10,5,1];

function hitTheLottery(amountToWithdraw) {
    return whileCalculate(amountToWithdraw,0,0)
    
}
function whileCalculate(amountToWithdraw,countDenomination,billsCount) {
    while (amountToWithdraw>0) {
        let currentDenomination = denominations[countDenomination];
        if (amountToWithdraw >= currentDenomination) {
            amountToWithdraw-=currentDenomination
            billsCount++
        }else{
            countDenomination++;
        }
        
    }
    return billsCount;
    
}



//Recursive not works 😣😣😣
function calculateBills(amountToWithdraw,countDenomination,billsCount) {
    let currentDenomination = denominations[countDenomination];
    if (amountToWithdraw === 0) {
        return billsCount;
    }
    if (amountToWithdraw >= currentDenomination) {
        amountToWithdraw-=currentDenomination
        billsCount++
        if(currentDenomination> amountToWithdraw){
            countDenomination++;
        }
    }
    return calculateBills(amountToWithdraw,countDenomination,billsCount)
}

module.exports = hitTheLottery;
