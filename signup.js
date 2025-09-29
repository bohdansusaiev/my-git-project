// Модуль реєстрації
function signup(username, email, password) {
  console.log('Реєстрація користувача:', username);
  return { success: true };
}

function validateEmail(email) {
  return email.includes('@');
}
