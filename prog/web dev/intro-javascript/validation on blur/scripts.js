const passwordInput = document.getElementById('password-input');
const confirmPassword = document.getElementById('confirm-password');
const errorMsg = document.getElementById('error-message');

confirmPassword.addEventListener('blur', ($event) => {
  if (confirmPassword.value === passwordInput.value) {
   passwordInput.style.border ="thin solid green"; errorMsg.style.display='none';
  } else {
    passwordInput.style.border ="thin solid red"; errorMsg.style.display='inline';
  }
});
