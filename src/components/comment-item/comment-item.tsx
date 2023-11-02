import cn from 'classnames';
import RatingList from '../rating-list/rating-list';
import { TComment } from '../../types/comment';
import { formatCommentDate, formatCommentMetaDate } from '../../utils';

type CommentItemProps = {
  comment: TComment;
  isLast?: boolean;
}

function CommentItem({ comment, isLast }: CommentItemProps): JSX.Element {
  const { isoDate, user, positive, negative, rating } = comment;

  return (
    <div className="review">
      <div className={cn(
        'review__inner-wrapper',
        { 'review__inner-wrapper--border': isLast }
      )}
      >
        <time className="review__date" dateTime={formatCommentMetaDate(isoDate)}>{formatCommentDate(isoDate)}</time>
        <span className="review__author">Уважаемый(-ая) {user.name}</span>

        <RatingList rating={rating} />

        <div className="review__text-wrapper">
          <p className="review__text">{positive}</p>
          <p className="review__text">{negative}</p>
        </div>
        <div className="review__image-wrapper">
          <picture>
            <source type="image/webp" srcSet={user.avatarUrl} />
            <img src={user.avatarUrl} width="162" height="162" alt="Кот" />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
