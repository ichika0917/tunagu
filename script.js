function checkPassword() {

    const password = document.getElementById("password").value;

    if (password === "tunagu0917") {

        window.location.href = "lyrics.html";

    } else {

        alert("合言葉が違います。");

    }

}
