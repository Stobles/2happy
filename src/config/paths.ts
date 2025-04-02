export const paths = {
  home: {
    getHref: () => "/",
  },

  catalog: {
    root: "/catalog",
    category: {
      getHref: (slug: string, name: string, subTo?: number) =>
        `${paths.catalog.root}/${slug}?name=${name}${
          subTo ? `&subTo=${subTo}` : ""
        }`,
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
