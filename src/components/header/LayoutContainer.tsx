import { Header } from "./LayoutContainer.style";
import { Outlet } from "react-router-dom";

export function LayoutContainer(){

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}