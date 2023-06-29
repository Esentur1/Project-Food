function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector) {
    const modalTrigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    // const modalClose = document.querySelector('[data-close]');

    modalTrigger.forEach((element) => {
        element.addEventListener('click', (event) => {
            const target = event.target;
            if (target) {
                openModal(modalSelector);
            }
        });
    });

    // modalClose.addEventListener('click', (event) => {
    //     const target = event.target;
    //     if (target) {
    //         closeModal();
    //     }
    // });

    modal.addEventListener('click', (event) => {
        const target = event.target;
        if ((target && target.classList.contains('modal')) || (target.getAttribute('data-close') == '')) {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') { //&& modal.style.display === 'none') {
            closeModal(modalSelector);
        }
    });

    const modalTimerId = setTimeout(openModal, 3000);
    // function showConsole() {
    //     console.log(window.pageYOffset + document.documentElement.clientHeight);
    //     console.log(document.documentElement.scrollHeight);
    // }
    // setInterval(showConsole, 1000);

    function showModalByScroll () {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal(modalSelector);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {openModal};
export {closeModal};