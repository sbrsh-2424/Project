var button = document.getElementById("button");
var message = document.getElementById("message");

var onButtonClick = function()
{
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var atPosition = email.indexOf("@");
    var dotPosition = email.lastIndexOf(".");

    if (name==null || name==" "){
        message.textContent = "Name can't be blank";
    }
    else if (age < 7 || age > 60){
        message.textContent = "Invalid age";
    }
    else if (atPosition < 1 || dotPosition < atPosition+2 || dotPosition+2 >= email.length){
        message.textContent = "Please enter a valid e-mail address";
    }
    else{
        message.textContent = "Information validated and found correct"
    }
}
button.addEventListener('click', onButtonClick)