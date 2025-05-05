const slides = document.querySelector('.slides');
const reviews = document.querySelectorAll('.review');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

function showSlide(i) {
    index = (i + reviews.length) % reviews.length;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

prev.addEventListener('click', () => showSlide(index - 1));
next.addEventListener('click', () => showSlide(index + 1));

// Optional: auto-slide
setInterval(() => showSlide(index + 1), 5000);

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        document.getElementById('modal-title').innerText = this.getAttribute('data-place');
        document.getElementById('modal-description').innerText = this.getAttribute('data-info');
        document.getElementById('modal-price').innerText = "Ціна: " + this.getAttribute('data-price');
        
        // Беремо src картинки з картки
        const imgSrc = this.querySelector('img').getAttribute('src');
        document.getElementById('modal-image').setAttribute('src', imgSrc);

        document.getElementById('modal').style.display = 'block';
    });
});

// Закриття модалки
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Закриття кліком поза модалкою
window.addEventListener('click', function(e) {
    if (e.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});

// Поведінка кнопки купівлі
document.getElementById('buy-button').addEventListener('click', function() {
    alert("Переходимо до купівлі квитка!");
});
