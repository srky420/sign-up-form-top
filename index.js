function handleChange() {
  const passwordField = document.querySelector('input[name="password"]');
  const confirmationField = document.querySelector('input[name="confirmation"]');

  if (passwordField.value !== confirmationField.value) {
    passwordField.setCustomValidity('Invalid field.');
    confirmationField.setCustomValidity('Invalid field.');
  }
  else {
    passwordField.setCustomValidity('');
    confirmationField.setCustomValidity('');
  }

  console.log(passwordField.value, confirmationField.value);
}