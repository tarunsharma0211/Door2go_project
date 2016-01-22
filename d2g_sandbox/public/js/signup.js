function formValidate() {
    
    //Firt name
    var x = document.forms["Registration Page"]["fname"].value;
    if (x == null || x == "") {
        alert("Please enter the first name.");
        return false;
    }
    var letters = /^[A-Za-z]+$/;
    if (!(document.forms["Registration Page"]["fname"].value.match(letters))) {
        alert("First name must have alphabets only.");
        return false;
    }
    
    //Last name
    var x = document.forms["Registration Page"]["lname"].value;
    if (x == null || x == "") {
        alert("Please enter the last name.");
        return false;
    }
    if (!(document.forms["Registration Page"]["lname"].value.match(letters))) {

        alert("Last name must have alphabets only");
        return false;
    }
    
    //Email
    var x = document.forms["Registration Page"]["email"].value;
    if (x == null || x == "") {
        alert("E-mail Id cannot be an empty field");
        return false;
    }
    var x = document.forms["Registration Page"]["email"].value;
    var y = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!y.test(x)) {
        alert("Please enter a valid Email address.");
        return false;
    }

    //Phone number
    var x = document.forms["Registration Page"]["pnumber"].value;
    if (x == null || x == "") {
        alert("Please enter Phone number");
        return false;
    }
    var number = /^[0-9]+$/;
    if (!(document.forms["Registration Page"]["pnumber"].value.match(number))) {
        alert("Phone number can only contain numbers");
        return false;
    }
    
//City
    var x = document.forms["Registration Page"]["city"].value;
    if (x == null || x == "") {
        alert("Please enter your city");
        return false;
    }
    var letters = /^[A-Za-z]+$/;
    if (!(document.forms["Registration Page"]["city"].value.match(letters))) {
        alert("City name must have alphabets only.");
        return false;
    }

    send_data();

}