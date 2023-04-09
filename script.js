var button = document.getElementById("button");
var message = document.getElementById("message");

var onButtonClick = function()
{
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var atPosition = email.indexOf("@");
    var dotPosition = email.lastIndexOf(".");
    var gender = document.querySelector('input[name="gender"]:checked');
    var cricket = document.getElementById("cricket");
    var football = document.getElementById("football");
    var others = document.getElementById("others");

    if (name==null || name==""){
        message.textContent = "Name can't be blank";
    }
    else if (age < 7 || age > 60){
        message.textContent = "Invalid age";
    }
    else if (atPosition < 1 || dotPosition < atPosition+2 || dotPosition+2 >= email.length){
        message.textContent = "Please enter a valid e-mail address";
    }
    else if(gender==null){
        message.textContent = "Choose your gender";
    }
    else if((cricket.checked || football.checked || others.checked) == false){
        message.textContent = "Choose any of the sport"
    }
    else{
        message.textContent = "Information validated and found correct"
    }
}
button.addEventListener('click', onButtonClick)
