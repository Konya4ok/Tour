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

let current = 0;
const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');

function currentSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  current = index;
}

// Автоматичне переключення кожні 5 секунд (необов’язково)
setInterval(() => {
  let next = (current + 1) % slides.length;
  currentSlide(next);
}, 5000);