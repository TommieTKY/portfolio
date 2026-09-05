const SKILL_CATEGORIES = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5", src: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000" },
      { name: "CSS3", src: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000" },
      { name: "JavaScript", src: "https://img.icons8.com/?size=100&id=laVIsJnTtYoj&format=png&color=000000" },
      { name: "React", src: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000" },
      { name: "Next.js", src: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000" },
      { name: "TypeScript", src: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000" },
      { name: "Tailwind CSS", src: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" },
      { name: "Bootstrap", src: "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000" }
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", src: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000" },
      { name: "Express.js", src: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000" },
      { name: "ASP.NET Core", src: "https://img.icons8.com/?size=100&id=59890&format=png&color=000000" },
      { name: "C#", src: "https://img.icons8.com/?size=100&id=45490&format=png&color=000000" },
      { name: "Python", src: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000" },
      { name: "PHP", src: "https://img.icons8.com/?size=100&id=10232&format=png&color=000000" },
      { name: "Laravel", src: "https://img.icons8.com/?size=100&id=hUvxmdu7Rloj&format=png&color=000000" }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", src: "https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000" },
      { name: "MongoDB", src: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000" }
    ]
  },
  {
    category: "Tools & Specialized Tech",
    skills: [
      { name: "Figma", src: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000" },
      { name: "Canva", src: "https://img.icons8.com/?size=100&id=EZQdGLNeo7JI&format=png&color=000000" },
      { name: "Unity", src: "https://img.icons8.com/?size=100&id=39848&format=png&color=000000" }
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const skillContainer = document.getElementById("skillContainer");

  skillContainer.innerHTML = `
    <div class="row g-5">
      ${SKILL_CATEGORIES.map((cat) => `
        <div class="col-12 col-md-6">
          <div class="card h-100 border border-success-subtle shadow-sm rounded-3 p-4">
            <h5 class="fw-bold text-dark border-bottom pb-3 mb-4">${cat.category}</h5>
            <div class="d-flex flex-wrap gap-4 justify-content-center">
              ${cat.skills.map((skill) => `
                <div class="d-inline-flex align-items-center gap-2 px-3 py-2 rounded border border-light-subtle bg-light">
                  <img src="${skill.src}" alt="${skill.name}" style="width: 30px; height: 30px; object-fit: contain;" />
                  <span class="fw-medium text-dark">${skill.name}</span>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `;
});