document.getElementById('btn-withdraw').addEventListener('click',function(){

    const withDrawField  = document.getElementById('Withdraw-field')
    const withDrawFieldString = withDrawField.value
    const NewWithDrawField = parseFloat(withDrawFieldString)

    const withdrawTotalElement = document.getElementById('withdraw-total')
    const PreviouswithdrawTotalElementString = withdrawTotalElement.innerText
    const PreviousWithdrawTotalElement = parseFloat(PreviouswithdrawTotalElementString)
     const currentWithdrawTotal= PreviousWithdrawTotalElement + NewWithDrawField;


     withdrawTotalElement.innerText=currentWithdrawTotal
     

     const balanceTotalElement = document.getElementById('balance-total')
     const previousBalanceTotalString = balanceTotalElement.innerText
     const previousBalanceTotal = parseFloat(previousBalanceTotalString)
     const currentTotalBalance = previousBalanceTotal - NewWithDrawField
 
     balanceTotalElement.innerText = currentTotalBalance
 
 
     withDrawField.value = ''
})