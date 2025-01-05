// static/js/script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is working!');
    document.getElementById('mobile-menu-button').addEventListener('click', function() {
        var menu = document.getElementById('mobile-menu');
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }
    });
});