//get inputs
function getAllValue(item){
     const inputField = document.getElementById(item + '-input');
     const inputText = inputField.value;
     const inputValue = parseFloat(inputText);
     return inputValue;
}

function getExpenses(){
    const incomeValue = getAllValue('income');
    //for total expences
    const foodValue = getAllValue('food');
    const rentValue = getAllValue('rent');
    const clothValue = getAllValue('cloth');
    const total = foodValue + rentValue + clothValue;
    const balance = incomeValue - total;
    
    //error handling
    if(incomeValue<0 || foodValue<0 || rentValue<0 || clothValue<0){
        const invalid = document.getElementById('notify-failed');
        invalid.style.display = 'block';
    }
    else if(total>incomeValue){
        const errorMessage = document.getElementById('notify-error');
        errorMessage.style.display = 'block';
    }
    else{
    document.getElementById('total-expence').innerText = total;
    document.getElementById('total-balance').innerText = balance;

    }
    return balance;

}
function percentageBalance(){
    const incomeValue = getAllValue('income');
    const saveValue = getAllValue('save');
    const saveAmount = (incomeValue/100)*saveValue;
    
    //for remaining balance
    const totalBalance = getExpenses();
    const remainingBalance = totalBalance - saveAmount;
    
    if(remainingBalance<0){
       const showError = document.getElementById('notify-wrong');
       showError.style.display = 'block';
    }
    else{
        document.getElementById('total-save').innerText = saveAmount;
        document.getElementById('total-remaining').innerText = remainingBalance;
    }

}
//handle calculation btn eventlistener
document.getElementById('calculation-btn').addEventListener('click', function(){
    getExpenses();
});
//handle save btn eventlistener
document.getElementById('save-btn').addEventListener('click', function(){
    percentageBalance();
});