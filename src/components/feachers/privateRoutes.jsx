import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import Header from "../header/Header";
import SideMenu from "../header/SideMenu";
import { useSelector } from "react-redux";

function PrivateRoutes() {
  const token = useAuth();
  const sideMenuStatus = useSelector((state) => state.sidemenu.isShowSideMenu)
  console.log(sideMenuStatus)
  return token ? (
    <>
      <Header />
      <div className="w-full flex gap-2">
       {sideMenuStatus && <div className="w-[20%]"><SideMenu  /></div>}
          <Outlet />
      </div>
    </>
  ) : (
    <Navigate to="/" />
  );
}

export default PrivateRoutes;
