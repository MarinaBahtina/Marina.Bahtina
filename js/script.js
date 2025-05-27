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
    }
        window.addEventListener("click", (event) => {
            if (event.target === modalApplication) {
                modalApplication.setAttribute("hidden", true);
            }
        });


    const closeModalButton = document.querySelector(".login__close");
    closeModalButton.addEventListener("click", () => {
        modalApplication.setAttribute("hidden", true);
    });


    //Регистрация
    const headerButtonReg = document.querySelector(".header__register");
    const modalApplicationReg = document.querySelector(".popup-reg");
    if (headerButtonReg && modalApplicationReg) {
        headerButtonReg.addEventListener("click", () => {
            console.log('нажата кнопка регистрация');
            modalApplicationReg.removeAttribute("hidden");

        });
    }
        window.addEventListener("click", (event) => {
            if (event.target === modalApplicationReg) {
                modalApplicationReg.setAttribute("hidden", true);
            }
        });
        const closeModalButtonReg = document.querySelector(".register__close");
        closeModalButtonReg.addEventListener("click", () => {
            modalApplicationReg.setAttribute("hidden", true);
        });

        //3.7 ИСПОЛЬЗОВАНИЕ LOCALSTORAGE 
        // Объявляем переменную formApplication и помещаем в нее элемент с id "formApplication"
const formApplication = document.querySelector("#formApplication"); 
// Проверяем, существует ли элемент formApplication
if (formApplication) {  
    // Добавляем обработчик события для отправки формы
   formApplication.addEventListener("submit", (event) => {
     event.preventDefault(); // Предотвращаем отправку формы
    // Объявляем переменные "username", "tel","email",   и помещаем в нее элементы с id из формы
     const username = formApplication.querySelector("#username").value;
     const number = formApplication.querySelector("#number").value;
     const email = formApplication.querySelector("#email").value;
     const tel = formApplication.querySelector("#tel").value;
     
     // Объявляем переменную modalMessage и помещаем в нее элемент для отображения сообщений о статусе заявки
const modalMessage = modalApplicationReg.querySelector("#application-message");
    
      // Проверка длины имени пользователя
      if (username.length < 3) {
         modalMessage.textContent = "Имя пользователя должно содержать не менее 3 символов";
         modalMessage.style.color = "black"; // Устанавливаем цвет сообщения об ошибке
         return;
      }
    
       // Проверка номера телефона
      if (!/^\d{10,}$/.test(tel)) {
          modalMessage.textContent = "Номер телефона должен содержать только цифры и быть не менее 10 символов";
          modalMessage.style.color = "black"; // Устанавливаем цвет сообщения
          return;
      }
    
      // Здесь можно добавить отправку данных на сервер
      modalMessage.textContent = "Заявка отправлена!";
      modalMessage.style.color = "green"; // Устанавливаем цвет сообщения для успешной отправки
    
      // Записываем данные в localStorage
      window.localStorage.setItem("username", username);
      window.localStorage.setItem("tel", tel);
      window.localStorage.setItem("email", email);
});

 
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
    //3.5
    const cardsPrice = document.querySelector('.trainers');
    if (cardsPrice) {
        const priceList = cardsPrice.querySelector('.treiners__wrap');
        const cardsPriceData = {
            trener1: {
                image: 'images/t-1.jpg',
                name: 'Петров Андрей Сергеевич',
                description: 'СПЕЦИАЛИЗАЦИЯ • Разработка методики оздоровления ослабшего организма и организма человека пожилого возраста; • Разработка индивидуальных тренировочных программ людям с поражением опорно-двигательного аппарата;• Применение современных методик тренировок в том числе и по системе Бубновского С.; • Постановка техники выполнения упражнений на тренажере Бубновского.',

            },
            trener2: {
                image: 'images/t-2.jpg',
                name: 'Сидоров Павел Николаевич',
                description: 'СПЕЦИАЛИЗАЦИЯ • Силовой тренинг• Коррекция веса тела  • Построение индивидуальных планов питания • Коррекция дефицитных состояний организма• Работа с анализами  • Набор мышечной массы • Функциональный тренинг • Восстановление после травм и операций, • Подготовка к соревнованиям по бодибилдингу, классическому бодибилдингу, бикини.',

            },
            trener3: {
                image: 'images/t-3.jpg',
                name: 'Домрачева Анна Владимировна',
                description: 'СПЕЦИАЛИЗАЦИЯ • Персональный тренинг в тренажерном зале: набор мышечной массы, коррекция фигуры и осанки; • Женский и детский кроссфит; • Восстановление после травм; • ЛФК при нарушениях опорно-двигательного аппарата; • Инструктор групповых направлений по силовой аэробике, стретчингу, калланетике, здоровомупозвоночнику; • Любая возрастная группа.',

            }
        }

        const createCard = (image, name, description) => {
            const card = `
            <li class="trainers__cards">
            <img class="trainers__image" src="${image}" alt="фотография тренера" width="300">
                <p class="trainers__name">${name}</p>
                <p class="trainers__description">${description}</p>
                
            </li>
        `;
            return card;
        }
        for (const cardKey in cardsPriceData) {
            const card = cardsPriceData[cardKey];
            const cardElement = createCard(card.image, card.name, card.description,);
            priceList.insertAdjacentHTML('beforeend', cardElement);
        }
    }


//3.6 Часть 1
const cardsCon = document.querySelector(".zal");
if (cardsCon) {
    const cardList = cardsCon.querySelector(".zal__wrapper");

    // Пример URL для получения данных с сервера
    const apiUrl = "data.json";

    // Функция для создания карточки
    const createCard = (
        title,
        image,
        iconAlt,
        iconWidth,
        iconHeight
    ) => {
        // Шаблонные строки и подстановки
        const card = `
             <div class="zal__wrap">
                <p class="zal__vid">${title}</p>
                <img class="zal__image" src="${image}" alt="${iconAlt}" width="${iconWidth}" height="${iconHeight}">
            </div>
         `;
        return card;
    };
    // Загрузка данных с сервера
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data); // Данные
            console.log(typeof data); // Тип полученных данных

            data.forEach((item) => {
                const cardElement = createCard(
                    item.title,
                    item.image,
                    item.iconAlt,
                    item.iconWidth,
                    item.iconHeight
                );
                cardList.insertAdjacentHTML("beforeend", cardElement);
            });
        })
        .catch((error) => {
            console.error("Ошибка при загрузке данных:", error);
        });

};
//3.6 Часть 2
const preloader = document.querySelector(".preloader");
const content = document.querySelector(".content");
if (preloader && content) {
    setTimeout(() => {
        // Скрываем прелоадер
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";

        // Показываем контент
        content.style.display = "block";

        // Удаляем элемент из DOM
        preloader.remove();
    }, 3000); // Задержка 3 секунды
}
}}
);
//3.7 Часть 1
// объявляем переменную sliders,куда помещаем элемент с классом swiper
const sliders = document.querySelector('.swiper');
//проверяем существует ли элемент
    if (sliders) {
        const swiper1 = new Swiper(sliders, {
            // Пагинация
            pagination: {
                el: '.swiper-pagination',
                type: "fraction",
            },

            // Навигационные стрелки
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
        },
        });
    }


