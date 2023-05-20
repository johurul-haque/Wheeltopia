import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useTitle from "../hooks/useTitle";

const Root = () => {
  useTitle("");
  return (
    <>
      <Header />
      <main className="w-full flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Root;
