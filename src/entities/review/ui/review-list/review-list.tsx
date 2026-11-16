import type { Review } from '../../../../types';
import ReviewItem from '../review-item';

function ReviewList({ list }: { list: Review[] }) {
  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{list.length}</span>
      </h2>
      <ul className="reviews__list">
        {list.map((item) => (
          <ReviewItem {...item} key={item.id} />
        ))}
      </ul>
    </>
  );
}

export default ReviewList;
