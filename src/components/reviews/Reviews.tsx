import { useScreenSize } from '../../hooks/useScreenSize';
import GetStartedButton from '../reusable/GetStartedButton';
import Review from './Review';

interface ReviewsProps {
  reviews: ReviewData[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  const { isScreenXL, isScreenLg, isScreenMd } = useScreenSize();

  let reviewNum = 1;
  if (isScreenMd) reviewNum = 2;
  else if (isScreenLg) reviewNum = 3;
  else if (isScreenXL) reviewNum = reviews.length;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <h1 className="fw-bold header-blue-dark text-center mb-5">
          What they've said
        </h1>
        {reviews.slice(0, reviewNum).map((review) => (
          <Review key={review.id} review={review} />
        ))}
        <div className="d-flex justify-content-center mt-5">
          <a href="get-started">
            <GetStartedButton />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
