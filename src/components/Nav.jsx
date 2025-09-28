import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="text-uppercase navbar navbar-expand-lg navbar-dark bg-dark">
      
      <div className="container-fluid">

        { /* Logo textuel */ }

        <Link to="/" className="navbar-brand ps-3 disable-hover">
          John Doe
        </Link>

        { /* Menu burger */ }

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        
        { /* Boutons de navigation */ }

        <div
          className="collapse navbar-collapse md-d-flex justify-content-end"
          id="navbarNavDropdown"
        >

          <ul className="navbar-nav mb-2 mb-lg-0 ps-3">

            { /* Accueil */ }

            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "navbar-brand nav-link pending"
                    : isActive
                    ? "navbar-brand nav-link active"
                    : "navbar-brand nav-link"
                }
              >
                Accueil
              </NavLink>
            </li>

            { /* Services */ }

            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "navbar-brand nav-link pending"
                    : isActive
                    ? "navbar-brand nav-link active"
                    : "navbar-brand nav-link"
                }
              >
                Services
              </NavLink>
            </li>

            { /* Portfolio */ }

            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "navbar-brand nav-link pending"
                    : isActive
                    ? "navbar-brand nav-link active"
                    : "navbar-brand nav-link"
                }
              >
                Portfolio
              </NavLink>
            </li>

            { /* Contact */ }

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "navbar-brand nav-link pending"
                    : isActive
                    ? "navbar-brand nav-link active"
                    : "navbar-brand nav-link"
                }
              >
                Contact
              </NavLink>
            </li>

            { /* Mentions légales */ }

            <li className="nav-item">
              <NavLink
                to="/mentions-legales"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "navbar-brand nav-link pending"
                    : isActive
                    ? "navbar-brand nav-link active"
                    : "navbar-brand nav-link"
                }
              >
                Mentions légales
              </NavLink>
            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
};

export default Nav;
