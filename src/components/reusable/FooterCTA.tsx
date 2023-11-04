import { useScreenSize } from '../../hooks/useScreenSize';
import Button from './Button';

const FooterCTA = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isScreenXL, isScreenLg, isScreenMd, isScreenSm, isScreenMobile } =
    useScreenSize();
  return (
    <div className="container col-lg row d-flex mt-5 footer-orange">
      <p
        className={`d-flex row-lg col text-white fs-1 fw-bold ${
          isScreenMobile || isScreenSm || isScreenMd
            ? 'm-5 text-center'
            : 'ms-5 p-5'
        }`}
      >
        Simplify how your team works today.
      </p>
      <div
        className={`d-flex row-lg col ${
          isScreenMobile || isScreenSm || isScreenMd
            ? 'm-5 justify-content-center'
            : 'me-5 p-5 justify-content-end'
        } align-items-center`}
      >
        <a href="get-started">
          <Button color="white" text="Get Started" />
        </a>
      </div>
    </div>
  );
};

export default FooterCTA;
