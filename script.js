const project_info_modal = document.getElementById("project-info-modal");
const project_close_button = document.getElementById("close");
const SJ_info_button = document.getElementById("SuperJamInfoButton");
const AO_info_button = document.getElementById("aoInfoButton")
const modal_content = document.getElementById("content");

const projects = [
  {
    name: "SUPER JAM",
    projectType: "gaming",
    genre: "Action / Platformer",
    description: "Super Jam is a game that tests the player's technical skills. It's not just about jumping from platform to platform — players have to swiftly decide the best path to take and which abilities would help get to the goal the fastest. One wrong move and you're back to the start!",
    features: [
      "Jump",
      "Double Jump",
      "Blast",
      "Platform Shield",
      "Slow Fall",
      "Trap Platforms",
      "Dialog",
      "Cooldowns"
    ],
    images: [
      "images/jamoImage.png",
      "images/jamoImage2.png",
      "images/jamoImage3.png",
      "images/jamoImage4.png",
      "images/jamoImage5.png"
    ],
    link: "https://play.unity.com/en/games/a26dbb33-bdec-43ca-9d98-30af47429993/super-jam"
  },
  {
    name: "Arcane Odyssey",
    projectType: "gaming",
    genre: "Action RPG",
    description: "Arcane Odyssey is a 3D action-RPG where players choose between three unique character classes, each with distinct animations, abilities, and stats. Players navigate levels, battle enemies with AI-driven behaviors, collect items, and customize character appearances for an immersive adventure.",
    features: [
      "Multiple Character Classes",
      "Customizable Character Colors",
      "Dual Attack Mechanics",
      "Sprinting & Dodging",
      "Item Collection",
      "Health Bars & Enemy Health Bars",
      "Enemy AI Navigation & Attacks",
      "Level Design & Environmental Obstacles"
    ],
    images: [
    "images/aoImage1.png",
    "images/aoImage2.png",
    "images/aoImage3.png",
    "images/aoImage4.png",
    "images/aoImage5.png",
    ],
    link: "#"
  }
];

function displayGamingProject(projectName) {
  const project = projects.find(
    (p) => p.name.toLowerCase() === projectName.toLowerCase() && p.projectType === "gaming"
  );

  if (!project) return;

  modal_content.innerHTML = "";

  const title = document.createElement("h1");
  title.textContent = project.name;
  modal_content.appendChild(title);

  // Display genre if available
  if (project.genre) {
    const genreEl = document.createElement("p");
    genreEl.textContent = `Genre: ${project.genre}`;
    genreEl.style.fontStyle = "italic";
    modal_content.appendChild(genreEl);
  }

  const content_div = document.createElement("div");
  content_div.className = "content_div";

  // Check if images exist
  if (project.images && project.images.length > 0) {
    const grid = document.createElement("div");
    grid.classList.add("grid-container");
    project.images.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.style.gridArea = `img-${index + 1}`;
      grid.appendChild(img);
    });
    content_div.appendChild(grid);
  } else {
    const noImages = document.createElement("p");
    noImages.textContent = "No images available";
    content_div.appendChild(noImages);
  }

  const descHeading = document.createElement("h4");
  descHeading.textContent = "Game Description";
  content_div.appendChild(descHeading);

  const description = document.createElement("p");
  description.textContent = project.description;
  description.style.textAlign = "left";
  content_div.appendChild(description);

  const featuresTitle = document.createElement("h5");
  featuresTitle.textContent = "Features";
  featuresTitle.style.textDecoration = "underline";
  featuresTitle.style.textAlign = "left";
  content_div.appendChild(featuresTitle);

  const featuresList = document.createElement("ul");
  if (project.features && project.features.length > 0) {
    project.features.forEach((feature) => {
      const li = document.createElement("li");
      li.textContent = feature;
      li.style.textAlign = "left";
      featuresList.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = "No features listed";
    featuresList.appendChild(li);
  }
  content_div.appendChild(featuresList);

  // Check if link exists
  if (project.link && project.link !== "#") {
    const linkElement = document.createElement("a");
    linkElement.textContent = "Play the game!";
    linkElement.href = project.link;
    linkElement.target = "_blank";
    content_div.appendChild(linkElement);
  } 

  modal_content.appendChild(content_div);
}

SJ_info_button.addEventListener("click", () => {
  project_info_modal.classList.add("open");
  displayGamingProject("SUPER JAM");
});

AO_info_button.addEventListener("click", () => {
  project_info_modal.classList.add("open");
  displayGamingProject("Arcane Odyssey");
});

project_close_button.addEventListener("click", () => {
  project_info_modal.classList.remove("open");
});


