document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalTriggers = document.querySelectorAll('.js-open-modal');

    modalTriggers.forEach(btn => {
        btn.addEventListener('click', () => {
            const title = btn.getAttribute('data-title');
            const details = btn.getAttribute('data-details');
            
            if (title) modalTitle.textContent = title;
            if (details) modalContent.textContent = details;
            
            modal.showModal();
        });
    });

    modalCloseBtn.addEventListener('click', () => {
        modal.close();
    });

    modal.addEventListener('click', (e) => {
        const rect = modal.getBoundingClientRect();
        const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
        if (!isInDialog) {
            modal.close();
        }
    });

    const form = document.getElementById('feedbackForm');
    const formMessage = document.getElementById('formMessage');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); 
            formMessage.textContent = 'Спасибо! Ваше сообщение отправлено.';
            formMessage.style.color = '#5ccb90'; 
            form.reset();
            
            setTimeout(() => {
                formMessage.textContent = '';
            }, 5000);
        });
    }

    const slider = document.getElementById('gallerySlider');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    
    if (slider && btnPrev && btnNext) {
        
        const getScrollAmount = () => {
            const item = slider.querySelector('.slider__item');
            if (!item) return 0;
            return item.offsetWidth + 20; 
        };

        btnNext.addEventListener('click', () => {
            slider.scrollBy({
                left: getScrollAmount(),
                behavior: 'smooth'
            });
        });

        btnPrev.addEventListener('click', () => {
            slider.scrollBy({
                left: -getScrollAmount(),
                behavior: 'smooth'
            });
        });
    }
});