const buildQuery = (params: Record<string, string | number | undefined>) => {
  const queryParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) {
      queryParams.set(key, String(value));
    }
  }
  return queryParams.toString() ? `?${queryParams.toString()}` : "";
};

export const paths = {
  home: {
    getHref: () => "/",
  },

  catalog: {
    getHref: () => "/catalog",

    category: {
      getHref: (id: number, slug: string, name: string, subTo?: number) => {
        const query = buildQuery({ name, subTo });
        return `${paths.catalog.getHref()}/${slug}_${id}${query}`;
      },
    },

    new_collection: {
      getHref: (name?: string) => {
        const query = buildQuery({ name });
        return `${paths.catalog.getHref()}/new-collection${query}`;
      },

      category: {
        getHref: (id: number, slug: string, name: string, subTo?: number) => {
          const query = buildQuery({ name, subTo });
          return `${paths.catalog.new_collection.getHref()}/${slug}_${id}${query}`;
        },
      },
    },

    bestsellers: {
      getHref: () =>
        `${paths.catalog.getHref()}/bestsellers?name=Наши Бестселлеры`,
    },
    final_sale: {
      getHref: () => `${paths.catalog.getHref()}/final-sale?name=Final Sale`,
    },

    product: {
      getHref: (id: number) => `${paths.catalog.getHref()}/product/${id}`,
    },
  },

  account: {
    getHref: () => "/account",
  },

  search: {
    getHref: (searchPath: string) =>
      `/search${buildQuery({ name: searchPath })}`,
  },
} as const;
