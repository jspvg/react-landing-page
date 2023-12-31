import { useState, useEffect } from 'react';
import Button from './Button';
import { useScreenSize } from '../../hooks/useScreenSize';
import logo from '../../assets/logo.svg';
import '../../styles/navigation.scss';

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const { isScreenXL, isScreenLg, isScreenMd } = useScreenSize();

  useEffect(() => {
    const handleNavCollapse = () => {
      if (isScreenMd || isScreenLg || isScreenXL) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener('resize', handleNavCollapse);

    return () => {
      window.removeEventListener('resize', handleNavCollapse);
    };
  }, [isScreenMd, isScreenLg, isScreenXL]);

  return (
    <div className="d-flex m-lg-4 px-lg-5">
      <div className="container">
        <nav className="navbar navbar-expand-lg align-items-center">
          <div className="container-fluid row-gap-5">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="manage logo" />
            </a>
            <button
              className={`navbar-toggler ${isNavOpen ? '' : 'collapsed'}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded={isNavOpen ? 'true' : 'false'}
              aria-label="Toggle navigation"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${
                isNavOpen
                  ? 'show mx-auto p-5 text-center bg-white shadow-lg'
                  : ''
              }`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li className="nav-item">
                  <a
                    className="nav-link fw-bold text-blue-dark"
                    aria-current="page"
                    href="/pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fw-bold text-blue-dark"
                    aria-current="page"
                    href="/products"
                  >
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fw-bold text-blue-dark"
                    aria-current="page"
                    href="/about-us"
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fw-bold text-blue-dark"
                    aria-current="page"
                    href="/careers"
                  >
                    Careers
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fw-bold text-blue-dark"
                    aria-current="page"
                    href="/community"
                  >
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
              <Button color="orange" text="Get Started" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
