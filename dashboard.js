// ========================================
// GET LOGGED-IN USER
// ========================================

const userName =
    localStorage.getItem("name");


// ========================================
// DISPLAY WELCOME MESSAGE
// ========================================

const welcomeMessage =
    document.getElementById(
        "welcomeMessage"
    );


welcomeMessage.textContent =
    `Welcome back, ${userName}!`;


// ========================================
// GET APPLICATIONS
// ========================================

const applications =
    JSON.parse(
        localStorage.getItem(
            "applications"
        )
    ) || [];


// ========================================
// CALCULATE TOTAL APPLICATIONS
// ========================================

const totalApplications =
    applications.length;


// ========================================
// CALCULATE SHORTLISTED
// ========================================

const shortlistedApplications =
    applications.filter(
        (application) =>
            application.status ===
            "Shortlisted"
    );


// ========================================
// CALCULATE INTERVIEWS
// ========================================

const interviewApplications =
    applications.filter(
        (application) =>
            application.status ===
            "Interview"
    );


// ========================================
// CALCULATE SELECTED
// ========================================

const selectedApplications =
    applications.filter(
        (application) =>
            application.status ===
            "Selected"
    );

// ========================================
// CALCULATE REJECTED
// ========================================

const rejectedApplications =
    applications.filter(
        (application) =>
            application.status ===
            "Rejected"
    );
// ========================================
// DISPLAY STATISTICS
// ========================================

document.getElementById(
    "totalApplications"
).textContent =
    totalApplications;


document.getElementById(
    "shortlisted"
).textContent =
    shortlistedApplications.length;

document.getElementById(
    "rejected"
).textContent =
    rejectedApplications.length;


document.getElementById(
    "interviews"
).textContent =
    interviewApplications.length;


document.getElementById(
    "selected"
).textContent =
    selectedApplications.length;