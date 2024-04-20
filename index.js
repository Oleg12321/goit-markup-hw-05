const btnModal = document.querySelector('.main__button')
const modalOverlay = document.querySelector('.modal-overlay')
const btnCloseModal = document.querySelector('.icon-close-box')


btnModal.addEventListener('click', (event) => {
    modalOverlay.classList.add('is-open')
})
btnCloseModal.addEventListener('click', event => {
	modalOverlay.classList.remove('is-open')
})