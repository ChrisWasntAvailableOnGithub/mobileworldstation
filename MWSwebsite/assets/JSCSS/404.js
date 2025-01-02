// Check if the page exists
function pageExists(url) {
var http = new XMLHttpRequest();
http.open('HEAD', url, false);
http.send();
return http.status !== 404;
}

// Redirect to the 404 page if the current page doesn't exist
function redirectTo404() {
var currentPage = window.location.href;
if (!pageExists(currentPage)) {
window.location.href = '/404.html'; // Replace '/404.html' with the path to your 404 page
}
}

// Call the redirectTo404 function when the page loads
window.onload = redirectTo404;