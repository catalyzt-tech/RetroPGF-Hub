export type UserResponse = {
  id: string;
  email: string;
  profile?: string;
  user_name?: string;
  first_name?: string;
  last_name?: string;
};

export type UserProjectReponse = {
  id: string;
  name: string;
  logo_url: string;
  banner_url: string;
  website_url: string;
  crypto_category: string;
  description: string;
  reason: string;
  category: string;
  contact: string;
  create_by: string;
  create_at: string;
};

export type UserLikeProjectResponse = {
  id: number;
  user_id: string;
  project_id: string;
  create_at: string;
};

export type ProjectResponse = {
  id: string;
  name: string;
  logo_url: string;
  category: string;
  crypto_category: string;
  description: string;
  _count: { Comment: number; Like: number };
};

export type CommentProjectResponse = {
  id: number;
  content: string;
  user_id: string;
  user: UserResponse;
  project_id: string;
  create_at: string;
};
