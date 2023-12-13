let securty = document.getElementById ("hesab")

securty.onclick = () => {
    if(email.value == "admin" && password.value == "salam" ){
        alert("Login Ve Parol duzdur")
    }
    else{
        alert("Login parol sehvdi")
    }
}