import { Reviews } from '../../types/types';
import ReviewComponent from '../review/review';

type ReviewListComponentProps = {
  reviews: Reviews;
}

function ReviewListComponent({reviews}: ReviewListComponentProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((item) => (
        <ReviewComponent key={item.id} review={item} />
      ))}
    </ul>
  );
}

export default ReviewListComponent;
