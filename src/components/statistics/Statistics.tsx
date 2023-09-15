import GetStartedButton from '../reusable/GetStartedButton';
import illustration from '../../assets/illustration-intro.svg';
import '../../styles/home.scss';
import { useEffect, useState } from 'react';

const useScreenSize = () => {
  const [isScreenXL, setIsScreenXL] = useState(false);
  const [isScreenLg, setIsScreenLg] = useState(false);
  const [isScreenMd, setIsScreenMd] = useState(false);
  const [isScreenSm, setIsScreenSm] = useState(false);
  const [isScreenMobile, setIsScreenMobile] = useState(false);

  const handleScreenChange = () => {
    const windowWidth = window.innerWidth;

    setIsScreenXL(windowWidth >= 1200);
    setIsScreenLg(windowWidth >= 992 && windowWidth < 1200);
    setIsScreenMd(windowWidth >= 768 && windowWidth < 992);
    setIsScreenSm(windowWidth >= 576 && windowWidth < 768);
    setIsScreenMobile(windowWidth < 576);
  };

  useEffect(() => {
    handleScreenChange();

    window.addEventListener('resize', handleScreenChange);

    return () => {
      window.removeEventListener('resize', handleScreenChange);
    };
  }, []);

  return { isScreenXL, isScreenLg, isScreenMd, isScreenSm, isScreenMobile };
};

const Statistics = () => {
  const { isScreenXL, isScreenLg, isScreenMd, isScreenSm, isScreenMobile } =
    useScreenSize();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div
          className={`row col-lg order-2 order-lg-1 card m-md-5 m-lg-0 border-0 ${
            isScreenLg ? 'w-50' : isScreenMd || isScreenSm ? 'w-75' : 'w-100'
          } ${isScreenMobile ? 'my-1' : ''}`}
        >
          <div
            className={`card-body p-lg-5 ${
              (isScreenXL || isScreenLg) ? ' d-flex flex-column justify-content-center' : ''
            }`}
          >
            <h1
              className={`card-title fw-bold header-blue-dark ${
                isScreenXL
                  ? 'fs-xl-0'
                  : isScreenLg
                  ? 'fs-lg-0'
                  : isScreenMd
                  ? 'fs-md-0 text-center'
                  : 'fs-sm-0 text-center'
              }`}
            >
              Bring everyone together to build better products.
            </h1>
            <p
              className={`card-text text-blue-gray ${
                isScreenXL
                  ? 'my-4 fs-xl-7 w-75'
                  : isScreenLg
                  ? 'my-4 fs-sm-6 w-100'
                  : isScreenMd
                  ? 'text-center w-100'
                  : 'fs-sm-6 text-center w-100'
              }`}
              id="cardParagraph"
            >
              Manage makes it simple for software teams to play day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <div
              className={`d-flex ${(isScreenXL || isScreenLg) ? '' : 'justify-content-center'}`}
            >
              <a href="get-started">
                <GetStartedButton />
              </a>
            </div>
          </div>
        </div>
        <div
          className={`row col-lg order-1 order-lg-2 card m-md-5 m-lg-0 border-0 ${
            isScreenLg ? 'w-50' : isScreenMd || isScreenSm ? 'w-75' : 'w-100'
          } ${isScreenMobile ? 'my-1' : ''}`}
        >
          <div className="card-body">
            <img
              className={`w-100 ${(isScreenXL || isScreenLg) ? 'h-100' : ''} `}
              src={illustration}
              alt="graphic illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
