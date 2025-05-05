let pass = document.getElementById("password");
let icon = document.getElementById("icon");
icon.onclick = function(){
    if(pass.type == "password"){
        pass.type = "text";
        icon.src = "./Icons/eye-open.png"
    }else{
        pass.type = "password";
        icon.src = "./Icons/eye-close.png"
    }
}