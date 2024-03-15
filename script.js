/*Validation */

const form = document.getElementById('signup');
const Name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('PasswordInput');
const password2 = document.getElementById('RetypePasswordInput');
const postal = document.getElementById('postal')

form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs(); 
});

const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const isValidEmail = email => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}

const isPasswordValid = password => {
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/;
    return passwordRegex.test(password);
}

const PostalCodeValid = postal =>{
    const postalRegex = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
    return postalRegex.test(postal);
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}


const validateInputs = () => {
    const nameValue = Name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const postalValue = postal.value.trim();



    if(nameValue === ''){
        setError(Name, 'Name is required');
        document.getElementById('name').style.border = "solid 2px red";
        return null;
    }
    else{
        setSuccess(Name);
        document.getElementById('name').style.border = "solid 2px green";

    }

    if(emailValue === ''){
        setError(email, 'Email is required');
        document.getElementById('email').style.border = "solid 2px red";
    }
    else if(!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address');
        document.getElementById('email').style.border = "solid 2px red";
    }
    else{
        setSuccess(email);
        document.getElementById('email').style.border = "solid 2px green";
    }

    if(passwordValue === ''){
        setError(password, 'Password is required');
        document.getElementById('PasswordInput').style.border = "solid 2px red";
    }
    else if(!isPasswordValid(passwordValue)){
        setError(password, 'The password must be have at least 6 characters, an Upper Case Letter, a number and a special character')
        document.getElementById('PasswordInput').style.border = "solid 2px red";
    }
    else{
        setSuccess(password)
        document.getElementById('PasswordInput').style.border = "solid 2px green";
    }

    if(password2Value === ''){
        setError(password2, 'Please confirm your password')
        document.getElementById('RetypePasswordInput').style.border = "solid 2px red";
    }
    else if(password2Value !== passwordValue){
        setError(password2, 'The passwords are not matching')
        document.getElementById('RetypePasswordInput').style.border = "solid 2px red";
    }
    else{
        setSuccess(password2)
        document.getElementById('RetypePasswordInput').style.border = "solid 2px green";
    }

    if(postalValue === ''){
        setError(postal, 'Please enter a Postal Code');
        document.getElementById('postal').style.border = "solid 2px red";
    }
    else if(!PostalCodeValid(postalValue)){
        setError(postal, 'Please enter a valid Postal Code')
        document.getElementById('postal').style.border = "solid 2px red";
    }
    else{
        setSuccess(postal)
        document.getElementById('postal').style.border = "solid 2px green";
    }

    if (nameValue && emailValue && passwordValue && password2Value && postalValue)
    {
        if(confirm('Name: '+ nameValue +'\nEmail: ' + emailValue + '\nPostal Code: '+ postalValue +'\nDo you want to submit this form ?'))
        {
            createTextFile(nameValue, emailValue, passwordValue, postalValue)
        }
        else{
            return false;
        }
    }
};

function createTextFile(name, email, password, postal){
    const content = `Email: ${email} \nPassword: ${password}\nPostal Code: ${postal}`
    const blob = new Blob([content], {type: 'text/plain'});

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = name+'_inputs.txt';

    link.click();
}




/*Password Visibility */

const passwordInput = document.getElementById('PasswordInput');
const toggleVisibility = document.getElementById('ToggleVisibility');
const RetypePasswordInput = document.getElementById('RetypePasswordInput');
const toggleVisibility2 = document.getElementById('ToggleVisibility2');

toggleVisibility.addEventListener('change', function(){
    if(toggleVisibility.checked){
        passwordInput.type = 'text';
    }
    else{
        passwordInput.type = 'password';   
    }
});

toggleVisibility2.addEventListener('change', function(){
    if(toggleVisibility2.checked){
        RetypePasswordInput.type = 'text';
    }
    else{
        RetypePasswordInput.type = 'password';   
    }
});

/*Remove City*/

    
    var selectCity = document.getElementById('city');
    var options = selectCity.options;
    var optionToRemove = 'New York City';

    var button = document.getElementById('remove')
    button.addEventListener('click',hideshow,false);

   

function hide() 
    {
        document.getElementById('remove').style.display = 'block'; 
        document.getElementById('remove').style.display = 'none';
    }

function remove() {
    
    for (var i = 0; i < options.length; i++){
        if(options[i].text === optionToRemove){
            selectCity.remove(i);
            break;
        }
    } 
}

function addOption(){ 
    var option = document.createElement('option');
    option.value = 'QuebecCity';
    option.text = 'Quebec City';
    selectCity.appendChild(option);
}

function removecity()
{ 
    remove();
    hide();
    addOption();
}
