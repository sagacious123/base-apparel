var input = document.querySelector(".email-input");
var button = document.querySelector(".button-input");
var p = document.querySelector(".error");
var form = document.querySelector("form");
// var atPosition = input.indexOf("@");
// var dotPosition = input.lastIndexOf(".");

p.classList.add("error");

form.addEventListener("submit", function(e){
    
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(input.value.match(mailformat))
    {
    addToLocalStorage(input.value);
    input.focus();
    input.value = "";
    p.textContent = "";
   
    return true;
    
}   
    else
        {
        e.preventDefault();
        input.focus();
        p.textContent = "Please provide a valid email !";
        input.value.classList.add("input-email:invalid");
        
        return false;
    }
    

})

    function addToLocalStorage(mail) {
        var mails;
        if(localStorage.getItem('mails') === null) {
            mails = [];
        } else {
            mails = JSON.parse(localStorage.getItem('mails'));
        }
        mails.push(mail);
        localStorage.setItem('mails', JSON.stringify(mails));
    } 
    

// function ValidateEmail(inputText)
// {

// }


// form.addEventListener("submit", submitEmail
    
    
    
//     // if(atPosition < 1 || dotPosition < atPosition+2 || dotPosition+2 >= input.lenght) {
//     //     console.log("wrong!")
//     // }
// )
// function submitEmail(email) {
//     var re = /\S+@\S+\.\S+/;
//            if (re === input){    
//             return re.test(email);}
// }

// submitEmail()



// loadEvent();
 
//  function loadEvent() {
//      form.addEventListener("submit", submitEmail);
//  }
// // input.nodeType = "email";
//  function submitEmail(e) {
//     if (input.validity.patternMismatch === true) {
//         console.log("okay!")
//     } 
        
//         else {
//             p.textContent = "Please provide a valid email!";
//     }
//     input.value = "";
    
//     e.preventDefault();
//  }
//  input.value.addEventListener("unfocus", function(){
//     p.textContent = "";
//  })

//  if (input.value === "damilolaj23@gmail.com" || input.value !== "") {
//     console.log("okay!")} 
    
//     else {
//         p.textContent = "Please provide a valid email!";
// }
// input.value = "";
// e.preventDefault();
 
// input.addEventListener ("input", function() {
//     // if (input.value === "damilolaj23@gmail.com") {
//     //     console.log("okay!")} else {
//     //         p.textContent = "Please provide a valid email!";
        
//     // }
// })

// button.addEventListener ("click", function() {
//     if (input.value === "damilolaj23@gmail.com" || input.value !== "") {
//         console.log("okay!")} else {
//             p.textContent = "Please provide a valid email!";
//     }
// })

