// content.js - contains the protected content
const protectedContent = `
    <h2>Protected Content</h2>
    <ul>
        <li>Item 1: Sensitive information</li>
        <li>Item 2: Reports</li>
        <li>Item 3: Settings</li>
    </ul>
`;

function loadProtectedContent() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = protectedContent; // Insert content dynamically
}
