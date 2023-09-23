import { ReviewData } from '../../lib/types';

interface ReviewProps {
  review: ReviewData;
}

const Review: React.FC<ReviewProps> = ({ review }) => {
  return (
    <div className="card col d-flex justify-content-center align-items-center">
      <div className="card-body p-4">
        <img
          src={review.image}
          alt={`${review.name}'s image`}
        />
        <h1 className="row fw-bold header-blue-dark text-center fs-sm-6">
          {review.name}
        </h1>
        <p className="row text-blue-gray text-center p-2">{review.review}</p>
      </div>
    </div>
  );
};

export default Review;
