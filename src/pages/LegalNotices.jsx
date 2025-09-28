import React from "react";
import Footer from "../components/Footer";

const LegalNotices = () => {
  return (
    <div>

      { /* Changement nom de la page */ }

      <head>
        <meta name="robots" content="noindex" />
        <title>John Doe - Mentions légales</title>
      </head>

      { /* Contenu de la page */ }

      <main>

        { /* Header */ }

        <header className="d-flex flex-column text-center align-items-center">

          <h1 className="pt-5">Mentions légales</h1>

          <hr className="border border-primary border-3 opacity-75 mb-5 w-50"></hr>

        </header>



        { /* Accordéon */ }

        <section className="accordion col-md-9 col-sm-11 mx-auto pb-5" id="accordionExample">

          <h2 className="unshown">Informations</h2>

          {/* Informations éditeur du site */}

          <div className="accordion-item">

            { /* Titre */ }

            <h2 className="accordion-header">

              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Editeur du site
              </button>

            </h2>

            { /* Contenu */ }

            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >

              <article className="accordion-body">

                <h4>John Doe</h4>

                <p>
                  <i className="bi bi-map"></i>40 rue Laure Diebold <br />
                  <i className="bi bi-geo-alt"></i> 69009 Lyon, France <br />
                  <i className="bi bi-phone"></i> 10 20 30 40 50 <br />
                  <i className="bi bi-envelope-at"></i> john.doe@gmail.com
                </p>

              </article>

            </div>

          </div>


          {/* Informations hébergeur du site */}

          <div className="accordion-item">

            { /* Titre */ }

            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Hébergeur du site
              </button>
            </h2>

            { /* Contenu */ }

            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >

              <article className="accordion-body">

                <h4>
                  <strong>alwaysdata</strong>
                </h4>

                <p>91, rue du Faubourg Saint-Honoré 75006 Paris</p>

                <p>
                  <i className="bi bi-globe"></i> <a href="www.alwaysdata.com">www.alwaysdata.com</a>
                </p>

              </article>

            </div>

          </div>


          {/* Crédits du site */}

          <div className="accordion-item">

            { /* Titre */ }

            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Crédits
              </button>
            </h2>

            { /* Contenu */ }

            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >

              <article className="accordion-body">

                <h4>
                  <strong>Crédits</strong>
                </h4>

                <p>
                  Ce site a été réalisé par John Doe, étudiant au&nbsp;
                  <a href="https://www.centre-europeen-formation.fr">
                    Centre Européen de formation
                  </a>
                  .
                </p>

                <p>
                  Les images utilisées sur ce site sont libres de droits et ont
                  été obtenues sur le site&nbsp;
                  <a href="https://www.pixabay.com">Pixabay</a>.
                </p>

                <p>
                  La favicon de ce site a été fournie par&nbsp;
                  <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe">
                    John doe Icons erstellt von Freepik - Flaticon
                  </a>
                  .
                </p>

              </article>

            </div>

          </div>

        </section>

      </main>


      <Footer />
      
    </div>
  );
};

export default LegalNotices;
