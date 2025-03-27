export const paths = {
  home: {
    getHref: () => "/",
  },

  catalog: {
    root: {
      getHref: () => "/catalog",
    },
    category: {
      getHref: (category: string) =>
        `${paths.catalog.root.getHref()}/${category}`,
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
