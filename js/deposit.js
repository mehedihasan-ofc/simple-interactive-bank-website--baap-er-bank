document.getElementById("btn-deposit").addEventListener("click", function() {
    
    const newDepositAmount = getInputFieldValueById("deposit-field");
    const previousDepositTotal = getElementValueById("total-deposit");
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById("total-deposit", newDepositTotal);

    const previousBalanceTotal = getElementValueById("balance-total");
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById("balance-total", newBalanceTotal);
});