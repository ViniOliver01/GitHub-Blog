import { Header } from "./LayoutContainer.style";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Logo.png";

export function LayoutContainer(){

  return (
    <div>
      <Header>
        <img src={Logo}/>
      </Header>
      <Outlet />
    </div>
  );
}