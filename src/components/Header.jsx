export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm px-4 py-2 bg-light shadow fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand fs-3" href="#">
              {/* <img src="../../public/logo.png" alt="Logo" width="70" height="70" className="d-inline-block align-text-centre me-3"/> */}
              Kit Ying Tong
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <a className="nav-link" href="#aboutme">About Me</a>              
                <a className="nav-link" href="#projects">Projects</a>
                <a className="nav-link" href="#skills">Skills</a>
                <a className="nav-link" href="#contact">Contact</a>
              </div>
            </div>
        </div>
      </nav>
    </header>
  )
}