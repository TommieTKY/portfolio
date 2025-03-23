import Nav from './Nav'

export default function Header() {
  //   const aboutRef = useRef(null);
  //   const projectsRef = useRef(null);
  //   const skillsRef = useRef(null);
  //   const contactRef = useRef(null);
  
  //   const sectionTag = (section) => {
  //     const targetRef =
  //       section === "about"
  //         ? aboutRef
  //         : section === "projects"
  //         ? projectsRef
  //         : section === "skills"
  //         ? skillsRef
  //         : section === "contact"
  //         ? contactRef
  //         : null;
  
  //     if (targetRef?.current) {
  //       targetRef.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  //     }
  // };
  
  return(
    <header id="header">
      <h2 id="site-name">
        <a href="/">Tommie Tong</a>
      </h2>
      {/* <Nav sectionTag={sectionTag} /> */}
    </header>
  )
}