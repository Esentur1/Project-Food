function tabs() {
    const tabs = document.querySelectorAll('.tabheader__item'), //Создаем коллекцию табов
          tabsContent = document.querySelectorAll('.tabcontent'), //Коллекция описания табов
          tabsParent = document.querySelector('.tabheader__items'); //Родительский элемент табов

    //Создаём функцию по скрыванию табов
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }
    //Создаём фнкцию по показу табов
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('mousemove', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;