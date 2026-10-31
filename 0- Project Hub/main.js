
/* =========================
   1. PROJECT DATA
========================= */

const projects = [
    {
        id: 1,
        title: "Data Loading App",
        icon: "📡",
        description: "A practical application for loading and displaying data.",
        url: "https://data-loading-app.pages.dev"
    },
    {
        id: 2,
        title: "Task Processing App",
        icon: "⚙️",
        description: "An application for managing and processing tasks.",
        url: "https://task-processing-app.pages.dev"
    },
    {
        id: 3,
        title: "Product Management System",
        icon: "📦",
        description: "Manage product information through a JavaScript application.",
        url: "https://product-management-system-b4u.pages.dev"
    },
    {
        id: 4,
        title: "Modern Calculator",
        icon: "🧮",
        description: "A calculator project built with JavaScript.",
        // Replace with the actual calculator deployment URL.
        url: "https://js-modren-l3-mini-projects.pages.dev/~"
    },
    {
        id: 5,
        title: "User Profile App",
        icon: "👤",
        description: "An application for displaying and managing user profiles.",
        url: "https://user-profile-app.pages.dev"
    },
    {
        id: 6,
        title: "Product Data Manager",
        icon: "🗂️",
        description: "Organize and manage product data using JavaScript.",
        url: "https://product-data-manager.pages.dev"
    }
];


/* =========================
   2. SELECT HTML ELEMENTS
========================= */

const projectsContainer = document.querySelector(
    "#projects-container"
);

const currentYear = document.querySelector(
    "#current-year"
);


/* =========================
   3. DISPLAY PROJECTS
========================= */

function displayProjects() {

    // Clear previous project cards.
    projectsContainer.innerHTML = "";

    // Loop through every project.
    projects.forEach((project) => {

        // Create a new card.
        const projectCard = document.createElement("article");

        // Add CSS class.
        projectCard.classList.add("project-card");

        // Insert project information.
        projectCard.innerHTML = `
            <div class="project-icon">
                ${project.icon}
            </div>

            <span class="project-number">
                PROJECT ${project.id}
            </span>

            <h3>${project.title}</h3>

            <p>${project.description}</p>

            <a
                href="${project.url}"
                class="project-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                Explore Project →
            </a>
        `;

        // Add the card to the page.
        projectsContainer.appendChild(projectCard);

    });

}


/* =========================
   4. DISPLAY CURRENT YEAR
========================= */

currentYear.textContent = new Date().getFullYear();


/* =========================
   5. INITIALIZE WEBSITE
========================= */

displayProjects();
