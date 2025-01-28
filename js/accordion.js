document.querySelectorAll('.accordion-item__title').forEach((item) =>
    item.addEventListener('click', () => {
        if (window.innerWidth < 1024) {
            const parent = item.parentNode;

            parent.classList.toggle('accordion-item--active');
        }
    })
)