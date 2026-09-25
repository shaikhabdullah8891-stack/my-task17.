const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const locationFilter = document.getElementById("locationFilter");
const jobTypeFilter = document.getElementById("jobTypeFilter");

const jobCards = document.querySelectorAll(".job-card");
const detailsButtons = document.querySelectorAll(".details-btn");


// Search and filter jobs
function filterJobs() {

    const searchText = searchInput.value.toLowerCase().trim();
    const selectedLocation = locationFilter.value;
    const selectedType = jobTypeFilter.value;

    jobCards.forEach(function (card) {

        const title = card.dataset.title.toLowerCase();
        const company = card.dataset.company.toLowerCase();
        const location = card.dataset.location;
        const type = card.dataset.type;

        const matchesSearch =
            title.includes(searchText) ||
            company.includes(searchText);

        const matchesLocation =
            selectedLocation === "all" ||
            location === selectedLocation;

        const matchesType =
            selectedType === "all" ||
            type === selectedType;

        if (matchesSearch && matchesLocation && matchesType) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


// Search button
searchBtn.addEventListener("click", filterJobs);


// Search while typing
searchInput.addEventListener("input", filterJobs);


// Location filter
locationFilter.addEventListener("change", filterJobs);


// Job type filter
jobTypeFilter.addEventListener("change", filterJobs);


// View Details buttons
detailsButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const card = button.closest(".job-card");

        const title = card.dataset.title;
        const company = card.dataset.company;
        const location = card.dataset.location;
        const type = card.dataset.type;

        alert(
            "Job Details\n\n" +
            "Position: " + title + "\n" +
            "Company: " + company + "\n" +
            "Location: " + location + "\n" +
            "Job Type: " + type
        );

    });

});