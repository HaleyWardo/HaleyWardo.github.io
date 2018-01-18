// Carousel variables
const carouselContainer = document.querySelector(".carousel__container");
const previewContainer = document.querySelector(".preview-buttons");
const demoProjectLink = document.querySelector("#demo-project");
const repoProjectLink = document.querySelector("#github-project");
let selectedIndex = 0;

// Navigation variables
const home = document.querySelectorAll(".home-nav");
const about = document.querySelectorAll(".about-nav");
const work = document.querySelectorAll(".work-nav");
const contact = document.querySelectorAll(".contact-nav");
const downArrow = document.querySelector(".svg--down-arrow");
const backToTop = document.querySelector("#back-to-top");

const projects = [
  {
    src : "./images/thumbnails/project-5-thumbnail.png",
    alt: "project 5",
    title: "Build a Web Style Guide",
    description: "Learned the fundamentals of Sass. I created a style guide from the ground up using variables, mixins, and functions.",
    demo: "./projects/project-5/index.html",
    repo: "https://github.com/HaleyWardo/treehouse-build-a-web-style-guide",
    skills: [
      "HTML", "CSS", "Sass"
    ],
  },
  {
    src : "./images/thumbnails/project-6-thumbnail.png",
    alt: "project 6",
    title: "Interactive Video Player",
    description: "Used a video API and JavaScript to highlight the captions from the video as it was playing. Also, if the user selects a section of text, it will autoplay from the selection.",
    demo: "./projects/project-6/index.html",
    repo: "https://github.com/HaleyWardo/treehouse-interactive-video-project",
    skills: [
      "HTML", "CSS", "JavaScript", "JQuery"
    ],
  },
  {
    src : "./images/thumbnails/project-8-thumbnail.png",
    alt: "project 8",
    title: "SVG Animations",
    description: "Learned how to modify styles on SVG's and animate them. Incorporated CSS transitions and transforms into the project.",
    demo: "./projects/project-8/index.html",
    repo: "https://github.com/HaleyWardo/treehouse-svg-animations",
    skills: [
      "HTML", "CSS", "SVG"
    ],
  },
  {
    src : "./images/thumbnails/project-9-thumbnail.png",
    alt: "project 9",
    title: "Web App Dashboard",
    description: "Used Chart.js to create line, bar, and pie charts. Used a random user API to generate random users. Used local storage to save user changes. Created modals for alert messages and notifications.",
    demo: "./projects/project-9/index.html",
    repo: "https://github.com/HaleyWardo/treehouse-web-app-dashboard",
    skills: [
      "HTML", "CSS", "SVG", "Sass", "AJAX", "JavaScript"
    ],
  },
  {
    src : "./images/thumbnails/project-10-thumbnail.png",
    alt: "project 10",
    title: "Employee Directory using Public API",
    description: "Used a random user API to generate random users and generate their details. Clicking a user would pop up a modal for additional information. Popup would include previous and next arrows to display the next member.",
    demo: "./projects/project-10/index.html",
    repo: "https://github.com/HaleyWardo/treehouse-public-API-For-Employee-Directory",
    skills: [
      "HTML", "CSS", "AJAX", "JavaScript"
    ],
  },
  {
    src : "./images/thumbnails/project-11-thumbnail.png",
    alt: "project 11",
    title: "Flickr Gallery with React",
    description: "Used React to create an app that interacts with the Flickr API. It displays images from the API based on user input or pre-defined options.",
    repo: "https://github.com/HaleyWardo/treehouse-react-Flickr-Gallery",
    demo: "https://github.com/HaleyWardo/treehouse-react-Flickr-Gallery/blob/master/README.md",
    skills: [
      "HTML", "CSS", "Fetch", "JavaScript", "React"
    ],
  },
];

const displayProject = (project) => {
  selectedIndex = projects.indexOf(project);

  let projectElement =
   `<div class="carousel">
      <img class="img--project" src=${project.src} alt=${project.alt} />
      <ul class="skill__list">
        ${project.skills.map(skill => `<li class="skill">${skill}</li>`).join('\n')}
      </ul>
      <h2 class="skill__title">${project.title}</h2>
      <p class="skill__description">${project.description}</p>
      <img class="svg--previous" src="./images/arrow.svg" alt="left arrow" />
      <img class="svg--next" src="./images/arrow.svg" alt="right arrow" />
    </div>`;
  carouselContainer.innerHTML = projectElement;

  demoProjectLink.setAttribute("href", project.demo);
  repoProjectLink.setAttribute("href", project.repo);

};
displayProject(projects[selectedIndex]);


// Event listener for arrow clicks.
// When index is more than link than it will go back to index[0].
// When index is less than [0] it will go back to projects.length.
window.addEventListener("click", (e) => {

  if (e.target.className === "svg--next") {
    if (selectedIndex === projects.length - 1) {
      return displayProject(projects[0]);
    }
    return displayProject(projects[selectedIndex + 1 ]);
  }

  if (e.target.className === "svg--previous") {
    if (selectedIndex === 0 ) {
      return displayProject(projects[projects.length - 1 ]);
    }
      return displayProject(projects[selectedIndex - 1 ]);
  }
});

 // When arrow is clicked windows scrolls to about section
for (let i = 0; i < home.length; i++) {
  home[i].addEventListener("click", () => {
    document.querySelector("header").scrollIntoView({
      behavior: "smooth"
    });
  });
}

for (let i = 0; i < about.length; i++) {
  about[i].addEventListener("click", () => {
    document.querySelector("#about").scrollIntoView({
      behavior: "smooth"
    });
  });
}

for (let i = 0; i < work.length; i++) {
  work[i].addEventListener("click", () => {
    document.querySelector("#work").scrollIntoView({
      behavior: "smooth"
    });
  });
}

for (let i = 0; i < contact.length; i++) {
  contact[i].addEventListener("click", () => {
    document.querySelector("#contact").scrollIntoView({
      behavior: "smooth"
    });
  });
}

backToTop.addEventListener("click", () => {
  document.querySelector("header").scrollIntoView({
    behavior: "smooth"
  });
})

downArrow.addEventListener("click", () => {
  document.querySelector("#about").scrollIntoView({
    behavior: "smooth"
  });
})