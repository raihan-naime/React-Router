import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex gap-5'>
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;