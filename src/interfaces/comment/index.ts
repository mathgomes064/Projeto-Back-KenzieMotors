export interface ICommentCreate {
  description: string;
  user: any;
  vehicle: any;
}

export interface IComment extends ICommentCreate {
  id: string;
  created_at: Date;
}

export interface ICommitUpdate {
  description?: string;
  vehicle?: any;
}
