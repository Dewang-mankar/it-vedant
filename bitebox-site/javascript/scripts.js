function login()
{
    let email=document.getElementById("email").value;
    let password=document.getElementById("pass").value;
    let error=document.getElementById("error");
    if(email==="admin@123" && password==="pass123")
    {
        localStorage.setItem("is loggedIn","true");
        localStorage.setItem("user",email);
        window.location.href="index.html";
    }
    else{
        error.innerText="no access.";
    }
      
}