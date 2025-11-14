import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/card_4.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>NFC Cards</h1>
                    <p>
                        Technology that connects phones.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Shop now </div>
                        <div className="banner-cta v2">Read more</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;
