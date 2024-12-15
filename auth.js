(function() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn'); // Check if logged in
    const dashboard = document.getElementById('dashboard');
    const unauthorized = document.getElementById('unauthorized');

    if (isLoggedIn === 'true') {
        // User is logged in, show protected content
        unauthorized.style.display = 'none';
        dashboard.style.display = 'block';
    } else {
        // User is not logged in, show unauthorized message
        unauthorized.style.display = 'block';
        dashboard.style.display = 'none';

        // Redirect to login page after 2 seconds
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    }
})();
