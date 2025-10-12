const project_info_modal = document.getElementById("project-info-modal");
const project_close_button = document.getElementById("close");
const SJ_info_button = document.getElementById("SuperJamInfoButton");
const modal_content = document.getElementById("content");

const projects = [
  {
    name: "SUPER JAM",
    projectType: "gaming",
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

  const grid = document.createElement("div");
  grid.classList.add("grid-container");

  project.images.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.style.gridArea = `img-${index + 1}`;
    grid.appendChild(img);
  });

  const descHeading = document.createElement("h4");
  descHeading.textContent = "Game Description";

  const description = document.createElement("p");
  description.textContent = project.description;
  description.style.textAlign = "left";

  const featuresTitle = document.createElement("h5");
  featuresTitle.textContent = "Features";
  featuresTitle.style.textDecoration = "underline";
  featuresTitle.style.textAlign = "left";

  const featuresList = document.createElement("ul");
  project.features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    li.style.textAlign = "left";
    featuresList.appendChild(li);
  });

  const linkElement = document.createElement("a");
  linkElement.textContent = "Play the game!"
  linkElement.href = project.link;


 

  const content_div = document.createElement("div");
  content_div.className = "content_div";

  modal_content.appendChild(title);
  content_div.appendChild(grid);
  content_div.appendChild(descHeading);
  content_div.appendChild(description);
  content_div.appendChild(featuresTitle);
  content_div.appendChild(featuresList);
  content_div.appendChild(linkElement);

  modal_content.appendChild(content_div);
  
}

SJ_info_button.addEventListener("click", () => {
  project_info_modal.classList.add("open");
  displayGamingProject("SUPER JAM");
});

project_close_button.addEventListener("click", () => {
  project_info_modal.classList.remove("open");
});
