import React from "react";
import Footer from "../components/Footer";
import Banner from "../images/banner.jpg";

const Services = () => {
  return (
    <div>

      <head>
        <title>John Doe - Services</title>
      </head>


      <main>
        <img src={Banner} class="img-fluid" alt="" title=""></img>
        <header class="d-flex flex-column text-center align-items-center">
          <h1 class="pt-5">Mon offre de services</h1>
          <p>Voici les prestations sur lesquelles je peux intervenir.</p>
          <hr class="border border-primary border-3 opacity-75 mb-5 w-50"></hr>
        </header>

        <section class="container mx-auto mb-5 col-md-9 col-sm">
          <div class="row gap-4">
            {/* UX Design */}
            <article class="col-md-4 col-sm-12 gap-3 card text-center align-items-center p-0">
              <div class="pt-5">
                <i class="bi bi-brush"></i>
              </div>
              <div class="card-body">
                <h2>UX Design</h2>
                <p>
                  L'UX Design est une discipline qui consiste à <br /> concevoir
                  des produits (sites web, applications <br /> mobiles,
                  logiciels, objets connectés, etc.) en plaçant l'utilisateur au
                  centre des préoccupations. L'objectif est de rendre
                  l'expérience utilisateur la plus fluide et agréable possible.
                </p>
              </div>
            </article>

            {/* Développement web */}
            <article class="col-md-4 col-sm-12 gap-3 card text-center align-items-center p-0">
              <div class="pt-5">
                <i class="bi bi-code-slash"></i>
              </div>
              <div class="card-body">
                <h2>Développement web</h2>
                <p>
                  Le développement de sites web consiste à créer des sites
                  internet en utilisant des langages de programmation (HTML,
                  CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap,
                  React, Angular, etc.).
                </p>
              </div>
            </article>

            {/* Référencement */}
            <article class="col-md-4 col-sm-12 gap-3 card text-center align-items-center p-0">
              <div class="pt-5">
                <i class="bi bi-search"></i>
              </div>
              <div class="card-body">
                <h2>Référencement</h2>
                <p>
                  Le référencement naturel (SEO) est une technique qui consiste
                  à optimiser un site web pour le faire remonter dans les
                  résultats des moteurs de recherche (Google, Bing, Yahoo,
                  etc.). L'objectif est d'attirer un maximum de visiteurs
                  qualifiés sur le site.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;