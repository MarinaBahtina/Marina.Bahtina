'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно');
    //Вход \\3.3 Появление модального окошка
    const headerButtonEnter = document.querySelector(".header__enter");
    const modalApplication = document.querySelector(".popup");
    if (headerButtonEnter && modalApplication) {
        headerButtonEnter.addEventListener("click", () => {
            console.log('нажата кнопка войти');
            modalApplication.removeAttribute("hidden");
        });

        window.addEventListener("click", (event) => {
            if (event.target === modalApplication) {
                modalApplication.setAttribute("hidden", true);
            }
        });

    }
    const closeModalButton = document.querySelector(".login__close");
    closeModalButton.addEventListener("click", () => {
        modalApplication.setAttribute("hidden", true);
    });

    //Регистрация
    const headerButtonReg = document.querySelector(".header__register");
    const modalApplicationReg = document.querySelector(".popup-reg");
    if (headerButtonReg && headerButtonReg) {
        headerButtonReg.addEventListener("click", () => {
            console.log('нажата кнопка регистрация');
            modalApplicationReg.removeAttribute("hidden");

        });
        window.addEventListener("click", (event) => {
            if (event.target === modalApplicationReg) {
                modalApplicationReg.setAttribute("hidden", true);
            }
        });
        const closeModalButtonReg = document.querySelector(".register__close");
        closeModalButtonReg.addEventListener("click", () => {
            modalApplicationReg.setAttribute("hidden", true);
        });
    }
    //3.4 Фильтр
    const buttons = document.querySelectorAll(".uslugi__btn");
    const cardsFilter = document.querySelectorAll(".uslugi__vid");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            console.log("hello");
            const filter = button.getAttribute("data-filter");
            cardsFilter.forEach((card) => {
                if (filter === "all") {
                    card.classList.remove("hidden");
                    console.log("dchhuh");
                } else {
                    if (card.classList.contains(filter)) {
                        card.classList.remove("hidden");
                    } else {
                        card.classList.add("hidden");
                    }
                }
            });
        });
    });
 

    //3.4 Часть 2 
    const trenerContainer = document.querySelector(".uslugi");
    if (trenerContainer) {
        const dataTitleTreners = [
            "Сайкл тренировка",
            "Пилатес",
            "Кардиозона",
            "Персональный тренинг",

        ];
        const titleTreners = trenerContainer.querySelectorAll(".uslugi__one");
        titleTreners.forEach((item, index) => {
            item.textContent = dataTitleTreners[index];
        });
    }
 });