const enterButton = document.getElementById("enterButton");
const passwordBox = document.getElementById("passwordBox");

enterButton.addEventListener("click",()=>{

    enterButton.style.display="none";

    passwordBox.style.display="block";

});

const loginButton=document.getElementById("loginButton");

loginButton.addEventListener("click",()=>{

    const password=document.getElementById("passwordInput").value;

    if(password==="TSUNAGU917"){

        location.href = "lyrics.html";

    }else{

        document.getElementById("errorMessage").textContent="パスワードが違います。";

    }

});
