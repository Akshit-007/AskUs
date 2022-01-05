import React, { useState, useEffect } from "react";
import '../Styles/community.css';

import Navbar from "./Navbar";
import Footer from "./Footer";



const Community = () => {

    return (
        <>

            <div>
                <Navbar />
                <br />
                <div >
                    <div className="communities_heading">  Communities </div>
                    <br />
                    <div className="different_community">
                        <div className="community">
                            <div>Codechef BVM</div>
                            <div className="community_visit" >
                                <br />
                                <a target="_blank" href="https://www.bvmengineering.ac.in/Codechef/" ><span className="link_style_btn_visit"> Visit</span></a>
                            </div>
                        </div>
                        <div className="community"><div>GDSC BVM</div> <div className="community_visit" >

                            <br />
                            <a target="_blank" href="https://www.bvmengineering.ac.in/GDSC/" ><span className="link_style_btn_visit"> Visit</span></a>

                        </div>
                        </div>
                        <div className="community"><div>TRS BVM </div>
                            <div className="community_visit" >
                                <br />
                                <a target="_blank" href="https://www.bvmengineering.ac.in/TRS/" ><span className="link_style_btn_visit"> Visit</span></a>

                            </div>
                        </div>
                        <div className="community"><div>CSI BVM </div><div className="community_visit" >
                            <br />
                            <a target="_blank" href="https://www.bvmengineering.ac.in/CSI/" ><span className="link_style_btn_visit"> Visit</span></a>


                        </div></div>
                        <div className="community"><div>IEEE BVM</div> <div className="community_visit" >
                            <br />
                            <a target="_blank" href="https://ieeebvmsb.com/" ><span className="link_style_btn_visit"> Visit</span></a>


                        </div></div>
                        <div className="community"><div>ISTE BVM</div> <div className="community_visit" >
                            <br />
                            <a target="_blank" href="https://sites.google.com/a/bvmengineering.ac.in/istestudentsbvm/" ><span className="link_style_btn_visit"> Visit</span></a>


                        </div></div>
                    </div>

                </div>




            </div>
            <br />

        </>
    );
};


export default Community;