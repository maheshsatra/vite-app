import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import Header from "../header/Header";
import SideMenu from "../header/SideMenu";
import { useSelector } from "react-redux";

function PrivateRoutes() {
  const token = useAuth();
  const sideMenuStatus = useSelector((state) => state.sidemenu.isShowSideMenu);
  console.log(sideMenuStatus);
  return token ? (
    <>
      <Header />
      <div className="flex w-full min-h-screen bg-gray-50">
        {sideMenuStatus && (
          <div className="w-[250px] bg-white shadow-lg hidden lg:block">
            <SideMenu />
          </div>
        )}
        <div className="flex-1 bg-white">
          <Outlet />
        </div>
      </div>
    </>
  ) : (
    <Navigate to="/" />
  );
}

export default PrivateRoutes;
