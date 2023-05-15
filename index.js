const menuButton = document.querySelector('.menu')
const navigationList = document.querySelector('.navigation')
const title = document.querySelector('.title')

menuButton.addEventListener('click', () => {
	const dataVisible = navigationList.getAttribute('data-visible')

	if (dataVisible === 'false') {
		navigationList.setAttribute('data-visible', true)
		menuButton.setAttribute('aria-expanded', true)
		title.setAttribute('data-visible', true)
	} else if (dataVisible === 'true') {
		navigationList.setAttribute('data-visible', false)
		menuButton.setAttribute('aria-expanded', false)
		title.setAttribute('data-visible', false)
	}
})
