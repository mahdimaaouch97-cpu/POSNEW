// auth.js

function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    if (!username || !password) {
        error.innerText = "يرجى إدخال اسم المستخدم وكلمة المرور";
        return;
    }

    // بيانات دخول بسيطة (لاحقًا يمكن ربطها بقاعدة بيانات)
    if (username === "admin" && password === "admin") {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("user", username);
        window.location.href = "index.html";
    } else {
        error.innerText = "بيانات الدخول غير صحيحة";
    }
}
