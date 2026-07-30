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

        alert("成功！次回から歌詞ページへ進みます🌇");

    }else{

        document.getElementById("errorMessage").textContent="パスワードが違います。";

    }

});
