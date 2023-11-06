import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const ClientLayout = (props: Props) => {
  return (
    <div>
      Header
      <Outlet />
      Footer
    </div>
  );
};

export default ClientLayout;
