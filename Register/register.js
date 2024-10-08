window.onload = pageLoad;

function pageLoad() {
    const registerForm = document.getElementById("myRegister");
    registerForm.onsubmit = validateForm;
}

function validateForm() {
    // ดึงข้อมูลจาก form
    const password = document.forms["myRegister"]["password"][0].value;
    const retypePassword = document.forms["myRegister"]["password"][1].value;
    const username = document.forms["myRegister"]["username"].value;

    // ตรวจสอบว่า password และ retype password ตรงกันหรือไม่
    if (password !== retypePassword) {
        document.getElementById("errormsg").innerText = "Passwords do not match!";
        return false;
    }

    // บันทึกข้อมูลลงใน LocalStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration successful!");
    return true;
}
