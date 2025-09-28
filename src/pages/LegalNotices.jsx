import React from "react";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const LegalNotices = () => {
  return (
    <div>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>John Doe - Mentions légales</title>
      </Helmet>
      <main>
        <header class="d-flex flex-column text-center align-items-center">
          <h1 class="pt-5">Mentions légales</h1>
          <hr class="border border-primary border-3 opacity-75 mb-5 w-50"></hr>
        </header>

        <div class="accordion w-75 mx-auto pb-5" id="accordionExample">
          {/* Informations éditeur du site */}
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Editeur du site
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p class="h4">John Doe</p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-map"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"
                    />
                  </svg>{" "}
                  40 rue Laure Diebold <br />
                  <i class="bi bi-geo-alt"></i> 69009 Lyon, France <br />
                  <i class="bi bi-phone"></i> 10 20 30 40 50 <br />
                  <i class="bi bi-envelope-at"></i> john.doe@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Informations hébergeur du site */}
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Hébergeur du site
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <h4>
                  <strong>alwaysdata</strong>
                </h4>
                <p>91, rue du Faubourg Saint-Honoré 75006 Paris</p>
                <p>
                  <i class="bi bi-globe"></i> <a href="www.alwaysdata.com">www.alwaysdata.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Crédits du site */}

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Crédits
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
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
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalNotices;
