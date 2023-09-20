import { useScreenSize } from '../../hooks/useScreenSize';
import { Feature } from '../../lib/types';

interface FeaturesProps {
  features: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isScreenXL, isScreenLg, isScreenMd, isScreenSm, isScreenMobile } =
    useScreenSize();

  return (
    <>
      {features.map((feature) => (
        <div key={feature.id}>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-start mt-2 border-0">
              <div
                className={`${
                  isScreenMobile || isScreenSm || isScreenMd
                    ? ''
                    : 'ms-4 me-auto'
                }`}
              >
                <div
                  className={`fw-bold header-blue-dark ${
                    isScreenMobile || isScreenSm || isScreenMd
                      ? 'fs-sm-6 features-title-bg rounded-left'
                      : ''
                  }`}
                >
                  <span className="badge features-pill rounded-pill px-3 py-2 me-3 me-sm-2">
                    {feature.id < 10 ? `0${feature.id}` : feature.id}
                  </span>
                  {feature.title}
                </div>
                <p
                  className={`text-blue-gray my-3 pe-3 pe-sm-0 pe-lg-1 ${
                    isScreenMobile || isScreenSm || isScreenMd
                      ? 'w-100 fs-sm-6'
                      : isScreenLg
                      ? ''
                      : 'w-75'
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default Features;
