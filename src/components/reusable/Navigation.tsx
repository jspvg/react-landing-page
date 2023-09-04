import logo from "../../assets/logo.svg";
import "../../styles/navigation.scss";

const Navigation = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-md align-items-center">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
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
                <a className="nav-link fw-bold text-blue-dark" aria-current="page" href="/pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold text-blue-dark" aria-current="page" href="/products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold text-blue-dark" aria-current="page" href="/about-us">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold text-blue-dark" aria-current="page" href="/careers">
                  Careers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold text-blue-dark" aria-current="page" href="/community">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <a
            className="collapse navbar-collapse flex-grow-0 nav-link justify-content-end"
            aria-current="page"
            href="get-started"
          >
            <button className="btn btn-red-orange text-white" type="submit" style={{ borderRadius: '20px' }}>
              Get Started
            </button>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
