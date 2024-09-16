let abrirMenu = document.querySelector("#navBurger"),
    cerrarMenu = document.querySelector("#closeMenu"),
    menuMovil = document.querySelector(".nav__mob"),
    listaForm = document.querySelectorAll(".formularioconten ul li"),
    listaTabs = document.querySelectorAll(".tabslista ul li"),
    listaFormSpan = document.querySelector(".listaform span"),
    titulosTabla = document.querySelectorAll(".tablatit"),
    textoTabla = document.querySelector("#tabla-conten"),
    modal = document.querySelector(".modal"),
    abrirModal = document.querySelector("#politicas"),
    cerrarModal = document.querySelector("#cerrarModal"),
    btnCalendario = document.querySelector(".btn_calendar"),
    menuLinks = document.querySelectorAll(".nav__mobLinks a"); // Seleccionar los enlaces del menú móvil

// Función para cerrar el menú
function closeMenu() {
    menuMovil.classList.remove("abrir");
}

// Agregar eventos a los botones de abrir y cerrar menú
abrirMenu.addEventListener("click", () => {
    menuMovil.classList.add("abrir");
});

cerrarMenu.addEventListener("click", closeMenu);

// Cerrar el menú al hacer clic en cualquier enlace del menú móvil
menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu); // Cerrar el menú
});

// Agregar eventos a los enlaces del formulario
for (let listForm of listaForm) {
    listForm.addEventListener("click", () => {
        listForm.classList.toggle("mostrar");
    });
}

// Agregar eventos a las pestañas
for (let listTabs of listaTabs) {
    listTabs.addEventListener("click", () => {
        listTabs.classList.toggle("mostrar");
    });
}

// Agregar eventos a los títulos de la tabla
for (let i = 0; i < titulosTabla.length; i++) {
    titulosTabla[i].addEventListener("click", () => {
        switch (titulosTabla[i]) {
            case titulosTabla[0]:
                textoTabla.innerHTML = `Si estás cansado de no conseguir respuesta ante atropellos de las instituciones, la única manera de cambiar esto, es participando, únete a nosotros, vamos juntos a poner en valor a las personas. Tú haces falta.`;
                titulosTabla[0].classList.add("select");
                titulosTabla[1].classList.remove("select");
                titulosTabla[2].classList.remove("select");
                break;
            case titulosTabla[1]:
                textoTabla.innerHTML = `Proponemos un programa de empoderamiento ciudadano, allí establecemos una serie de herramientas que brindarán cambios en la estructura ante ingentes problemas que confronta la sociedad. Nuestro pilar de arranque será la Democratización de la Justicia.`;
                titulosTabla[0].classList.remove("select");
                titulosTabla[1].classList.add("select");
                titulosTabla[2].classList.remove("select");
                break;
            case titulosTabla[2]:
                textoTabla.innerHTML = `La Democratización de la Justicia aporta soluciones enfocadas en redimensionar la relación (control) entre el Estado, medios de comunicación y las personas. Es un proyecto ambicioso que va más allá de las ayudas interminables fuera de contexto que buscan apañar los síntomas sin proponer verdaderas soluciones. <br/> <br/> La transformación es posible mediante nuestros programas diseñados con herramientas para la emancipación en beneficio del ciudadano, aportando mecanismos para empoderar a las personas.`;
                titulosTabla[0].classList.remove("select");
                titulosTabla[1].classList.remove("select");
                titulosTabla[2].classList.add("select");
                break;
        }
    });
}

// Abrir y cerrar modal
abrirModal.addEventListener("click", () => {
    modal.classList.remove("cerrar");
});

cerrarModal.addEventListener("click", () => {
    modal.classList.add("cerrar");
});

// Evento para el botón de calendario
btnCalendario.addEventListener("click", () => {
    btnCalendario.classList.toggle("ver");
});

function copyToClipboard(text) {
    // Crear un elemento de entrada temporal
    const input = document.createElement('input');
    // Establecer el valor del input como el texto a copiar
    input.value = text;
    // Añadir el input al body
    document.body.appendChild(input);
    // Seleccionar el texto del input
    input.select();
    // Copiar el texto al portapapeles
    document.execCommand('copy');
    // Remover el input del DOM
    document.body.removeChild(input);
}