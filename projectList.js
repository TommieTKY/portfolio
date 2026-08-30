const PROJECTLIST = [
    {
    link: "https://www.interpria.com/tour/tommietong-at-sha-tin-che-kung-temple",
    title: "Interpria",
    description:
      "Architected and deployed a full-stack tour guide booking platform utilizing Next.js for server-side rendering, fast load speeds, and improved SEO performance. Integrated Stripe API as a third-party payment gateway to enable secure, real-time online checkout and transaction processing.",
    skills: ["Next.js", "Tailwind", "Stripe API"],
    image: `./image/project/interpria.jpeg`,
  },
  {
    link: "https://grocery-price-checker-front-end.vercel.app/",
    title: "Grocery Price Checker",
    description:
      "A React-based web application for comparing grocery prices across stores and categories, with interactive filtering, routing, and price-per-unit calculations.",
    skills: ["React", "Bootstrap"],
    image: `./image/project/grocery-price-checker-front-end.jpeg`,
  },
  // {
  //   link: "https://discover-toronto-events-on-map.onrender.com/",
  //   title: "Discover Toronto Events on Map",
  //   description:
  //     "This project is a web application that displays upcoming Toronto events on an interactive Google Map, allowing users to explore event details and filter them by date. It helps users easily plan outings and discover what's happening around the city.",
  //   skills: ["Express.js", "Node.js", "Google Maps API"],
  //   image: "./image/project/discover-toronto-events-on-map.jpeg",
  // },
  {
    link: "https://springgreen-trout-818076.hostingersite.com/",
    title: "Toronto Attractions",
    description:
      "This project is a PHP-based admin dashboard for managing Toronto attractions, allowing admins to view, add, edit, and delete user accounts and attraction descriptions using a Bootstrap-styled responsive interface. It features role-based access, responsive design, and dynamic content rendered from a MySQL database.",
    skills: ["PHP", "MySQL"],
    image: "./image/project/TorontoAttractions.png",
  },
  {
    link: "https://github.com/TommieTKY/kidspark",
    title: "KidSpark",
    description:
      "A comprehensive platform for managing after-school programs and instructors with full CRUD functionality.",
    skills: ["Laravel", "PHP", "Bootstrap"],
    image: "./image/project/kidspark.png",
  },
  {
    link: "https://github.com/TommieTKY/pet_artworks_platform",
    title: "Pet Artworks Platform",
    description:
      "Pet Artworks Platform is a creative collaboration web application that bridges the ArtGallery and PawPals projects.",
    skills: ["C#", "ASP.NET", "MySQL"],
    image: "./image/project/artgallery.jpeg",
  },
  {
    link: "https://github.com/TommieTKY/pixelate",
    title: "Pixelate",
    description:
      "This application converts a provided image into stylized pixel art and generates instructions for recreating it using LEGO™ bricks. Users can customize both the pixel art size and the number of colors in the palette used for the LEGO™ instructions.",
    skills: ["HTML", "CSS", "PHP"],
    image: `./image/project/pixelate.png`,
  },
  // {
  //   link: "https://tommietong.itch.io/dimsum-in-the-sea",
  //   title: "Dimsum in the Sea",
  //   description:
  //     "Dimsum in the Sea is an immersive game on itch.io that offers a whimsical underwater adventure with a unique culinary twist. Players navigate through a vibrant world where imaginative characters and playful challenges bring dim sum-inspired creativity to life.",
  //   skills: ["Unity", "C#"],
  //   image: `./image/project/Dimsum in the Sea.png`,
  // },
  // {
  //   link: "https://tommietky.github.io/pizzamaker/",
  //   title: "Build Your Perfect Pizza",
  //   description:
  //     "The project is a fun and interactive web app that lets users customize their own pizza by selecting ingredients. It features a simple and user-friendly interface, making it easy to visualize and create unique pizza combinations. 🍕",
  //   skills: ["HTML", "CSS", "JavaScript"],
  //   image: `./image/project/pizza.jpeg`,
  // },
  // {
  //   link: "https://tommietky.github.io/PastGroceryFlyer/",
  //   title: "Tommie's Past Grocery Flyer",
  //   description:
  //     "This project presents an interactive archive of past grocery flyers, allowing users to browse historical deals and promotions with ease. Its clean, user-friendly design offers a nostalgic glimpse into previous retail advertisements.",
  //   skills: ["HTML", "CSS", "JavaScript"],
  //   image: `./image/project/grocery.jpeg`,
  // },
  // {
  //   link: "https://tommietky.github.io/blog/",
  //   title: "Blog",
  //   description:
  //     "This blog project features a simple, one-page design with a clean and minimalist layout.",
  //   skills: ["HTML", "CSS"],
  //   image: `./image/project/blog.png`,
  // },
];

document.addEventListener("DOMContentLoaded", () => {
  let projectContainer = document.getElementById("projectContainer");

  const projectsHTML = PROJECTLIST.map((project) => {
    const skillsHTML = project.skills
      .map(
        (skill) =>
          `<span class="badge rounded-pill bg-success-subtle text-secondary border border-success-subtle fw-normal mx-2 p-2">${skill}</span>`
      )
      .join("");

    return `
    <div class="col">
      <a href="${project.link}" class="text-decoration-none" target="_blank" rel="noopener noreferrer">
        <div class="card h-100 border border-secondary-subtle shadow-sm rounded-3">          
          <div class="ratio ratio-16x9 border-bottom border-light-subtle">
            <img src="${project.image}" class="card-img-top" alt="${project.title}">
          </div>

          <div class="card-body d-flex flex-column justify-content-between p-4">
            <div>
              <h5 class="card-title fw-bold text-dark mb-3">${project.title}</h5>
              <p class="card-text text-secondary small">${project.description}</p>
            </div>
            
            <div class="pt-3 border-top border-light-subtle mt-4">
              ${skillsHTML}
            </div>
          </div>
        </div>
      </a>
    </div>
    `;
  }).join("");

  projectContainer.innerHTML = projectsHTML;
});
