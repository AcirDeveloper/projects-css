let events = [];

// Lectura de los elementos del DOM
const eventName = document.querySelector("#eventName");
const eventDate = document.querySelector("#eventDate");
const buttonAdd = document.querySelector("#bAdd");
const eventsContainer = document.querySelector("#eventsContainer");

// LocalStorage
const json = load();

try {
  arr = JSON.parse(json);
} catch (error) {
  arr = [];
}

events = arr ? [...arr] : [];
renderEvents();

// Funcion arrow que hace escuha al evento de Añadir Recordatorio
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  addEvent();
});

buttonAdd.addEventListener("submit", (e) => {
  e.preventDefault();
  addEvent();
});

// Evento principal
function addEvent() {
  // Eventos con inputs vacios no retorna nada
  if (eventName.value === "" || eventDate.value === "") {
    return;
  }
  // Eventos con fecha antigua no retorna nada
  if (dateDiff(eventDate.value) < 0) {
    return;
  }
  //Genera un nuevo evento si para los (if) anteriores
  const newEvent = {
    id: (Math.random() * 100).toString(36).slice(3), // Revisar esta linea de codigo
    name: eventName.value,
    date: eventDate.value,
  };
  // Agregamos el evento en la tabla
  events.unshift(newEvent);
  // Lo guarda en el localStorage
  save(JSON.stringify(events));
  // Volvemos a dejar los valores input vacios
  eventName.value = "";
  eventDate.value = "";
  // Y renderizamos
  renderEvents();
}

// Funcion que determinar los dias que faltan para que se cumpla el evento
function dateDiff(d) {
  const targetDate = new Date(d);
  const today = new Date();
  const difference = targetDate.getTime() - today.getTime();
  const days = Math.ceil(difference / (1000 * 3600 * 24)); // Revisar la funcion (ceil)
  return days;
}
// Tabla Para renderizar cada elemento guardado
function renderEvents() {
  const eventsHTML = events.map((event) => {
    return `          
            <div class="event" >
                <div class="days" >
                    <span class="days-numbers">${dateDiff(event.date)}</span>
                    <span class="days-text">Días</span>
                </div>
                <div class="event-name" >${event.name}</div>
                <div class="event-date" >${event.date}</div>
                <div class="actions" >
                    <button class="bDelete" data-id="${
                      event.id
                    }">Eliminar</button>
                </div>
            </div>        
        `;
  });
  eventsContainer.innerHTML = eventsHTML.join("");
  document.querySelectorAll(".bDelete").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = button.getAttribute("data-id");
      events = events.filter((event) => event.id !== id);
      // Volvemos a guardar el localstorage para saber si algun elemento fue eliminado
      save(JSON.stringify(events));
      renderEvents();
    });
  });
}

// Para el localstorage
function save(data) {
  localStorage.setItem("items", data);
}

function load() {
  return localStorage.getItem("items");
}

/**
 * Pensar en mejoras de codigo y estilos
 * ? Mejorar el codigo
 * * Tambien eliminar del localstorage -> Solucionado
 * * Mejorar los estilo css y volvero responsive
 * * Hacer esto mismo en react y  mejorar ex: Poner un sonido de alarma para cuando el evento comience y finalice
 */
