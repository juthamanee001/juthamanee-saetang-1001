window.onload = loginLoad;

function loginLoad() {
    const loginForm = document.getElementById("myLogin");
    loginForm.onsubmit = checkLogin;
}

function checkLogin() {
    // ดึงข้อมูล username และ password จาก form
    const username = document.getElementById("username").value;
    const password = document.forms["myLogin"]["password"].value;

    // ดึงข้อมูลจาก LocalStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // ตรวจสอบว่า username และ password ตรงกันหรือไม่
    if (username === storedUsername && password === storedPassword) {
        alert("Login successful!");
        return true;
    } else {
        alert("Username or password is incorrect. Please try again.");
        return false;
    }
}
