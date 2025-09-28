import React from "react";
import Footer from "../components/Footer";
import Banner from "../images/banner.jpg";

const Services = () => {
  return (
    <div>

      { /* Changement nom de la page */ }

      <head>
        <title>John Doe - Services</title>
      </head>



      { /* Contenu de la page */ }

      <main>

        { /* Header */ }

        <img src={Banner} className="img-fluid" alt="" title=""></img>
        
        <header className="d-flex flex-column text-center align-items-center">

          <h1 className="pt-5">Mon offre de services</h1>

          <p>Voici les prestations sur lesquelles je peux intervenir.</p>

          <hr className="border border-primary border-3 opacity-75 mb-5 w-50"></hr>

        </header>



        { /* Cards */ }

        <section className="container mx-auto mb-5 col-md-9 col-sm">

          <h2 className="unshown">Mes domaines de compétences</h2>

          <div className="row gap-4">

            {/* UX Design */}

            <article className="col-md col-sm-12 gap-3 card text-center align-items-center p-0">

              <div className="pt-5">
                <i className="bi bi-brush"></i>
              </div>

              <div className="card-body">

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

            <article className="col-md col-sm-12 gap-3 card text-center align-items-center p-0">

              <div className="pt-5">
                <i className="bi bi-code-slash"></i>
              </div>

              <div className="card-body">

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

            <article className="col-md col-sm-12 gap-3 card text-center align-items-center p-0">

              <div className="pt-5">
                <i className="bi bi-search"></i>
              </div>

              <div className="card-body">

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
