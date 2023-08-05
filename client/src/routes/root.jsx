import { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { AuthContext } from '../provider/Authentication';

const Root = () => {
  const { loading } = useContext(AuthContext);
  const pathName = useLocation();

  useEffect(() => {
    scrollTo(0, 0);
  }, [pathName]);

  return (
    <>
      <Helmet>
        <title>Wheeltopia</title>
      </Helmet>
      <Header />
      <Toaster />
      <main
        className={`${loading && 'mt-1 grid place-items-center'} w-full flex-1`}
      >
        {loading ? <Loading /> : <Outlet />}
      </main>
      <Footer />
    </>
  );
};
export default Root;
