import React from 'react'
import {Outlet} from "react-router-dom"
import Header from './Header';
import Footer from './Footer';
//outlet should be used in parent route elements to render their child route elements.
//This allows nested UI to show up when a child routes are rendered.

const Layout =() => {
    return (
        <>
        <Header/>
        <Outlet />
        <Footer />
        </>
    )
};

export default Layout
