import { Feature } from '../../lib/types';

interface FeaturesProps {
  features: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <>
      {features.map((feature) => (
        <div key={feature.id}>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-start mt-2 border-0">
              <span className="badge features-pill rounded-pill px-3 py-2">
                {feature.id < 10 ? `0${feature.id}` : feature.id}
              </span>
              <div className="ms-4 me-auto">
                <div className="fw-bold header-blue-dark">{feature.title}</div>
                <p className="text-blue-gray my-3 w-75">{feature.description}</p>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default Features;
