import { contador } from './components/contador_dias'
import { handleInput } from './components/mascara'
import { navegacion } from './components/nav'
import { pomodoro } from './components/pomodoro'
import { raiting } from './components/raiting'
import { teclado } from './components/teclado'

// DomLoaa
document.addEventListener('DOMContentLoaded', () => {
	navegacion()
	contador()
	handleInput()
	pomodoro()
	raiting()
	teclado()
})

// addEvent, dateDiff, save, load
