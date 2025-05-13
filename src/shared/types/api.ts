// ---------- // API // ---------- //

export type WooResponse<T> = {
  items: T;
  totalItems: string;
  totalPages: string;
};

// ---------- // Auth // ---------- //

export type AuthResponse = {
  message: string;
  token: string;
};

export type UserAddress = {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  postalCode: string;
  country: string;
  region: string;
  city: string;
  phone: string;
  isDefaultShipping: boolean;
  isDefaultBilling: boolean;
};

export type UserData = {
  id: number;
  name: string;
  first_name: string;
  last_name: string;
  url: string;
  description: string;
  link: string;
  email: string;
  slug: string;
  avatar_urls: Record<string, string>;
  meta: {
    birth_date: string;
    phone_number: string;
  };
  multiple_addresses: UserAddress[];
  is_super_admin: boolean;
  woocommerce_meta: unknown;
  _links: Links;
};

// ---------- // Other // ---------- //

export type ProductCategory = {
  id: number;
  name: string;
  slug: string;
  parent: number;
};

export type StockStatus = "instock" | "outofstock" | "onbackorder";

export type Image = {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  src: string;
  name: string;
  alt: string;
};

export type Attribute = {
  id: number;
  name: string;
  slug: string;
  description: string;
  menu_order: number;
  count: number;
};

export type Link = {
  href: string;
  targetHints?: {
    allow: string[];
  };
};

export type Links = {
  self: Link[];
  collection: Link[];
};
