import { SKILLLIST } from "../skillList"

export default function Skills() {
    return (
        <>
            <section className="container-fluid p-4 borderStyle" id="skills">
                <h2>Skills</h2>
                <div className="d-flex justify-content-center flex-wrap p-5">
                    {SKILLLIST.map((skill, index) => (
                        <img src={skill.src} alt={skill.name}  className="skillicon"/>
                    ))}
                </div>        
            </section>
        </>
    )
}
      