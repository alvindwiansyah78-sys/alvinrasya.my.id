function showMessage() {
    alert(
        "Selamat Datang di Portfolio Alvin Rasya Dwiansyah!\n\nGraphic Designer | Video Editor | Tenaga Administrasi"
    );
}

// Efek muncul saat scroll
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if(position < screen - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.8s";
});