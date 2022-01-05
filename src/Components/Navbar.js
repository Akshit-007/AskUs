import React, { useState, useEffect } from "react";
import "../Styles/Navbar.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from '../actions/auth'

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import { NavLink } from "react-router-dom";




const Navbar = () => {

    const [showNav, setShowNav] = useState(true);
    const [user, setUser] = useState('');
    const history = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {

        let us = JSON.parse(localStorage.getItem('profile'));

        if (us !== null) {
            us = us.result.firstName;
            setUser(us);
        }
        else {
            setUser('');
        }



    }, [user]);


    const handleLogout = () => {

        dispatch(logout(history));
        setUser('');

    }

    return (
        <>


            <div className="main-nav">
                {/* 1st logo part  */}
                <div className="logo">

                    <span className="logo_style" >AskUs</span>

                </div>

                {/* 2nd menu part  */}
                <div className="menu-link" style={{ display: showNav ? "block" : "none" }}>
                    <ul>

                        <li className="nav_list">
                            <NavLink activeclassname="active" className="main_link" to="/"><span className="link_style"> Home </span></NavLink>
                        </li>

                        <li className="nav_list">
                            <NavLink className="main_link" to="/discuss"><span className="link_style"> Discuss</span></NavLink>
                        </li>
                        <li className="nav_list">
                            <NavLink className="main_link" to="/community"><span className="link_style"> Communities</span></NavLink>
                        </li>
                        {user === '' ? <li className="nav_btn">
                            <NavLink className="main_link" to="/auth"><span className="link_style_btn"> Sign In </span></NavLink>

                        </li> : <li className="nav_btn">
                            <NavLink className="main_link" to="/" ><span className="link_style_btn" onClick={handleLogout}>Logout</span></NavLink>

                        </li>}





                    </ul>

                </div>



                {/* hamburget menu start  */}
                <div className="hamburger-menu">
                    {showNav ? <AiOutlineClose onClick={() => setShowNav(!showNav)} /> : <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />}

                </div>

            </div>



        </>
    );
};

export default Navbar;