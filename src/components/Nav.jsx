import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav class="text-uppercase navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="container">
          <Link to="/" class="navbar-brand ps-4">
            John Doe
          </Link>
        </div>
        <div
          class="collapse navbar-collapse container justify-content-end"
          id="navbarNavDropdown"
        >
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
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
            <li class="nav-item">
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
            <li class="nav-item">
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
            <li class="nav-item">
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
            <li class="nav-item">
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
