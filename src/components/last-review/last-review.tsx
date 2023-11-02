import CommentItem from '../comment-item/comment-item';
import { useAppSelector } from '../../hooks';
import { getLastComment, getLastCommentErrorStatus } from '../../store/comments-process/comments-process.selectors';

function LastReview(): JSX.Element {
  const lastComment = useAppSelector(getLastComment);
  const hasError = useAppSelector(getLastCommentErrorStatus);

  return (
    <section className="last-review">
      <div className="container">
        <h2 className="last-review__title">последний отзыв</h2>
        {lastComment && !hasError && <CommentItem comment={lastComment} isLast />}
      </div>
    </section>
  );
}

export default LastReview;
