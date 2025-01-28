function findVideos() {
    let videos = document.querySelectorAll('.promo-offer__video');

    for (let i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
    }
}

function setupVideo(video) {
    let link = video.querySelector('.video__link');
    let media = video.querySelector('.video__media');
    let button = video.querySelector('.video__button');
    let id = parseMediaURL(media);
    let videoText = document.getElementById('videoText');

    video.addEventListener('click', () => {
        let iframe = createIframe(id);

        link.remove();
        button.remove();
        video.appendChild(iframe);
        videoText.classList.add('video__text-dn');

    });

    link.removeAttribute('href');
    video.classList.add('video--enabled');
}

function parseMediaURL(media) {
    let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    // let url = media.src;
    let url = media.dataset.src;

    let match = url.match(regexp);

    if (match === null || match === undefined) {
        return "I don't know what it is"
    }
    return match[1];
}

function createIframe(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('video__media');

    return iframe;
}

function generateURL(id) {
    let query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();


const ourSwiper = new Swiper('.slider-modal__container', {
    slidesPerView: "auto",
    spaceBetween: 130,
    centeredSlides: true,
    // loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: '.slider-modal__arrow_next',
        prevEl: '.slider-modal__arrow_prev'
    }
});

document.ourSwiper = ourSwiper;
console.log("ourSwiper", ourSwiper);

// OPEN SLIDER

const openModal = document.getElementById('open-slider');
const closeModal = document.getElementById('close-slider');
const sliderModal = document.getElementById('slider-modal');
let tagBody = document.querySelector('body');
let tagHtml = document.querySelector('html');

openModal.addEventListener('click', () => {
    sliderModal.classList.add('open-slider-modal');
    tagBody.classList.add('body-lock');
    tagHtml.classList.add('body-lock');
});

closeModal.addEventListener('click', () => {
    sliderModal.classList.remove('open-slider-modal');
    tagBody.classList.remove('body-lock');
    tagHtml.classList.remove('body-lock');
});

// CHANGE DESCRIPTION
let openDescriptionButton = document.querySelector("#openDescriptionButton");
let sliderModalDescription = document.querySelector("#sliderModalDescription");

let descriptions = {
    "first": "На карте геоинформационного модуля визуализированы характеристики земельного актива и его положение относительно других объектов",
    "second": "Карточка земельного актива в системе. В одном окне можно быстро получить не только данные о земельном участке, но и информацию из модулей CRM и электронного документооборота",
    "third": "Получение любой информации о земельном активе непосредственно на карте геоинформационного модуля",
    "fourth": "Быстрый поиск по любой комбинации характеристик земельного актива",
    "fifth": "Гибкие настройки визуализации по комбинации параметров. Уникальные настройки для каждого из пользователей в зависимости от бизнес-задач",
    "sixth": "Запуск бизнес-процессов непосредственно с карты геоинформационного модуля",
    "seventh": "Все участники понимают, как исполняется тот или иной процесс, где чья зона ответственности, что уже сделано, а что еще предстоит",
    "eighth": "Множественный выбор земельных участков на карте геоинформационного модуля в зависимости от заданных фильтров",
};

openDescriptionButton.addEventListener("click", () => {

    let isVisible = !sliderModalDescription.classList.contains("la_invisible");

    if (!isVisible) {
        sliderModalDescription.classList.remove("la_invisible");
        openDescriptionButton.classList.add("la_shadow");
    } else {
        sliderModalDescription.classList.add("la_invisible");
        openDescriptionButton.classList.remove("la_shadow");
    }
});



ourSwiper.on("activeIndexChange", () => {

    switch (ourSwiper.realIndex) {
        case 0:
            sliderModalDescription.innerHTML = descriptions.first;

            break;
        case 1:
            sliderModalDescription.innerHTML = descriptions.second;

            break;
        case 2:
            sliderModalDescription.innerHTML = descriptions.third;

            break;
        case 3:
            sliderModalDescription.innerHTML = descriptions.fourth;

            break;
        case 4:
            sliderModalDescription.innerHTML = descriptions.fifth;

            break;
        case 5:
            sliderModalDescription.innerHTML = descriptions.sixth;

            break;
        case 6:
            sliderModalDescription.innerHTML = descriptions.seventh;

            break;
        case 7:
            sliderModalDescription.innerHTML = descriptions.eighth;

            break;

        default:
            sliderModalDescription.innerHTML = "Описание скоро будет =)";

            break;
    }
});

// Initialize 

sliderModalDescription.innerHTML = descriptions.first;