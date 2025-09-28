import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import Footer from "../components/Footer";
import Banner from "../images/banner.jpg";
import FreshFood from "../images/portfolio/fresh-food.jpg";
import Akira from "../images/portfolio/restaurant-japonais.jpg";
import Zen from "../images/portfolio/espace-bien-etre.jpg";
import SEO from "../images/portfolio/seo.jpg";
import API from "../images/portfolio/coder.jpg";
import Website from "../images/portfolio/screens.jpg";

const Projects = () => {
  return (
    <div>
      <head>
        <title>John Doe - Portfolio</title>
      </head>
      <main>
        <img src={Banner} class="img-fluid" alt="" title=""></img>
        <header class="d-flex flex-column text-center align-items-center">
          <h1 class="pt-5">Portfolio</h1>
          <p>Voici quelques-unes de mes réalisations</p>
          <hr class="border border-primary border-3 opacity-75 mb-5 w-50"></hr>
        </header>

        {/* Contenu du Portfolio */}
        <section class="container mx-auto mb-5">
          <div class="row gap-3 mb-3">
            {/* Projet Fresh Food */}
            <article class="col gap-3 card text-center p-0">
              <img src={FreshFood} class="card-img-top" alt="" title=""></img>
              <div class="card-body">
                <h2>Fresh Food</h2>
                <p>Site de vente de produits frais en ligne.</p>
                <button class="btn btn-primary">
                  Voir le site
                </button>
              </div>
              <p class="card-footer text-muted mb-0">
                Site réalisé avec PHP et MySQL
              </p>
            </article>

            {/* Projet Restaurant Akira */}
            <article class="col gap-3 card text-center p-0">
              <img src={Akira} class="card-img-top" alt="" title=""></img>
              <div class="card-body">
                <h2>Restaurant Akira</h2>
                <p>Site pour un restaurant japonais.</p>
                <button class="btn btn-primary">
                  Voir le site
                </button>
              </div>
              <p class="card-footer text-muted mb-0">
                Site réalisé avec WordPress
              </p>
            </article>

            {/* Projet Espace bien-être */}
            <article class="col gap-3 card text-center p-0">
              <img src={Zen} class="card-img-top" alt="" title=""></img>
              <div class="card-body">
                <h2>Espace bien-être</h2>
                <p>Site d'une entreprise proposant des services bien-être.</p>
                <button class="btn btn-primary">
                  Voir le site
                </button>
              </div>
              <p class="card-footer text-muted mb-0">
                Site réalisé avec LARAVEL
              </p>
            </article>
          </div>

          <div class="row gap-3">
            {/* Projet SEO */}
            <article class="col card text-center p-0">
              <img src={SEO} class="card-img-top" alt="" title=""></img>
              <div class="card-body">
                <h2>SEO</h2>
                <p>Amélioration du référencement d'un site e-commerce.</p>
                <button class="btn btn-primary">
                  Voir le site
                </button>
              </div>
              <p class="card-footer text-muted mb-0">
                Utilisation des outils SEO
              </p>
            </article>

            {/* Projet API */}
            <article class="col card text-center p-0">
              <img src={API} class="card-img-top" alt="" title=""></img>
              <div class="card-body">
                <h2>Création d'une API</h2>
                <p>Création d'une API RESTFULL publique.</p>
                <button class="btn btn-primary">
                  Voir le site
                </button>
              </div>
              <p class="card-footer text-muted mb-0">PHP - SYMFONY</p>
            </article>

            {/* Projet Maquette */}
            <article class="col card text-center p-0">
              <img src={Website} class="card-img-top" alt="" title=""></img>
              <div class="card-body">
                <h2>Maquette d'un site web</h2>
                <p>Création du prototype d'un site.</p>
                <button class="btn btn-primary">
                  Voir le site
                </button>
              </div>
              <p class="card-footer text-muted mb-0">Réalisée avec FIGMA</p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
