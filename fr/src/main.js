let abrirMenu = document.querySelector("#navBurger"),
    cerrarMenu = document.querySelector("#closeMenu"),
    menuMovil = document.querySelector(".nav__mob"),
    listaForm = document.querySelectorAll(".formulario__conten ul li"),
    listaTabs = document.querySelectorAll(".tabs__lista ul li"),
    listaFormSpan = document.querySelector(".lista__form span"),
    titulosTabla = document.querySelectorAll(".tabla__tit"),
    textoTabla = document.querySelector("#tabla-conten"),
    modal = document.querySelector(".modal"),
    abrirModal = document.querySelector("#politicas"),
    cerrarModal = document.querySelector("#cerrarModal"),
    btnCalendario = document.querySelector(".btn__calendar"),
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
    link.addEventListener("click", closeMenu);
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
                textoTabla.innerHTML = `Si vous en avez assez de ne pas recevoir de réponse aux outrages institutionnels, la seule façon de changer les choses est de participer. Si vous en avez assez de ne pas recevoir de réponse aux outrages institutionnels, le seul moyen de changer cette situation est de participer, rejoignez-nous, allons ensemble pour valoriser les personnes. Nous avons besoin de vous.`;
                titulosTabla[0].classList.add("select");
                titulosTabla[1].classList.remove("select");
                titulosTabla[2].classList.remove("select");
                break;
            case titulosTabla[1]:
                textoTabla.innerHTML = `Nous proposons un programme de responsabilisation des citoyens, dans le cadre duquel nous mettons en place une série d'outils qui permettront de modifier la structure face aux énormes problèmes auxquels la société est confrontée. Nous proposons un programme de responsabilisation des citoyens. Notre pilier de départ sera la démocratisation de la justice.`;
                titulosTabla[0].classList.remove("select");
                titulosTabla[1].classList.add("select");
                titulosTabla[2].classList.remove("select");
                break;
            case titulosTabla[2]:
                textoTabla.innerHTML = `La Démocratisation de la Justice apporte des solutions axées sur le redimensionnement de la relation (contrôle) entre l'État, les médias et les citoyens. C'est un projet ambitieux qui va au-delà de l'interminable aide hors contexte qui cherche à soulager les symptômes sans proposer de vraies solutions. <br/> <br/> La transformation est possible grâce à nos programmes conçus avec des outils d'émancipation au profit du citoyen, en fournissant des mécanismes d'autonomisation des personnes. des mécanismes d'autonomisation des personnes.`;
                titulosTabla[0].classList.remove("select");
                titulosTabla[1].classList.remove("select");
                titulosTabla[2].classList.add("select");
                break;
        }
    });
}

// Abrir et fermer le modal
abrirModal.addEventListener("click", () => {
    modal.classList.remove("cerrar");
});

cerrarModal.addEventListener("click", () => {
    modal.classList.add("cerrar");
});

// Événement pour le bouton calendrier
btnCalendario.addEventListener("click", () => {
    btnCalendario.classList.toggle("ver");
});
function copyToClipboard(text) {
    // Créer un élément d'entrée temporaire
    const input = document.createElement('input');
    // Définir la valeur de l'entrée comme le texte à copier
    input.value = text;
    // Ajouter l'entrée au body
    document.body.appendChild(input);
    // Sélectionner le texte de l'entrée
    input.select();
    // Copier le texte dans le presse-papiers
    document.execCommand('copy');
    // Supprimer l'entrée du DOM
    document.body.removeChild(input);
}