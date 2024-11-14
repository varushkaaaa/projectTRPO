function validateLogin() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const errorMessage = document.getElementById("loginErrorMessage");

    // Пример простой проверки
    if (username === "user" && password === "password") {
        errorMessage.textContent = "";
        alert("Вход выполнен успешно!"); // Сообщение для примера
        return true; // Продолжить отправку формы
    } else {
        errorMessage.textContent = "Неверное имя пользователя или пароль!";
        return false; // Остановить отправку формы
    }
}
