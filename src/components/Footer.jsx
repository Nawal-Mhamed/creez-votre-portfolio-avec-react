import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="container-fluid bg-dark text-white py-4 pb-5">
      <div class="row mx-auto gap-md-0 gap-sm-3 w-75">
        <div class="col-md-4 col-sm-12">
          <h4>John Doe</h4>
          <p>
            40 rue Laure Diebold
            <br />
            69009 Lyon, France
            <br />
            10 20 30 40 50
            <br />
            john.doe@gmail.com
          </p>
          <div class="d-flex align-items-center">
            <a
              href="https://github.com/github-john-doe"
              target="_blank"
              rel="nofollow"
            >
              <i class="bi bi-github"></i>
            </a>
            <a
              href="https://x.com/johndoe1429905"
              target="_blank"
              rel="nofollow"
            >
              <i class="bi bi-twitter-x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/john-doe-291a4b309"
              target="_blank"
              rel="nofollow"
            >
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        <div class="col-md-4 col-sm-12">
          <h4>Liens utiles</h4>
          <ul class="list-unstyled mb-2 mb-lg-0">
            <li>
              <Link to="/" class="navbar-brand">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/services" class="navbar-brand">
                Services
              </Link>
            </li>
            <li>
              <Link to="/portfolio" class="navbar-brand">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" class="navbar-brand">
                Me contacter
              </Link>
            </li>
            <li>
              <Link to="/mentions-legales" class="navbar-brand">
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>

        <div class="col-md-4 col-sm-12">
          <h4>Mes dernières réalisations</h4>
          <ul class="list-unstyled mb-2 mb-lg-0">
            <li>
              <Link to="/portfolio" class="navbar-brand">
                Fresh Food
              </Link>
            </li>
            <li>
              <Link to="/portfolio" class="navbar-brand">
                Restaurant Akira
              </Link>
            </li>
            <li>
              <Link to="/portfolio" class="navbar-brand">
                Espace bien-être
              </Link>
            </li>
            <li>
              <Link to="/portfolio" class="navbar-brand">
                SEO
              </Link>
            </li>
            <li>
              <Link to="/portfolio" class="navbar-brand">
                Création d'une API
              </Link>
            </li>
            <li>
              <Link to="/portfolio" class="navbar-brand">
                Maquette d'un site
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
