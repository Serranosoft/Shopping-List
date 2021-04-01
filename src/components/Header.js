import React from "react";
import styled from '@emotion/styled'
import { Link } from "react-router-dom";
import Logo from "../images/logo.png"

const Header = () => {
    return (
        <HeadImage>
            <HeadBg>
                <Nav>
                    <HeaderLogo src={Logo}/>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    {/* <Link to="/cart">Shopping Cart</Link> */}
                </Nav>
                <SvgParent viewBox="0 0 1440 120">
                    <path
                        d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z" ></path>
                </SvgParent>
            </HeadBg>
        </HeadImage>
    )
}

export default Header;


const HeadImage = styled.div`
    display: block;
    width: 100%;
    background-color: rgb(38,38,38);
    height: 200px;
    margin: 0;
    position: relative;
    overflow: hidden;
    left: 0;    

    @media (max-width: 550px) {
        height: 150px;
    }
    `

const HeadBg = styled.div`
    width: 100%;
    height: 100%;
    `

const Nav = styled.nav`
    display: flex;
    align-items: center;
    margin: 16px 0;

    > a {
        color: #2A9D8F;
        text-decoration: none;
        font-size: 18px;
        border: 2px solid #2A9D8F;
        border-radius: 15px;
        padding: 8px 24px;
        margin: 0 8px;
    }

    > a:hover {
        background-color: #264653;
        color: white;
    }
`
const HeaderLogo = styled.img`
    width: 80px;
    margin: 16px;
    font-size: 32px;
`

const SvgParent = styled.svg`
    width: 105vw;
    position: absolute;
    bottom: -50px;
    left: 0;
    z-index: 3;
    fill: #f1f1f1;
    
`
