import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';

const Layout = (props) => {
    return (
    <div className="container">
        {props.children}
        <Sidebar/>
    </div>
    );
}
export default Layout;