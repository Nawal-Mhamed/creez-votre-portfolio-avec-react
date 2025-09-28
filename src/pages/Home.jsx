import johndoe from "../images/john-doe-about.jpg";
import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const Home = () => {
  
  { /* Function for getting informations from the API */}

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch("https://api.github.com/users/github-john-doe");
    const json = await res.json();
    setUsers([json]);
  };

  useEffect(() => {
    getUsers();
  }, []);

  { /* Function for opening the modal */ }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
    <main>
      {/* Header */}
      <header class="img-bg-header d-flex justify-content-center align-items-center text-center text-white mb-5">
        <div>
          <h1 class="p-1 display-2">
            <strong>Bonjour, je suis John Doe</strong>
          </h1>
          <h2 class="p-1 display-4">
            <strong>Développeur web full stack</strong>
          </h2>
          <button class="btn btn-danger" onClick={handleShow}>
            En savoir plus
          </button>
        </div>

        {/* Modale */}

          <Modal show={show} onHide={handleClose} size="xl" centered>
            <Modal.Header closeButton>
              <Modal.Title>Mon profil GitHub</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {users.map((user) => (
                <section class="container-fluid">
                  <div class="row">
                    <article class="col-md-6 col-sm-12">
                      <img
                        src={user.avatar_url}
                        alt={user.name}
                        title={user.name}
                        class="img-fluid p-3"
                      ></img>
                    </article>
                    <article class="col-md-6 col-sm-12 p-3">
                      <p>
                        <i class="bi bi-person"></i>
                        &nbsp;
                        <a href="https://github.com/github-john-doe">
                          {user.name}
                        </a>
                      </p>
                      <hr />
                      <p>
                        <i class="bi bi-geo-alt"></i>
                        {user.location}
                      </p>
                      <hr />
                      <p>
                        <i class="bi bi-card-text"></i>
                        &nbsp; {user.bio}
                      </p>
                      <hr />
                      <p>
                        <i class="bi bi-box"></i>
                        &nbsp; Repositories : {user.public_repos}
                      </p>
                      <hr />
                      <p>
                        <i className="bi bi-people"></i>
                        &nbsp; Followers : {user.followers}
                      </p>
                      <hr />
                      <p>
                        <i className="bi bi-people"></i>
                        &nbsp; Following :{user.following}
                      </p>
                    </article>
                  </div>
                </section>
              ))}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Fermer
              </Button>
            </Modal.Footer>
          </Modal>
      </header>

      {/* Informations John Doe */}
      <section
        id="apropos"
        class="shadow rounded grid gap-5 mx-auto p-4 mb-5 col-md-9 col-sm-11"
      >
        {/* À propos */}
        <div class="row gap-3">
          <article class="col-md col-sm-12">
            <h3>À propos</h3>
            <hr class="border border-primary border-3 opacity-75 mb-5"></hr>
            <img
              src={johndoe}
              alt="Photo de moi au travail"
              title="Photo de moi au travail"
              class="w-100 mb-3"
            ></img>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic modi
              unde odit iusto excepturi iste beatae architecto illo. Fuga libero
              provident non deserunt atque aspernatur molestias, quod voluptatem
              quaerat perferendis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus fugit accusantium velit inventore amet! Voluptate
              cupiditate architecto amet deleniti placeat? Error veritatis ad
              velit optio non repellat qui nobis explicabo.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              officiis ipsam animi excepturi pariatur exercitationem sapiente
              nobis aliquid vel nihil, aspernatur ut, fugiat consequuntur
              reiciendis eaque id minus architecto temporibus.
            </p>
          </article>

          {/* Compétences */}
          <article class="col-md col-sm-12">
            <h3>Mes compétences</h3>
            <hr class="border border-primary border-3 opacity-75 mb-5"></hr>
            <p>
              HTML5 90%
              <div class="progress">
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  aria-label="Danger example"
                  style={{ width: 90 + "%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </p>
            <p>
              CSS3 80%
              <div class="progress">
                <div
                  class="progress-bar bg-info"
                  role="progressbar"
                  aria-label="Info example"
                  style={{ width: 80 + "%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </p>
            <p>
              JAVASCRIPT 70%
              <div class="progress">
                <div
                  class="progress-bar bg-warning"
                  role="progressbar"
                  aria-label="Warning example"
                  style={{ width: 70 + "%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </p>
            <p>
              PHP 60%
              <div class="progress">
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  aria-label="Success example"
                  style={{ width: 60 + "%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </p>
            <p>
              REACT 50%
              <div class="progress">
                <div
                  class="progress-bar bg-primary"
                  role="progressbar"
                  aria-label="Primary example"
                  style={{ width: 50 + "%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </p>
          </article>
        </div>
      </section>
    </main>
    <Footer />
    </div>
  );
};

export default Home;