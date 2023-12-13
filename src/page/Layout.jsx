import React from 'react'
import Navbar from "../components/Navbar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Contact from "../components/Contact.jsx";
import FooterStrip from "../components/FooterStrip.jsx";

const Layout = () => {
    return (
        <>
            <div id={'top'}></div>
            <Navbar />
            <Outlet />
            <Contact />
            <Footer />
            <FooterStrip />
        </>
    )
}
export default Layout
