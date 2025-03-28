export type Category = {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
  display: string;
  image: CategoryImage[];
  menu_order: number;
  count: number;
};

export type CategoryImage = {
  id: number;
  src: string;
  name: string;
  alt: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
};
