document.addEventListener('DOMContentLoaded', function() {
    const navButton = document.getElementById('gNav-open');
    const navMenu = document.querySelector('.headerNav');

    navButton.addEventListener('click', function() {
        navMenu.classList.toggle('open');
    });

    // フォーム送信イベント
    const form = document.querySelector('.contact form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('フォームが送信されました！');
    });
});
