import React from "react";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <Header></Header>
      <div className="flex gap-5">
        <Sidebar></Sidebar>
        {isNavigating && <span>Loading...</span>}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
