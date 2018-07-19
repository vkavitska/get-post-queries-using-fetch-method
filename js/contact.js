let form=document.forms.contactForm;

function enteredLoginData() {
    let enteredData = {};
    enteredData.email = form.elements.email.value;
    enteredData.name = form.elements.name.value;
    enteredData.comment=form.elements.comment.value;
    return enteredData;
}

function validateEmail() {
    let email = form.elements.email.value;
    document.getElementById('errorEmail').innerHTML='';
    if (email.length === 0) {
        document.getElementById('errorEmail').innerHTML="*this field is required";
        return false;
    }
    let email_pattern = /.+@.+\..+/i;
    let checkEmail = email_pattern.test(email);
    if (!checkEmail) {
        document.getElementById('errorEmail').innerHTML="*enter correct email";
        return false;
    }
    return true;
}

function validateName() {
    let name = form.elements.name.value;
    document.getElementById('errorName').innerHTML='';
    if (name.length === 0) {
        document.getElementById('errorName').innerHTML='*this field is required';
        return false;
    }
    return true;
}

function validateComment(){
    let comment = form.elements.comment.value;
    document.getElementById('errorComment').innerHTML='';
    if (comment.length === 0) {
        document.getElementById('errorComment').innerHTML='*this field is required';
        return false;
    }
    return true;
}

function validateContactForm() {
    let email=validateEmail();
    let name=validateName();
    let comment=validateComment();
    if(email===false ||name===false||comment===false){
        return false;
    }
    return true;
}

function contactUs() {
    let validate = validateContactForm();
    if (validate === true) {
        let data = enteredLoginData();
        let postedData=JSON.stringify(data);
        fetch('https://formula-test-api.herokuapp.com/contact', {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: ''
        })
            // .then(json)
            .then(function (postedData) {
                console.log('Request succeeded with JSON response', data);
            })
            .catch(function (postedData) {
                console.log('Request failed', error);
            });
    }
}

