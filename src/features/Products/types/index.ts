import { Image, Links } from "@/types/api";

export interface Product {
  id: string;
  title: string;
  colors: {
    id: number;
    hex: string;
  }[];
  sizes: {
    id: number;
    size: string;
  }[];
  price: number;
  sale?: {
    price: number;
    amount: number;
  };
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

type ProductCategory = {
  id: number;
  name: string;
  slug: string;
};

type Attribute = {
  id: number;
  name: string;
  position: number;
  visible: boolean;
  variation: boolean;
  options: string[];
};

type Dimensions = {
  length: string;
  width: string;
  height: string;
};

export type ProductServer = {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  type: string;
  status: string;
  featured: boolean;
  catalog_visibility: string;
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  date_on_sale_from: string | null;
  date_on_sale_from_gmt: string | null;
  date_on_sale_to: string | null;
  date_on_sale_to_gmt: string | null;
  price_html: string;
  on_sale: boolean;
  purchasable: boolean;
  total_sales: number;
  virtual: boolean;
  downloadable: boolean;
  downloads: unknown[];
  download_limit: number;
  download_expiry: number;
  external_url: string;
  button_text: string;
  tax_status: string;
  tax_class: string;
  manage_stock: boolean;
  stock_quantity: number | null;
  stock_status: string;
  backorders: string;
  backorders_allowed: boolean;
  backordered: boolean;
  sold_individually: boolean;
  weight: string;
  dimensions: Dimensions;
  shipping_required: boolean;
  shipping_taxable: boolean;
  shipping_class: string;
  shipping_class_id: number;
  reviews_allowed: boolean;
  average_rating: string;
  rating_count: number;
  related_ids: number[];
  upsell_ids: number[];
  cross_sell_ids: number[];
  parent_id: number;
  purchase_note: string;
  categories: ProductCategory[];
  tags: unknown[];
  images: Image[];
  attributes: Attribute[];
  default_attributes: unknown[];
  variations: unknown[];
  grouped_products: unknown[];
  menu_order: number;
  meta_data: unknown[];
  _links: Links;
};

export type TProductGrid = "big" | "small";

export interface Color {
  id: number;
  hex: string;
}
