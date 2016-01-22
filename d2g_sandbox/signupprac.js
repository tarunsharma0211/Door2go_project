function formValidate()
{
    var flag =0;
    var error_array = [];
    var error = false;
    var first_name = $("#first_name").val();
    var last_name = $("#last_name").val();
    var email = $("#email").val();
    var password = $("#password").val();
    
    
    var nameregex = /^[A-Za-z]+$/; 
    if(!nameregex.test(first_name))   
    {  
            $('#error_fname').html('First name can contain only alphabets');
            flag++;
    } 
    
    if(!nameregex.test(last_name_name))   
    {  
            $('#error_lname').html('last name can contain only alphabets');
            flag++;
    } 
    

    var emailregex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!emailregex.test(email))
    {	
        $('#error_mail').html('Please enter valid email');
        return false;
        flag++;
    }
    
    
    var pass = /^(\d+[a-z]|[a-z]+\d)[a-z\d]*$/;
    if(!pass.test(password))   
    {	
    $('#error_pass').html('Password should be alphanumeric');
        return false;
            flag++;
    } 
      
}