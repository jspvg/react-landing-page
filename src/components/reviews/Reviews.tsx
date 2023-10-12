import GetStartedButton from '../reusable/GetStartedButton';
import Review from './Review';

interface ReviewsProps {
  reviews: ReviewData[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <h1 className="fw-bold header-blue-dark text-center mb-5">
          What they've said
        </h1>
        {reviews.map((review) => (
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
