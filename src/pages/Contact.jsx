import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>

      { /* Changement nom de la page */ }

      <head>
        <title>John Doe - Contact</title>
      </head>

      { /* Contenu de la page */ }

      <main>

        { /* Header */ }

        <header className="d-flex flex-column align-items-center text-center col-md-12 col-sm-10 mx-auto px-4">

          <h1 className="pt-5">Contact</h1>

          <p>
            Pour me contacter en vue d'un entretien ou d'une future
            collaboration, merci de remplir le formulaire de contact.
          </p>

          <hr className="border border-primary border-3 opacity-75 mb-5 w-50"></hr>

        </header>

    
        <section className="shadow rounded gap-5 mx-auto p-4 mb-5 col-md-9 col-sm-11">

          {/* Formulaire */}

          <div className="row align-items-stretch gap-3">

            <article className="col-md col-sm-12 d-flex flex-column">

              <h3>Formulaire de contact</h3>

              <hr className="border border-primary border-3 opacity-75 mb-5"></hr>

              <form className="d-flex flex-column gap-2 h-100">
                
                { /* Nom */ }

                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Votre nom"
                  aria-label="Votre nom"
                  required="required"
                />
           
                { /* Email */ }

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Votre adresse email"
                  aria-label="Votre adresse email"
                  required="required"
                />

                { /* Tel */ }

                <input
                  type="tel"
                  name="tel"
                  className="form-control"
                  placeholder="Votre numéro de téléphone"
                  aria-label="Votre numéro de téléphone"
                  required="required"
                />

                { /* Sujet */ }

                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Sujet"
                  aria-label="Sujet"
                  required="required"
                />

                { /* Message */ }

                <textarea
                  name="message"
                  className="form-control flex-grow-1 mb-2"
                  placeholder="Votre message"
                ></textarea>
                
                { /* Bouton d'envoi */ }

                <button type="submit" className="btn btn-primary align-self-center mb-5">
                  Envoyer
                </button>

              </form>

            </article>



            {/* Coordonnées de John Doe */}

            <article className="col-md col-sm-12">

              <h3>Mes coordonnées</h3>

              <hr className="border border-primary border-3 opacity-75 mb-5"></hr>

              <p className="h4">John Doe</p>

              <p>
                <i className="bi bi-map"></i> 40 rue Laure Diebold <br />
                <i className="bi bi-geo-alt"></i> 69009 Lyon, France <br />
                <i className="bi bi-phone"></i> 10 20 30 40 50 <br />
                <i className="bi bi-envelope-at"></i>john.doe@gmail.com
              </p>

              { /* Carte Google Map */ }

              <div className="ratio ratio-1x1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657540465!2d4.7964039758390316!3d45.77866571240266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1758665928786!5m2!1sfr!2sfr"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </article>

          </div>

        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Contact;