import { ReviewData } from '../../lib/types';

interface ReviewProps {
  review: ReviewData;
}

const Review: React.FC<ReviewProps> = ({ review }) => {
  return (
    <div className="card col d-flex justify-content-center align-items-center mx-1 border-0">
      <div className="card-body text-center p-4 bg-gray-lighter">
        <img
          src={review.image}
          className='user-img mb-4'
          alt={`${review.name}'s image`}
        />
        <h1 className="fw-bold header-blue-dark text-center fs-sm-6">
          {review.name}
        </h1>
        <p className="text-blue-gray text-center p-2">{review.review}</p>
      </div>
    </div>
  );
};

export default Review;
