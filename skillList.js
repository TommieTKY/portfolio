// const SKILLLIST = [
//   {
//     name: "HTML",
//     src: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
//   },
//   {
//     name: "CSS",
//     src: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
//   },
//   {
//     name: "JavaScript",
//     src: "https://img.icons8.com/?size=100&id=laVIsJnTtYoj&format=png&color=000000",
//   },
//   {
//     name: "Node.js",
//     src: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
//   },
//   {
//     name: "Express.js",
//     src: "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000",
//   },
//   {
//     name: "MongoDb",
//     src: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
//   },
//   {
//     name: "Bootstrap",
//     src: "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000",
//   },
//   {
//     name: "React",
//     src: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
//   },
//   {
//     name: "PHP",
//     src: "https://img.icons8.com/?size=100&id=JybIpZjjXT0F&format=png&color=000000",
//   },
//   {
//     name: "Laravel",
//     src: "https://img.icons8.com/?size=100&id=hUvxmdu7Rloj&format=png&color=000000",
//   },
//   {
//     name: "C#",
//     src: "https://img.icons8.com/?size=100&id=45490&format=png&color=000000",
//   },
//   {
//     name: "ASP.NET",
//     src: "https://img.icons8.com/?size=100&id=59890&format=png&color=000000",
//   },
//   {
//     name: "MySQL",
//     src: "https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000",
//   },
//   {
//     name: "Python",
//     src: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
//   },
//   {
//     name: "Unity",
//     src: "https://img.icons8.com/?size=100&id=39848&format=png&color=000000",
//   },
//   {
//     name: "Figma",
//     src: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
//   },
// ];

const FrontendSkillsList = [
  {
    name: "HTML",
    src: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  },
  {
    name: "CSS",
    src: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
  },
  {
    name: "JavaScript",
    src: "https://img.icons8.com/?size=100&id=laVIsJnTtYoj&format=png&color=000000",
  },
  {
    name: "Bootstrap",
    src: "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000",
  },
  {
    name: "React",
    src: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
  },
  {
    name: "Python",
    src: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
  },
  {
    name: "Next.js",
    src: "https://img.icons8.com/?size=100&id=AU6Wc7r56Fxz&format=png&color=000000",
  },  
];

const BackendSkillsList = [
  {
    name: "ASP.NET",
    src: "https://img.icons8.com/?size=100&id=59890&format=png&color=000000",
  },
  {
    name: "C#",
    src: "https://img.icons8.com/?size=100&id=45490&format=png&color=000000",
  },
  {
    name: "Laravel",
    src: "https://img.icons8.com/?size=100&id=hUvxmdu7Rloj&format=png&color=000000",
  },
  {
    name: "PHP",
    src: "https://img.icons8.com/?size=100&id=JybIpZjjXT0F&format=png&color=000000",
  },
  {
    name: "Express.js",
    src: "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000",
  },
  {
    name: "Node.js",
    src: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
  },
]

const DbSkillsList = [
  {
    name: "MySQL",
    src: "https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000",
  },
  {
    name: "MongoDb",
    src: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
  },
]

const OtherSkillsList = [
  {
    name: "Unity",
    src: "https://img.icons8.com/?size=100&id=39848&format=png&color=000000",
  },
]

const DesignSkillsList = [
  {
    name: "Figma",
    src: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
  },
  {
    name: "Canva",
    src: "https://img.icons8.com/?size=100&id=me9baOv8L5z9&format=png&color=000000",
  },
]

// document.addEventListener("DOMContentLoaded", () => {
//   let skillContainer = document.getElementById("skillContainer");
//   skillContainer.innerHTML += `<div><p>Frontend: </p>`;
//   FrontendSkillsList.forEach((skill) => {
//     skillContainer.innerHTML 
//     += `<img src="${skill.src}" alt="${skill.name}" class="skillicon" />`;
//   });
//   skillContainer.innerHTML += `</div><div><p>Backend: </p>`;
//   BackendSkillsList.forEach((skill) => {
//     skillContainer.innerHTML += `<img src="${skill.src}" alt="${skill.name}" class="skillicon" />`;
//   });
//   skillContainer.innerHTML += `</div><div><p>Database: </p>`;
//   DbSkillsList.forEach((skill) => {
//     skillContainer.innerHTML += `<img src="${skill.src}" alt="${skill.name}" class="skillicon" />`;
//   });
//   skillContainer.innerHTML += `</div><div><p>Other: </p>`;
//   OtherSkillsList.forEach((skill) => {
//     skillContainer.innerHTML += `<img src="${skill.src}" alt="${skill.name}" class="skillicon" />`;
//   });
//   skillContainer.innerHTML += `</div><div><p>Design: </p>`;
//   DesignSkillsList.forEach((skill) => {
//     skillContainer.innerHTML += `<img src="${skill.src}" alt="${skill.name}" class="skillicon" />`;
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const skillContainer = document.getElementById("skillContainer");

  // 1. Group skills into an array of category objects
  const categories = [
    { title: "Frontend", list: FrontendSkillsList },
    { title: "Backend", list: BackendSkillsList },
    { title: "Database", list: DbSkillsList },
    { title: "Other", list: OtherSkillsList },
    { title: "Design", list: DesignSkillsList }
  ];

  // 2. Generate full, valid HTML for each category on its own row
  skillContainer.innerHTML = categories
    .map(category => {
      const icons = category.list.map(
        skill => `<img src="${skill.src}" alt="${skill.name}" class="skillicon" />`
      ).join("");

      return `
        <div class="skill-category">
          <p>${category.title}:</p>
          <div>${icons}</div>
        </div>
      `;
    })
    .join("");
});