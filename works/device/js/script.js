var open = document.querySelector(".enter");
var popup = document.querySelector(".reg-form");
var close = popup.querySelector(".form-close");
var login = popup.querySelector("[name=email]");

open.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("reg-form-open");
  login.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("reg-form-open");
});
