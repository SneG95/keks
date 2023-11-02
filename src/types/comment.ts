type TUserComment = {
  name: string;
  avatarUrl: string;
}

export type TComment = {
  id: string;
  isoDate: string;
  user: TUserComment;
  positive: string;
  negative: string;
  rating: number;
}

export type TCommentData = {
  positive: string;
  negative: string;
  rating: number;
}
