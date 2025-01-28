import type {
  NavigationGuardNext,
  RouteLocationNormalizedGeneric,
  RouteLocationNormalizedLoadedGeneric,
} from 'vue-router';

const isAuthenticatedGuard = async (
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedLoadedGeneric,
  next: NavigationGuardNext,
) => {
  const userId = localStorage.getItem('userId');
  localStorage.setItem('lastPath', to.path);
  console.log(to.path);

  if (!userId) {
    return next({
      name: 'login',
    });
  }

  return next();
};

export default isAuthenticatedGuard;
