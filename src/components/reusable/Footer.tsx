import { useScreenSize } from '../../hooks/useScreenSize';
import { Link } from '../../lib/types';
import Button from './Button';

interface FooterProps {
  links: Link[];
}

const Footer: React.FC<FooterProps> = ({ links }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isScreenXL, isScreenLg, isScreenMd, isScreenSm, isScreenMobile } =
    useScreenSize();
  const pages: string[] = [
    'Home',
    'Pricing',
    'Products',
    'About Us',
    'Careers',
    'Community',
    'Provacy Policy',
  ];
  return (
    <div className="container row d-flex footer-blue-darkest">
      <div
        className={`d-flex col fs-1 fw-bold ${
          isScreenMobile || isScreenSm || isScreenMd
            ? 'm-5 text-center'
            : 'ms-5 p-5'
        }`}
      >
        <div className="d-flex row me-2">
          <p className="d-flex row text-light">manage</p>
          <div className="d-flex row p-0">
            {links.map((link) => (
              <a href={link.link} key={link.id} className="col">
                <img src={link.icon} alt={link.name} />
              </a>
            ))}
          </div>
        </div>
        <div className="d-flex row">
          {pages.slice(0, 4).map((page, index) => (
            <p key={index} className="text-white fw-light fs-6 ms-2">
              {page}
            </p>
          ))}
        </div>
      </div>
      <div
        className={`d-flex col text-white fs-1 fw-bold ${
          isScreenMobile || isScreenSm || isScreenMd
            ? 'm-5 justify-content-center'
            : 'me-5 p-5'
        } align-items-center`}
      >
        <div className="d-flex row">
          {pages.slice(4).map((page, index) => (
            <p key={index} className="text-white fw-light fs-6 ms-2">
              {page}
            </p>
          ))}
        </div>
        <div className="d-flex col-lg row">
          <input type="text" className="d-flex form-control rounded-pill col form-height" />
          <a href="#" className='d-flex col'>
            <Button color="orange" text="Go" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
