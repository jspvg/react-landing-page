import Features from './Features';
import { features } from '../../data/features';
import { useScreenSize } from '../../hooks/useScreenSize';

const Functionality = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isScreenXL, isScreenLg, isScreenMd, isScreenSm, isScreenMobile } =
    useScreenSize();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div
          className={`row col-lg card border-0 ${
            isScreenMobile ? 'w-100 text-center' : 'w-50 h-50'
          }`}
        >
          <div className="card-body p-lg-5 d-flex flex-column justify-content-center">
            <h1 className="card-title fw-bold header-blue-lighter px-5 px-sm-0">
              What's different about Manage?
            </h1>
            <p className={`card-text text-blue-gray px-4 px-sm-0 ${isScreenMobile ? 'w-100 my-2 fs-sm-6': 'w-75 my-4 fs-xl-7'}`}>
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
        </div>
        <div
          className={`row col-lg card border-0 ${
            isScreenMobile ? 'w-100' : 'w-50'
          }`}
        >
          <div className={`card-body d-flex flex-column justify-content-center ${isScreenMobile ? 'p-0': ''}`}>
            <Features features={features} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Functionality;
