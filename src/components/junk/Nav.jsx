export default function Nav({sectionTag}) {
    return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../../public/image/logo.png" alt="Logo" width="50" height="50" class="d-inline-block align-text-centre"/>
                Kit Ying Tong
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                    <a class="nav-link" onClick={() => sectionTag("about")}>About Me</a>
                    <a class="nav-link" onClick={() => sectionTag("projects")}>Projects</a>
                    <a class="nav-link" onClick={() => sectionTag("skills")}>Skills</a>
                    <a class="nav-link" onClick={()=>sectionTag("contact")}>Contact</a>
            </div>
        </div>
    </div>
    </nav>
    )
}