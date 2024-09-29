// Get references to the elements
const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
const allSection = document.querySelectorAll(".section"); // Assuming all sections have the class "section"

// Event listener for the navigation toggler button
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

// Function to toggle the visibility of the aside and sections
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");

    for (let i = 0; i < allSection.length; i++) {
        allSection[i].classList.toggle("open");
    }
}

// ======= aside =======
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
    });
}
