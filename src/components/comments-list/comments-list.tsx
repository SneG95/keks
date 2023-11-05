import { TComment } from '../../types/comment';
import CommentItem from '../comment-item/comment-item';

type CommentsListProps = {
  comments: TComment[];
}

function CommentsList({comments}: CommentsListProps): JSX.Element {
  return (
    <section className="comments">
      <h2 className="visually-hidden">Список комментариев</h2>
      <div className="container">
        <div className="comments__wrapper">

          {
            comments.map((comment) => <CommentItem key={comment.id} comment={comment} />)
          }

        </div>
        <div className="comments__show-more">
          <button className="btn btn--second comments__button" type="button">Показать еще</button>
        </div>
      </div>
    </section>
  );
}

export default CommentsList;
