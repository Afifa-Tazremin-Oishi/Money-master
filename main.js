//get inputs
function getAllValue(item){
     const inputField = document.getElementById(item + '-input');
     const inputText = inputField.value;
     const inputValue = parseFloat(inputText);
     return inputValue;
}
function getPositiveNumber(){
    const positiveNumber = inputValue;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-failed');
    if(positiveNumber>0){
       successMessage.style.display = 'block';
       failError.style.display = 'none';
    } 
    else{
        successMessage.style.display = 'none';
        failError.style.display = 'block';
    }
}

function getExpenses(){
    const incomeValue = getAllValue('income');
    //for total expences
    const foodValue = getAllValue('food');
    const rentValue = getAllValue('rent');
    const clothValue = getAllValue('cloth');
    const total = foodValue + rentValue + clothValue;
    const balance = incomeValue - total;
    document.getElementById('total-expence').innerText = total;
    document.getElementById('total-balance').innerText = balance;
    //for saving amount
    const saveValue = getAllValue('save');
    const saveAmount = (incomeValue/100)*saveValue;
    document.getElementById('total-save').innerText = saveAmount;
    //for remaining balance
    const remainingBalance = balance - saveAmount;
    document.getElementById('total-remaining').innerText = remainingBalance;

}
//handle calculation btn eventlistener
document.getElementById('calculation-btn').addEventListener('click', function(){
    getExpenses();
});
//handle save btn eventlistener
document.getElementById('save-btn').addEventListener('click', function(){
    getExpenses();
})