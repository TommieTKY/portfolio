import { PROJECTLIST } from "../ProjectList.js"

export default function Projects() {
    return (
        <>
            <section className="container-fluid p-4 borderStyle" id="projects">
                <h2 className="mb-4">Projects</h2>
                <div className="row row-cols-1 row-cols-md-3 g-5 p-4">
                    {PROJECTLIST.map((project, index) => (
                        <div className="col" key={index}>
                            <a href={project.link} className="text-decoration-none">
                                <div className="card h-100">
                                    <div className="card-header bg-warning-subtle">{project.title}</div>
                                    <div className="px-4 pt-4">
                                        <img src={project.image} 
                                        className="card-img-top border border-dark-subtle " alt={project.title} />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">{project.description}</p>
                                    </div>
                                    <div className="card-footer bg-light">
                                        {project.skills.map((skill, index) => (
                                            <span key={index} className="badge bg-warning me-2">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        </div>)
                    )}
                    </div>
            </section>
        </>
    )
}
      