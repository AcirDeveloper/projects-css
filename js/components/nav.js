export function navegacion() {
  const $ = (element) => document.querySelector(element)
	const bMore = $('#bMore')
	const links = $('#links')
	bMore.addEventListener('click', (e) => {
		links.classList.toggle('collapsed')
	})
}
