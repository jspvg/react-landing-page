import Functionality from '../components/functionality/Functionality';
import FooterCTA from '../components/reusable/FooterCTA';
import Reviews from '../components/reviews/Reviews';
import Statistics from '../components/statistics/Statistics';
import { reviews } from '../data/reviews';
import '../styles/home.scss';

const Home = () => {
  return (
    <>
      <div className="d-flex row m-sm-4">
        <Statistics />
        <Functionality />
        <Reviews reviews={reviews} />
      </div>
      <div className="d-flex row">
        <FooterCTA />
      </div>
    </>
  );
};

export default Home;
