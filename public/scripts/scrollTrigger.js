const options = document.querySelectorAll('.option');
const cards = document.querySelectorAll('.card');
const container = document.querySelector('.right-container');
let activeIndex = 0;

function updateActiveOption() {
    options.forEach(opt => opt.classList.remove('active'));
    options[activeIndex].classList.add('active');
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const targetId = entry.target.id;
            activeIndex = Array.from(cards).findIndex(card => card.id === targetId);
            updateActiveOption();
        }
    });
}, { threshold: 0.5 });

cards.forEach(card => {
    observer.observe(card);
});

options.forEach((option, index) => {
    option.addEventListener('click', () => {
        activeIndex = index;
        updateActiveOption();
        cards[activeIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});