const toast = document.getElementById('toast');
let toastTimer;

document.querySelectorAll('.order-button').forEach((button) => {
    button.addEventListener('click', () => {
        toast.textContent = `${button.dataset.drink} added to your order!`;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
    });
});
