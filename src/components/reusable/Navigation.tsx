import logo from "../../assets/logo.svg";
import "../../styles/navigation.scss";

const Navigation = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-md align-items-center">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="manage logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Career
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <a
            className="collapse navbar-collapse flex-grow-0 nav-link justify-content-end"
            aria-current="page"
            href="#"
          >
            <button className="btn btn-outline-warning" type="submit">
              Get Started
            </button>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
