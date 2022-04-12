import React from "react";
import RouterLinks from "../RouterLinks";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header></Header>
      <RouterLinks></RouterLinks>
      <Footer></Footer>
    </>
  );
}

export default Layout;
