import React from "react";
import '../Styles/Home.css';
import Navbar from "./Navbar";
import Footer from "./Footer";




const Home = () => {


    return (
        <>

            <div>
                <Navbar />
                <div className="home_main_page">
                    <div className="home_main_page_content">

                        <div className="line_1_home_main_page_content">OF THE STUDENT ,</div>
                        <div className="line_2_home_main_page_content">BY THE STUDENT,</div>
                        <div className="line_3_home_main_page_content">FOR THE STUDENT !!</div>
                    </div>
                </div>

            </div>
            <div>
                <Footer />
            </div>
        </>
    );
};


export default Home;