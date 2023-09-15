import Functionality from '../components/functionality/Functionality';
import Statistics from '../components/statistics/Statistics';

const Home = () => {
  return (
    <div className="d-flex row m-4">
      <Statistics />
      <Functionality />
    </div>
  );
};

export default Home;
