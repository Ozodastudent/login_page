const registerToken = localStorage.getItem("register-token");
if (loginToken) {
  window.location.href = "/index.html";
}

const elRegisterForm = document.querySelector(".register_form");
const elRegisterUserName = document.querySelector(".user_name");
const elRegisterPhone = document.querySelector(".user_phone");
const elRegisterEmail = document.querySelector(".user_email");
const elRegisterPassword = document.querySelector(".user_password");

async function registerUsers() {
  try {
    const res = await fetch("http://192.168.6.88:5000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: elRegisterUserName.value,
        phone: elRegisterPhone.value,
        email: elRegisterEmail.value,
        password: elRegisterPassword.value,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.token) {
      console.log(data);
      localStorage.setItem("register-token", data.token);
      window.location.pathname = "/index.html";
    }
  } catch (error) {
    console.log(error);
  }
}

elRegisterForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  registerUsers();
});
