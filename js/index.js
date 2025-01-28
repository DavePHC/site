// Open hidden-info

// Main function to open hidden items
let toggleMenu = (el1, className1, el2, className2) => {

	el1.classList.toggle(className1);
	el2.classList.toggle(className2);
}

let callback = (e, el1, el2, containedClass, subClass) => {
	
	let target = e.target;
	let its_hiddenInfo = target == el1 || el1.contains(target);
	let its_contactSUs = target == el2;

	let menu_is_active = el1.classList.contains(containedClass);

	if (!its_hiddenInfo && !its_contactSUs && menu_is_active) {
		toggleMenu(el1, containedClass, el2, subClass);

	}
}

// Open Contact Us

let contactSUs = document.getElementById('contacts-us');
let hiddenInfo = document.getElementById('hidden-info');

contactSUs.addEventListener('click', e => {
	e.stopPropagation();

	toggleMenu(hiddenInfo, 'hidden-info-open', contactSUs, 'contacts-us__button-active');
});

document.addEventListener('click', e => {
	return callback(e, hiddenInfo, contactSUs, 'hidden-info-open', 'contacts-us__button-active');
});


// Menu Dropdown

let showDropdown = document.getElementById('dropdown-button');
let dropDownList = document.getElementById('dropdown-list');

showDropdown.addEventListener('click', e => {
	e.stopPropagation();
	toggleMenu(dropDownList, 'navigation__list-open', showDropdown, 'main-list__item_dropdown-active');
});

window.addEventListener('click', e => {

	let target = e.currentTarget;
	console.dir(target);
	console.log("e", e);
	let res = e.path.includes(el => {
		return el.id === dropDownList.id;
	})
	console.log("res", res);
	// return callback(e, dropDownList, showDropdown, 'dropdown-list-open', 'main-list__item_dropdown-active');
});

// Open burger menu

let burger = document.getElementById('burger');
let burgerMenu = document.getElementById('burger-menu');
const body = document.querySelector('body');
const docHtml = document.querySelector('html');

burger.addEventListener('click', e => {
	e.stopPropagation();

	toggleMenu(burgerMenu, 'active', burger, 'ac');

	if (document.documentElement.clientWidth <= 600 && burgerMenu.classList.contains('active')) {
		console.log('aaa');
		body.classList.add('body-lock');
		docHtml.classList.add('body-lock');
	} else {
		// body.classList.remove('body-lock');
	}
});

window.addEventListener('resize', ()=>{
	if(document.documentElement.clientWidth > 600) {
		body.classList.remove('body-lock');
		docHtml.classList.remove('body-lock');
	}
})

document.addEventListener('click', e => callback(e, burger, burgerMenu, 'active', 'ac'));

let burgerClose = document.getElementById('burger-close');

burgerClose.addEventListener('click', e => {
	burgerMenu.classList.remove('active');
	body.classList.remove('body-lock');
	docHtml.classList.remove('body-lock');
});

// POP-UP WINDOW

const CLASS_LIST = {
	MODAL: 'modal',
	MODAL_ACTIVE: 'modal--active',
	BODY_LOCK: 'lock',
	MODAL_HAS_SCROLL: 'pop-up-has-scroll',
	TRIGGER_OPEN: 'js-modal-open',
	TRIGGER_CLOSE: 'js-modal-close',
};

const showScroll = (event) => {
	if (event.propertyName === 'transform') {

		document.body.style.paddingRight = '';
		document.body.style.overflow = 'visible';
		document.body.style.overflowX = 'hidden';

		event.target.closest(`.${CLASS_LIST.MODAL}`).removeEventListener('transitionend', showScroll);
	}
};

document.addEventListener('click', (event) => {
	//open
	if (event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`)) {
		event.preventDefault();

		const target = event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`);

		const modalId = target.getAttribute('href').replace('#', '');

		const modal = document.getElementById(modalId);

		document.body.style.paddingRight = `${getScrollbarWidth()}px`;
		
		document.body.style.overflow = "hidden";

		modal.classList.add(CLASS_LIST.MODAL_ACTIVE);
	}
	//close
	if (event.target.closest(`.${CLASS_LIST.TRIGGER_CLOSE}`) || event.target.classList.contains(CLASS_LIST.MODAL_ACTIVE)) {
		event.preventDefault();

		const modal = event.target.closest(`.${CLASS_LIST.MODAL}`);

		modal.classList.remove(CLASS_LIST.MODAL_ACTIVE);

		modal.addEventListener('transitionend', showScroll)
	}
})

const getScrollbarWidth = () => {
	const item = document.createElement('div');

	item.style.position = 'absolute';
	item.style.top = '-9999px';
	item.style.width = '50px';
	item.style.height = '50px';
	item.style.overflow = 'scroll';
	item.style.visibility = 'hidden';


	document.body.appendChild(item);
	const scrollBarWidth = item.offsetWidth - item.clientWidth;
	document.body.removeChild(item);

	return scrollBarWidth
}

// ACTIVE MENU ITEM

document.querySelectorAll('.navigation li a').forEach(function (el) {
	if (window.location.pathname.indexOf(el.getAttribute('href')) > -1) {
		el.classList.add('active');
	}
});

// Lazy Load YandexMap

// let modalButon = document.querySelectorAll('.js-modal-open');
// let modal = document.querySelector('.modal__dialog');

// modalButon.forEach((each) => {
// 	each.addEventListener('click', () => {
// 		if (!modal.hasChildNodes()) {
// 			let mapTag = document.createElement('script');
// 			mapTag.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ae537f9ee3607b71d9b71a960e3687b3671227eba266676789990907452c00db5&amp;width=100%25&amp;height=600&amp;lang=ru_RU&amp;scroll=true';
// 			modal.append(mapTag);
// 		}

// 	});
// });



// new Swiper('.slider-modal__container', {
// 	slidesPerView: "auto",
// 	spaceBetween: 130,
// 	centeredSlides: true,
// 	loop: true,
// 	spaceBetween: 30,
// 	pagination: {
// 		el: ".swiper-pagination",
// 		type: "fraction",
// 	},
// 	navigation: {
// 		nextEl: '.slider-modal__arrow_next',
// 		prevEl: '.slider-modal__arrow_prev'
// 	}
// });
