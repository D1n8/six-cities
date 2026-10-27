export const routes = {
  main: {
    mask: '/',
    create: () => '/',
  },
  login: {
    mask: '/login',
    create: () => '/login',
  },
  offer: {
    mask: '/offer/:id',
    create: (id: number | string) => `/offer/${id}`,
  },
  favorites: {
    mask: '/favorites',
    create: () => '/favorites',
  },
};
