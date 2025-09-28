import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container-fluid bg-dark text-white py-4 pb-5">
      <div className="row mx-auto gap-md-0 gap-sm-3 w-75">

        { /* Informations John Doe */ }

        <section className="col-md-4 col-sm-12">
          <h4>John Doe</h4>
          
          { /* Coordonnées */ }

          <p>
            40 rue Laure Diebold
            <br />
            69009 Lyon, France
            <br />
            10 20 30 40 50
            <br />
            john.doe@gmail.com
          </p>

          { /* Réseaux sociaux */ }

          <div className="d-flex align-items-center">

            { /* GitHub */ }

            <a
              href="https://github.com/github-john-doe"
              target="_blank"
              rel="nofollow"
            >
              <i className="bi bi-github"></i>
            </a>

            { /* Twitter / X */ }

            <a
              href="https://x.com/johndoe1429905"
              target="_blank"
              rel="nofollow"
            >
              <i className="bi bi-twitter-x"></i>
            </a>

            { /* LinkedIn */ }

            <a
              href="https://www.linkedin.com/in/john-doe-291a4b309"
              target="_blank"
              rel="nofollow"
            >
              <i className="bi bi-linkedin"></i>
            </a>

          </div>

        </section>



        { /* Liens du site */ }

        <section className="col-md-4 col-sm-12">

          <h4>Liens utiles</h4>

          <ul className="list-unstyled mb-2 mb-lg-0">

            <li>
              <Link to="/" className="navbar-brand">
                Accueil
              </Link>
            </li>

            <li>
              <Link to="/services" className="navbar-brand">
                Services
              </Link>
            </li>

            <li>
              <Link to="/portfolio" className="navbar-brand">
                Portfolio
              </Link>
            </li>

            <li>
              <Link to="/contact" className="navbar-brand">
                Me contacter
              </Link>
            </li>

            <li>
              <Link to="/mentions-legales" className="navbar-brand">
                Mentions légales
              </Link>
            </li>

          </ul>

        </section>



        { /* Dernières réalisations */ }

        <section className="col-md-4 col-sm-12">

          <h4>Mes dernières réalisations</h4>

          <ul className="list-unstyled mb-2 mb-lg-0">

            <li>
              <Link to="/portfolio" className="navbar-brand">
                Fresh Food
              </Link>
            </li>

            <li>
              <Link to="/portfolio" className="navbar-brand">
                Restaurant Akira
              </Link>
            </li>

            <li>
              <Link to="/portfolio" className="navbar-brand">
                Espace bien-être
              </Link>
            </li>

            <li>
              <Link to="/portfolio" className="navbar-brand">
                SEO
              </Link>
            </li>

            <li>
              <Link to="/portfolio" className="navbar-brand">
                Création d'une API
              </Link>
            </li>

            <li>
              <Link to="/portfolio" className="navbar-brand">
                Maquette d'un site
              </Link>
            </li>

          </ul>

        </section>
        
      </div>

    </footer>
  );
};

export default Footer;
