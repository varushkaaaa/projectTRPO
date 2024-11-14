function validateForm() {
    // Считываем значения из полей формы
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorMessage = document.getElementById('errorMessage');

    // Очищаем сообщение об ошибке
    errorMessage.innerHTML = "";

    // Проверяем, чтобы пароли совпадали
    if (password !== confirmPassword) {
        errorMessage.innerHTML = "Пароли не совпадают!";
        return false;
    }

    // Можно добавить дополнительные проверки для пароля и имени
    if (username.trim() === "") {
        errorMessage.innerHTML = "Имя пользователя не может быть пустым!";
        return false;
    }

    if (password.length < 6) {
        errorMessage.innerHTML = "Пароль должен быть не менее 6 символов!";
        return false;
    }

    // Если все проверки прошли успешно
    alert("Регистрация прошла успешно!");
    return true;
}
function login() {
    window.location.href = "login.html";  // Перенаправление на страницу входа
}

function register() {
    window.location.href = "register.html";  // Перенаправление на страницу регистрации
}
function main() {
    window.location.href = "main.html";  // Перенаправление на главную страницу
}

// Функция для навигации по разделам, например, к контактам, оплате, доставке и отзывам
function navigateTo(section) {
    switch (section) {
        case 'contacts':
            window.location.href = '/contacts.html'; // Переход на страницу "Контакты"
            break;
        case 'payment':
            window.location.href = '/payment.html'; // Переход на страницу "Оплата"
            break;
        case 'delivery':
            window.location.href = '/delivery.html'; // Переход на страницу "Доставка"
            break;
        case 'reviews':
            window.location.href = '/reviews.html'; // Переход на страницу "Отзывы"
            break;
    }
}
function navigateToG(section) {
    switch (section) {
        case 'guitars':
            window.location.href = '/guitars.html'; // Переход на страницу "Гитары"
            break;
        case 'synthesizers':
            window.location.href = '/synthesizers.html'; // Переход на страницу "Оплата"
            break;
        case 'microphones':
            window.location.href = '/microphones.html'; // Переход на страницу "Доставка"
            break;
        case 'equip':
            window.location.href = '/equip.html'; // Переход на страницу "Отзывы"
            break;
    }
}
function scrollCategories(direction) {
    const categories = document.querySelector('.categories');
    const scrollAmount = 300; // Увеличим прокрутку для удобства

    if (direction === 'left') {
        categories.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        categories.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}


