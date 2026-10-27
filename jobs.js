let jobs = [
    {
        id: 1,
        description: "software developer",
        company: "Oracle",
        location: "Hyderabad",
        package: "12LPA",
        skills: "Web Technology",
        Experience: "0yrs to 2yrs"
    },
    {
        id: 2,
        description: "Python developer",
        company: "Amazon",
        location: "Hyderabad",
        package: "15LPA",
        skills: "Python",
        Experience: "3yrs to 5yrs"
    },
    {
        id: 3,
        description: "Java Developer",
        company: "Infosys",
        location: "Hyderabad",
        package: "8LPA",
        skills: "Java",
        Experience: "0yrs to 2yrs"
    },
    {
        id: 4,
        description: "Frontend Developer",
        company: "Wipro",
        location: "Hyderabad",
        package: "7LPA",
        skills: "HTML, CSS, JavaScript",
        Experience: "0yrs to 2yrs"
    },
    {
        id: 5,
        description: "Backend Developer",
        company: "TCS",
        location: "Bangalore",
        package: "9LPA",
        skills: "Python, SQL",
        Experience: "1yrs to 3yrs"
    },
    {
        id: 6,
        description: "Software Engineer",
        company: "Microsoft",
        location: "Hyderabad",
        package: "18LPA",
        skills: "C++, Python",
        Experience: "0yrs to 2yrs"
    },
    {
        id: 7,
        description: "Data Analyst",
        company: "Deloitte",
        location: "Hyderabad",
        package: "8LPA",
        skills: "SQL, Excel, Python",
        Experience: "0yrs to 2yrs"
    },
    {
        id: 8,
        description: "QA Tester",
        company: "Accenture",
        location: "Hyderabad",
        package: "6LPA",
        skills: "Manual Testing, SQL",
        Experience: "0yrs to 2yrs"
    },
    {
        id: 9,
        description: "Full Stack Developer",
        company: "Capgemini",
        location: "Bangalore",
        package: "10LPA",
        skills: "HTML, CSS, JavaScript, Python",
        Experience: "1yrs to 3yrs"
    },
    {
        id: 10,
        description: "SQL Developer",
        company: "Cognizant",
        location: "Hyderabad",
        package: "7LPA",
        skills: "SQL, PostgreSQL",
        Experience: "0yrs to 2yrs"
    },
    {
        id: 11,
        description: "Support Engineer",
        company: "Tech Mahindra",
        location: "Hyderabad",
        package: "5LPA",
        skills: "SQL, Linux",
        Experience: "0yrs to 2yrs"
    },
    {
        id: 12,
        description: "React Developer",
        company: "HCLTech",
        location: "Chennai",
        package: "9LPA",
        skills: "React, JavaScript",
        Experience: "1yrs to 3yrs"
    },
    {
        id: 13,
        description: "Python Developer",
        company: "IBM",
        location: "Bangalore",
        package: "11LPA",
        skills: "Python, Django, SQL",
        Experience: "1yrs to 3yrs"
    },
    {
        id: 14,
        description: "Associate Software Engineer",
        company: "Cognizant",
        location: "Hyderabad",
        package: "6LPA",
        skills: "Java, SQL",
        Experience: "0yrs to 1yr"
    },
    {
        id: 15,
        description: "Web Developer",
        company: "Tech Mahindra",
        location: "Pune",
        package: "6LPA",
        skills: "HTML, CSS, JavaScript",
        Experience: "0yrs to 2yrs"
    }
];


let jobscontainer = document.querySelector("#jobscontainer");


jobs.forEach((job) => {

    let jobsCard = document.createElement("div");

    jobsCard.className = "job-card";

    jobsCard.innerHTML = `
        <h2>${job.description}</h2>
        <p>${job.company}</p>
        <p>${job.location}</p>
        <p>${job.package}</p>
        <p>${job.skills}</p>
        <p>${job.Experience}</p>

        <button 
            class="applybtn" 
            data-job-id="${job.id}">
            Apply
        </button>
    `;


    // Add job card to container

    jobscontainer.appendChild(jobsCard);


    // Select Apply button

    let applyButton =
        jobsCard.querySelector(".applybtn");


    // Apply button click

    applyButton.addEventListener("click", () => {


        // Get selected job ID

        let jobId =
            applyButton.dataset.jobId;


        // Find selected job

        let selectedJob =
            jobs.find((job) =>
                job.id == jobId
            );


        // Create application object

        let application = {

            jobId:
                selectedJob.id,

            title:
                selectedJob.description,

            company:
                selectedJob.company,

            location:
                selectedJob.location,

            status:
                "Applied"
        };


        // Get existing applications

        let applications =
            JSON.parse(
                localStorage.getItem(
                    "applications"
                )
            ) || [];


        // Add new application

        let alreadyApplied = applications.some(
        (app) => app.jobId == selectedJob.id
        );


        if (!alreadyApplied) {

        applications.push(application);

        localStorage.setItem(
              "applications",
             JSON.stringify(applications)
         );

        alert("Application submitted successfully!");

     } else {

    alert("You have already applied for this job!");

     }


        // Store applications

        localStorage.setItem(
            "applications",
            JSON.stringify(applications)
        );


        // Success message

        alert(
            "Application submitted successfully!"
        );

    });

});