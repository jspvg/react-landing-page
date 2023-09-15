import { Feature } from '../../lib/types';

interface FeaturesProps {
  features: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <>
      {features.map((feature) => (
        <div key={feature.id}>
          <p>{feature.id}</p>
          <p>{feature.title}</p>
          <p>{feature.description}</p>
        </div>
      ))}
    </>
  );
};

export default Features;
