function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if ((username === 'Normyan' && password === 'Normyan.0809') ||
        (username === 'Ceshi' && password === 'Ceshiceshi')) {
        message.style.color = 'green';
        message.textContent = '登录成功！';

        // Save authentication state in session storage
        sessionStorage.setItem('isLoggedIn', 'true');

        // Redirect to dashboard.html after 1 second
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
    } else {
        message.style.color = 'red';
        message.textContent = '账号或密码错误！';
    }
}
