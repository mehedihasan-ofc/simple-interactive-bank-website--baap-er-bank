document.getElementById("btn-submit").addEventListener("click", function () {
    const userInputEmail = document.getElementById("user-email");
    const userEmail = userInputEmail.value;

    const userInputPassword = document.getElementById("user-password");
    const userPassword = userInputPassword.value;

    if (userEmail === "mehedi.ofcc@gmail.com" && userPassword === "258000") {
        location.href = "bank.html";
    }
    else {
        alert("Authentication Failed")
    }

    userInputPassword.value = "";
})