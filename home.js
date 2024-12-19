(function() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn'); // Check if logged in
    const mainContent = document.getElementById('mainContent');
    const loginStatus = document.getElementById('loginStatus');

    if (isLoggedIn === 'true') {
        // Show login status and load protected content dynamically
        loginStatus.style.display = 'block';

        // Dynamically load external content.js
        loadScript('content.js', function() {
            loadProtectedContent(); // Call the function from content.js to insert content
        });
    } else {
        // Redirect to login page if not logged in
        window.location.href = 'login.html';
    }
})();

function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
}
