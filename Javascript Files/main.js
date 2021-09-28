




class Account{
    constructor(uname,email,phone,password){
        this.uname = uname;
        this.phone = phone;
        this.email = email;
        this.password = password;


    }
}

let loginForm = document.getElementById('loginform');
let container = document.getElementById('container');
let signUp = document.getElementById('signup');
let register = document.getElementById('register');

// let fname = document.getElementById('fname');
// let uname = document.getElementById('uname');
// let phone = document.getElementById('phone');
// let cpassword = document.getElementById('cpassword');

function validateEmail() {
    var email = document.getElementById('email').value;
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    
    if (email.match(pattern)) {
        console.log("object")
        document.getElementById('semail').innerHTML = "Valid Email Id";
        document.getElementById('semail').style.color = "#00ff00";  
        return true;
    }else if (email == "") {
        document.getElementById('semail').innerHTML = "";
        
    }
     else {
        console.log("llll")
        document.getElementById('semail').innerHTML = "In valid";
        document.getElementById('semail').style.color = "#ff0000";  
        return false;
        
    }
}
let mainpass;
function checkPass(){
    var password = document.forms['myForm']["password"].value;
    console.log(typeof password)
    console.log(password.length)
   
    if (password.length>=5) {
        document.getElementById('spass').innerHTML = "Good pass";
        document.getElementById('spass').style.color = "#00ff00";  
        mainpass = password;
        console.log(mainpass);
        return true;


        

    }else if (password == "") {
        document.getElementById('spass').innerHTML = "";
        
    }else {
        document.getElementById('spass').innerHTML = "Not Good pass";
        document.getElementById('spass').style.color = "#ff0000";  
        return false;
        

    }
    
}
function validatePass() {
    var cpassword = document.forms['myForm']["cpassword"].value;
    
    if (cpassword == mainpass) {
        
        document.getElementById('cpass').innerHTML = "Pass matched";
        document.getElementById('cpass').style.color = "#00ff00";  
        return true;

        
    }else if (cpassword == "") {
        document.getElementById('cpass').innerHTML = "";
        
    }else{
        document.getElementById('cpass').innerHTML = "Not matched";
        document.getElementById('cpass').style.color = "#ff0000";  
        return false;

    }
    
}
function validateName() {
    var uname = document.forms['myForm']["uname"].value;
   
    if (uname.length > 4) {
        document.getElementById('sname').innerHTML = "Nice Name";
        document.getElementById('sname').style.color = "#00ff00";  
        return true;

    }else if (uname == "") {
        document.getElementById('sname').innerHTML = "";
        
    }else{
        document.getElementById('sname').innerHTML = "Please Enter Full name";
        document.getElementById('sname').style.color = "#ff0000";  
        return false;

    }

   

    
}

function  validatePhone() {
    var phone = document.forms['myForm']["phone"].value;
   
    if (phone.length ===10) {
        document.getElementById('sphone').innerHTML = "Valid Phone No";
        document.getElementById('sphone').style.color = "#00ff00";  
        return true;

    }else if (phone == "") {
        document.getElementById('sphone').innerHTML = "";
        
    }else{
        document.getElementById('sphone').innerHTML = "Invalid Phone No";
        document.getElementById('sphone').style.color = "#ff0000";  
        return false;

    }
   
}
var account = new Account();
let l1;
let l2;
let l3;
let l4;
let l5;

function validateAll() {
    l1 = validateName();
    l2 = validateEmail();
    l3 = validatePhone();
    l4 = checkPass();
    l5 = validatePass();

    if (l1&&l2&&l3&&l4&&l5) {
      var email = document.getElementById('email').value;
      var phone = document.forms['myForm']["phone"].value;
      var uname = document.forms['myForm']["uname"].value;
      var cpassword = document.forms['myForm']["cpassword"].value;
      account.uname = uname;
      account.email = email;
      account.phone=phone;
      account.password=cpassword;
      successRegister();
    //   document.write(account.uname,account.password,account.phone,account.email);   
    }
    
}
function successRegister() {
    container.style.display="none"
    document.getElementById('success').style.display="block";
    
}

document.getElementById('go').addEventListener('click',function () {
    
    console.log("object")
    document.getElementById('success').style.display="none";
    loginForm.style.display="block";
});




signUp.addEventListener('click', signUP);
register.addEventListener('click', signIN);

function signUP() {
    loginForm.style.display = "none"
    container.style.display = "block"


}

function signIN() {
    loginForm.style.display = "block";
    container.style.display = "none"

}

function validateLogin() {
    var uname1 = document.forms['loginformm']["uname1"].value;
    var password1 = document.forms['loginformm']["password1"].value;
    console.log(uname1);
    console.log(password1);
    console.log(account.uname);
    console.log(account.password);
    
    if(uname1=== account.uname && password1 === account.password ) {
        return true;
    }
    
    if (uname1 != account.uname) {
        document.getElementById('suname1').innerHTML = "User Name Not Exists , Please Register first";
        document.getElementById('suname1').style.color = "#ff0000";  
        return false
        
    }
    if (password1 !=account.password) {
        document.getElementById('spass1').innerHTML = "Wrong Password";
        document.getElementById('spass1').style.color = "#ff0000"; 
        return false

    }

    if (uname1 == "") {
        document.getElementById('suname1').innerHTML = "";
        
    }
    if (password1 == "") {
        document.getElementById('spass1').innerHTML = "";
        
    }
}
    
// function validateL() {
//     var uname1 = document.forms['loginformm']["uname1"].value;
//     console.log(uname1);
//     console.log(account.uname);
//     if (account.uname =="") {
//         console.log("account name is empty")
//     }
//     else if (uname1==account.uname) {
//         document.getElementById('suname1').innerHTML = "User Name  Matching";
//         document.getElementById('suname1').style.color = "#00ff00";  
//     }else{
//         document.getElementById('suname1').innerHTML = "User Name Not Matching";
//         document.getElementById('suname1').style.color = "#ff0000";  
//     }
// }
// function validateLa() {
//     var password1 = document.forms['loginformm']["password1"].value;
//     console.log(account.password)
//     console.log(password1);
//     if (account.password =="") {
//         console.log("account password is empty")
//     }
//     else if (password1==account.password) {
//         console.log("object")
//     }else{
//         console.log("not")
//     }
// }