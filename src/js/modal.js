const bodyEl = document.body;
const modalFramesOpen = document.querySelectorAll('[data-modal-button]');
let modalFrames = document.querySelectorAll('[data-modal]');


if (modalFrames.length > 0) {
    const modalFramesClose = document.querySelectorAll('[data-modal-close]');

    for (let item of modalFramesOpen) {
        item.addEventListener('click', function (e) {
            for (let item of modalFrames) {

                item.classList.add('hidden');
                bodyEl.classList.remove('noscroll');
            }

            e.preventDefault();

            const itemAttr = item.getAttribute('data-modal-button');
            const dataTitle = item.getAttribute('data-title');
            let hideText = "";
            let testimonialText = "";

            /* testimonials */
            if (item.classList.contains('testimonials-card')) {
                hideText = item.querySelector('.testimonials-card__hide').textContent;
                testimonialText = item.querySelector('.testimonials-card__text').textContent;
            }

            for (let frame of modalFrames) {
                const frameAttr = frame.getAttribute('data-modal');
                const frameTitle = frame.querySelector('.inset-title');
                const frameText = frame.querySelector('.inset-text');
                if (frameAttr === itemAttr) {
                    frame.classList.remove('hidden');
                    bodyEl.classList.add('noscroll');
                    if (frameTitle) {
                        frameTitle.textContent = dataTitle;
                    }
                    if (hideText) {
                        frameTitle.textContent = hideText;
                    }
                    if (testimonialText) {
                        frameText.textContent = testimonialText;
                    }
                }
            }

        });
    }
    /*==  закрыть модалки  frame-modal по клику на кнопку ======*/
    for (let item of modalFramesClose) {

        item.addEventListener('click', function (e) {

            e.preventDefault();
            item.closest('[data-modal]').classList.add('hidden');
            bodyEl.classList.remove('noscroll');
        });
    }
    /*=============== закрыть модалки по клику вне ===============*/
    for (let frame of modalFrames) {

        const frameWin = frame.querySelector('.modal-window');
        frameWin.addEventListener('click', function (e) {
            if (e.target === e.currentTarget) {
                e.preventDefault();
                frame.classList.add('hidden');
                bodyEl.classList.remove('noscroll');
            }
        });
    }
};
