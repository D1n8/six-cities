import { Navigate } from 'react-router-dom';

type PrivateRouteType = {
  children: React.ReactNode;
  isAuth: boolean;
  redirectTo?: string;
};

function PrivateRoute({
  children,
  isAuth,
  redirectTo = '/login',
}: PrivateRouteType) {
  return isAuth ? children : <Navigate to={redirectTo} />;
}

export default PrivateRoute;
