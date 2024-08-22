document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.service');

    sections.forEach(section => {
        section.addEventListener('click', () => {
            alert(`Você clicou em ${section.querySelector('h2').innerText}`);
        });
    });
});
