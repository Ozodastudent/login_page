const loginToken = localStorage.getItem("login-token");

if (!loginToken) {
  window.location.href = "/login.html";
}
