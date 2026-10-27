// ========================================
// JOBTRACK - DAY 8
// APPLICATIONS PAGE
// ========================================


// ========================================
// GET APPLICATIONS FROM LOCALSTORAGE
// ========================================

const applications =
    JSON.parse(
        localStorage.getItem(
            "applications"
        )
    ) || [];


// ========================================
// SELECT APPLICATIONS CONTAINER
// ========================================

const applicationsContainer =
    document.getElementById(
        "applicationsContainer"
    );


// ========================================
// DISPLAY APPLICATIONS
// ========================================

applications.forEach(
    (application) => {


        // Create application card

        const applicationCard =
            document.createElement(
                "div"
            );


        // Add class

        applicationCard.className =
            "application-card";


        // Add application information

        applicationCard.innerHTML = `

            <h2>
                ${application.title}
            </h2>

            <p>
                ${application.company}
            </p>

            <p>
                ${application.location}
            </p>

            <p>
                Status: ${application.status}
            </p>

        `;


        // Add card to container

        applicationsContainer.appendChild(
            applicationCard
        );

    }
);