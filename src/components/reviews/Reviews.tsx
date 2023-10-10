import { useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import GetStartedButton from '../reusable/GetStartedButton';
import {ReviewComponent} from './Review';

interface ReviewsProps {
  reviews: ReviewData[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  const reviewRefs = useRef([]);
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <h1 className="fw-bold header-blue-dark text-center mb-5">
          What they've said
        </h1>
        <Carousel>
          {reviews.map((review, index) => (
            <div key={review.id} ref={(el) => (reviewRefs.current[index] = el)}>
              <ReviewComponent review={review} ref={reviewRefs.current[index]} />
            </div>
          ))}
        </Carousel>

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
