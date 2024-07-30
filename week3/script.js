const cpass_field = document.querySelector('.cpassword');
const cshow_btn = document.querySelector('.cshow');
cshow_btn.addEventListener('click', function () {
    if (cpass_field.type == "password") {
        cpass_field.type = "text";
        cshow_btn.style.color = "#3498db";
        cshow_btn.textContent = "Hide"
    } else {
        cpass_field.type = "password";
        cshow_btn.style.color = "#222";
        cshow_btn.textContent = "Show"
    }
});