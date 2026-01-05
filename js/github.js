const container = document.getElementById("projects");

const featuredProjects = [
    {
        name: "Sistema de Quiniela",
        description: "Aplicación web en PHP y MySQL para la gestión de apuestas de quiniela, registro de jugadas y control de resultados. Con una IA predictiva",
        url: "https://github.com/MarianoVillalba/proyecto_quiniela.git"
    },
    {
        name: "SEVD – Sistema Educativo",
        description: "Sistema web para la gestión académica de estudiantes, materias y notas, con consultas y reportes.",
        url: "https://github.com/Danzel-Burki/SEVD.git"
    },
    {
        name: "CRUD con MongoDB",
        description: "Proyecto CRUD completo utilizando MongoDB para operaciones de alta, baja, modificación y consulta.",
        url: "https://github.com/MarianoVillalba/CrudMongo.git"
    },
    {
        name: "Tarea Final INV – Optimización Logística",
        description: "Proyecto final integrador aplicando Investigación Operativa y optimización de rutas para delivery urbano.",
        url: "https://github.com/MarianoVillalba/TareaFInalINV.git"
    }
];

container.innerHTML = "";

featuredProjects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.style.animationDelay = `${index * 0.2}s`;

    card.innerHTML = `
        <h4>${project.name}</h4>
        <p>${project.description}</p>
        <a href="${project.url}" target="_blank">Ver en GitHub</a>
    `;

    container.appendChild(card);
});

/* BOTÓN VER MÁS → GITHUB */
const moreButton = document.createElement("div");
moreButton.className = "ver-mas-container";

moreButton.innerHTML = `
    <a href="https://github.com/MarianoVillalba?tab=repositories"
       class="ver-mas-btn"
       target="_blank">
       Ver más proyectos en GitHub
    </a>
`;

container.parentElement.appendChild(moreButton);