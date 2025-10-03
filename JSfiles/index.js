document.getElementById('btn-submit').addEventListener('click',function(){

//taking email
const emailField = document.getElementById('emailField')
const email = emailField.value
//password
const passwordField = document.getElementById('passwordField')
const password = passwordField.value
if(email=== 'bank@gmail.com' && password === '1233'){
    window.location.href = 'bank.html'
}
else{
    alert("Wrong email or password")
}
})
