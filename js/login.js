const elLoginForm = document.querySelector(".login_form");
const elLoginEmail = document.querySelector(".login_email");
const elLoginPassword = document.querySelector(".login_password");
const elLoginEyeBtn = document.querySelector(".eye_btn");

elLoginEyeBtn.addEventListener("mousedown", () => {
  elLoginPassword.type = "text";
});
elLoginEyeBtn.addEventListener("mouseup", () => {
  elLoginPassword.type = "password";
});
elLoginEyeBtn.addEventListener("mouseout", () => {
  elLoginPassword.type = "password";
});
async function loginUsers() {
  try {
    const login = {
      email: elLoginEmail.value.trim(),
      password: elLoginPassword.value.trim(),
    };
    const res = await fetch("http://192.168.6.88:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("login-token", data.token);
      window.location.pathname = "/index.html";
    }
  } catch (error) {
    console.log(error);
  }
}

elLoginForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  loginUsers();
});
