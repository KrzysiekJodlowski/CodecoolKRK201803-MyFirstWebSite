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
    var cansubmit = true;

    for (var i = 0; i < form.length; i++) {
        if (form[i].value.length == 0) cansubmit = false;
    }
    document.getElementById('submitButton').disabled = !cansubmit;
}

function validateForm()
{
    var nameValidation = validateName();
    var emailValidation = validateEmail();

    if (!nameValidation || !emailValidation) {
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
        return true;
    } else {
        document.getElementById("name").style.borderColor = "red";
        errorUserNameMessage();
        return false;
    }
}
function validateEmail()
{
    var userEmail = document.getElementById("eMail").value.trim();
    var isValid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(userEmail);

    if (isValid) {
        document.getElementById("eMail").style.borderColor = "green";
        return true;
    } else {
        document.getElementById("eMail").style.borderColor= "red";
        errorUserEmailMessage();
        return false;
    }
}
function errorUserNameMessage()
{
    alert("Name field should contain only two words containing only letters" +
        " (first letter uppercase) and space between them!");
}
function errorUserEmailMessage()
{
    alert("E-mail field should contain valid e-mail adress!");
}
function confirmAndClearForm()
{
    document.getElementById("contactForm").reset();
    document.getElementById("name").style.borderColor = "initial";
    document.getElementById("eMail").style.borderColor = "initial";
    alert("Your message has been sent!")    
}