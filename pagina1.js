const modal = document.getElementById("registerModal");
const btn = document.getElementById("openRegister");
const form = document.getElementById("registerForm");
const close = document.querySelector(".close");

btn.addEventListener("click", () => {
    modal.classList.add("active");
});

close.addEventListener("click", () => {
    modal.classList.remove("active");
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Registro completado");
    modal.classList.remove("active");
});