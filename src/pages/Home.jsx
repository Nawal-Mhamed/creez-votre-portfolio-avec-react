import johndoe from "../images/john-doe-about.jpg";
import Footer from "../components/Footer";

const Home = () => {
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
          <a href="#apropos" class="btn btn-danger">
            En savoir plus
          </a>
        </div>
      </header>

      {/* Informations John Doe */}
      <section
        id="apropos"
        class="shadow rounded grid gap-5 mx-auto p-4 mb-5 w-75"
      >
        {/* À propos */}
        <div class="row">
          <article class="col-6">
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
          <article class="col-6">
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