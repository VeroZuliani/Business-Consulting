import "./nav.css"

const Nav = () => {
    return(

        <section className="nav">
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        BizConsult<sup>TM</sup>
                    </a>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                            <a className="nav-link" href="#">Inicio</a>
                            <a className="nav-link" href="#">Sobre Nosotros</a>
                            <a className="nav-link" href="#">Servicios</a>
                            <a className="nav-link" href="#">Equipo</a>
                            <a className="nav-link" href="#">Preguntas Frecuentes</a>
                        </div>
                        <button>
                            Contactanos
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#116f76" class="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                                <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
                            </svg>
                        </button>
                    </div>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </section>

    )
}

export {Nav}