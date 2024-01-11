document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field')
    const newdepositAmountString = depositField.value
    const newdepositAmount =parseFloat(newdepositAmountString)
    const depositeTotalElement = document.getElementById('deposit-total')
    const PreviousDepositTotalString = depositeTotalElement.innerText
    const PreviousDepositTotal =parseFloat(PreviousDepositTotalString)
const currentDepositTotal = PreviousDepositTotal + newdepositAmount

    depositeTotalElement.innerText=currentDepositTotal

    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)
    const currentTotalBalance = previousBalanceTotal + newdepositAmount

    balanceTotalElement.innerText = currentTotalBalance


    depositField.value = ''
})