export type AuthResponse = {
  message: string;
  token: string;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export type UserData = {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  user_email: string;
  slug: string;
  avatar_urls: Record<string, string>;
  meta: any;
  yoast_head: any;
  yoast_head_json: any;
  is_super_admin: boolean;
  woocommerce_meta: any;
  _links: Links;
};

type Link = {
  href: string;
  targetHints?: {
    allow: string[];
  };
};

type Links = {
  self: Link[];
  collection: Link[];
};
