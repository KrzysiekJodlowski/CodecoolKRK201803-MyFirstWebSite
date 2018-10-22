window.onscroll = function()
{
    if (pageYOffset >= 300) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
};

function checkIfFormIsFull()
{
    var form = document.forms["contactForm"].elements;;
    var canSubmit = true;

    for (var i = 0; i < form.length; i++) {
        if (form[i].value.length == 0) canSubmit = false;
    }
    document.getElementById('submitButton').disabled = !canSubmit;
}

function validateForm()
{
    var nameValidation = validateName();
    var emailValidation = validateEmail();
    var messageValidation = validateMessage();

    if (!nameValidation || !emailValidation || !messageValidation) {
        return false;
    }
    confirmAndClearForm();
    return true;
}

function validateName()
{
    var userName = document.getElementById("name").value.trim();
    var isValid = /^[A-ZŻŹĆĄŚĘŁÓŃ][a-zzżźćńółęąś]{1,16}\s[A-ZŻŹĆĄŚĘŁÓŃ][a-zzżźćńółęąś]{1,16}$/.test(userName);

    if (isValid) {
        document.getElementById("name").style.borderColor = "green";
        document.getElementById("contactNameError").style.display = "none";
        return true;
    } else {
        document.getElementById("name").style.borderColor = "red";
        document.getElementById("contactNameError").style.display = "block";
        return false;
    }
}
function validateEmail()
{
    var userEmail = document.getElementById("eMail").value.trim();
    var isValid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(userEmail);

    if (isValid) {
        document.getElementById("eMail").style.borderColor = "green";
        document.getElementById("contactEmailError").style.display = "none";
        return true;
    } else {
        document.getElementById("eMail").style.borderColor= "red";
        document.getElementById("contactEmailError").style.display = "block";
        return false;
    }
}
function validateMessage()
{
    var userMessage = document.getElementById("message").value.trim();
    var isValid = /.{10,}/.test(userMessage);

    if (isValid) {
        document.getElementById("message").style.borderColor = "green";
        document.getElementById("contactMessageError").style.display = "none";
        return true;
    } else {
        document.getElementById("message").style.borderColor= "red";
        document.getElementById("contactMessageError").style.display = "block";
        return false;
    }
}
function confirmAndClearForm()
{
    document.getElementById("contactForm").reset();
    document.getElementById("name").style.borderColor = "initial";
    document.getElementById("eMail").style.borderColor = "initial";
    document.getElementById("message").style.borderColor = "initial";
    alert("Your message has been sent!")    
}