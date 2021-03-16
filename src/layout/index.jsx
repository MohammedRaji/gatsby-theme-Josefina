import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
//import config from "../../data/SiteConfig";
import "./index.css";

export default function MainLayout({ children }) {
  return (
    <>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      <Header/>
      <div className="main-content container">
      <div className ="row">
      {children}
      <Sidebar/>
      </div>
      </div>
      <Footer config={config} />
    </>
    
  );
}
