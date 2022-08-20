import { contador } from './components/contador_dias.js'
import { handleInput } from './components/mascara.js'
import { navegacion } from './components/nav.js'
import { pomodoro } from './components/pomodoro.js'
import { raiting } from './components/raiting.js'
import { teclado } from './components/teclado.js'

// DomLoaa
document.addEventListener('DOMContentLoaded', () => {
	navegacion()
	contador
	handleInput()
	pomodoro()
	raiting()
	teclado()
})

//events, addEvent, renderEvents, dateDiff, save, load
