export const paths = {
  home: {
    getHref: () => "/",
  },

  catalog: {
    root: "/catalog",
    category: {
      getHref: (slug: string, name: string) =>
        `${paths.catalog.root}/${slug}?name=${name}`,
    },
    subCategory: {
      getHref: (parentSlug: string, slug: string, name: string) =>
        `${paths.catalog.root}/${parentSlug}/${slug}/?name=${name}`,
    },

    product: {
      getHref: (id: number) => `${paths.catalog.root}/product/${id}`,
    },
  },

  account: {
    root: {
      getHref: () => "/account",
    },
  },

  search: {
    getHref: (searchPath: string) => `/search?name=${searchPath}`,
  },
} as const;
