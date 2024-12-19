function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if ((username === 'Normyan' && password === 'Normyan.0809') ||
        (username === 'Ceshi' && password === 'Ceshiceshi')) {
        message.style.color = 'green';
        message.textContent = '登录成功！';

        // Store login status in session storage
        sessionStorage.setItem('isLoggedIn', 'true');

        // Get the previous page URL or default to homepage
        const redirectTo = document.referrer || 'index.html';

        // Redirect to the previous page or homepage
        setTimeout(() => {
            window.location.href = redirectTo;
        }, 1000);
    } else {
        message.style.color = 'red';
        message.textContent = '账号或密码错误！';
    }
}
