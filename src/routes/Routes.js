
import { useContext } from 'react';
import AuthContext, { AuthProvider } from '../context/AuthContext';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import { BrowserRouter, Route, Routes as ReactRoutes } from 'react-router-dom';
import Products from '../pages/Products/Products';
import Product from '../pages/Product/Product';
import { Login } from '../pages/Login/Login';
import User from '../pages/User/User';
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute';
import { NotFound } from '../pages/NotFound/NotFound';

const Routes = () => {
  // Context
  const isAuth = useContext(AuthContext);
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <ReactRoutes>
            <Route path='/' element={<Home />} />

            <Route path='products'>
              <Route index element={<Products />} />
              <Route path=':product' element={<Product />} />
            </Route>

            {
              !isAuth && <Route path='login' element={<Login />} />
            }

            <Route 
              path='usuario/:username'
              element={
                <ProtectedRoute redirectTo={"/login"}>
                  <User />
                </ProtectedRoute>
              }
            />

            <Route path='*' element={<NotFound />} />

          </ReactRoutes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Routes;
