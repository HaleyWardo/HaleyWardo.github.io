const carouselContainer = document.querySelector(".carousel");
const previewContainer = document.querySelector(".preview-buttons");
let selectedIndex = 0;

const projects = [
  {
    src : "./images/thumbnails/project-5-thumbnail.png",
    alt: "project 5",
    title: "Build a Web Style Guide",
    description: "Learned the fundamentals of Sass. I created a style guide from the ground up using variables, mixins, and functions.",
    skills: [
      "HTML", "CSS", "Sass"
    ],
  },
  {
    src : "./images/thumbnails/project-6-thumbnail.png",
    alt: "project 6",
    title: "Interactive Video Player",
    description: "Used a video API and JavaScript to highlight the captions from the video as it was playing. Also, if user selects a section of text, it will auto play from the selection.",
    skills: [
      "HTML", "CSS", "JavaScript", "JQuery"
    ],
  },
  {
    src : "./images/thumbnails/project-8-thumbnail.png",
    alt: "project 8",
    title: "SVG Animations",
    description: "Learned how to modify styles on SVG's and animate them. Learned CSS transitions and transforms and incorporating it into the project.",
    skills: [
      "HTML", "CSS", "SVG"
    ],
  },
  {
    src : "./images/thumbnails/project-9-thumbnail.png",
    alt: "project 9",
    title: "Web App Dashboard",
    description: "Used Chart.js to create line, bar, and pie charts. Used Randomuser.com to generate random users. Used local storage to save user changes. Created modals for alert messages and notifications.",
    skills: [
      "HTML", "CSS", "SVG", "Sass", "AJAX", "JavaScript"
    ],
  },
  {
    src : "./images/thumbnails/project-10-thumbnail.png",
    alt: "project 10",
    title: "Employee Directory using Public API",
    description: "Used Random user API to generate random users and generate their details. Clicking a user would pop up a modal for additional information. Popup would include previous and next arrows to display next member.",
    skills: [
      "HTML", "CSS", "AJAX", "JavaScript"
    ],
  },
  {
    src : "./images/thumbnails/project-11-thumbnail.png",
    alt: "project 11",
    title: "Flickr Gallery with React",
    description: "Used react to create an app that interacts with the Flickr API. It displays images from the API based on user input or pre-defined options.",
    skills: [
      "HTML", "CSS", "Fetch", "JavaScript", "React"
    ],
  },
];

const displayProject = (project) => {
  selectedIndex = projects.indexOf(project);

  let projectElement =
  `<img class="img--project" src=${project.src} alt=${project.alt} />
    <ul class="skill__list">
    ${project.skills.map(skill => `<li class="skill">${skill}</li>`).join('\n')}
    </ul>
    <h2 class="skill__title">${project.title}</h2>
    <p class="skill__description">${project.description}`;

  carouselContainer.innerHTML = projectElement;
};
displayProject(projects[selectedIndex]);


// Event listener for arrow clicks.
// When index is more than link than it will go back to index[0].
// When index is less than [0] it will go back to projects.length.
window.addEventListener("click", (e) => {

  if (e.target.className === "img--next") {
    if (selectedIndex === projects.length - 1) {
      return displayProject(projects[0]);
    }
    return displayProject(projects[selectedIndex + 1 ]);
  }

  if (e.target.className === "img--previous") {
    if (selectedIndex === 0 ) {
      return displayProject(projects[projects.length - 1 ]);
    }
      return displayProject(projects[selectedIndex - 1 ]);
  }

  // When arrow is clicked windows scrolls to about section
  if (e.target.className === "img--down-arrow") {
    document.querySelector("#about").scrollIntoView({
      behavior: "smooth"
    });
  }
});


