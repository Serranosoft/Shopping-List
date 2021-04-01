import React from "react";
import styled from '@emotion/styled'


const Footer = () => {
    return (
        <FooterParent>
            <FooterTitle> Creado por <a href="https://www.linkedin.com/in/manuel-serrano-scholz/" target="_blank" rel="noreferrer">Manuel Scholz</a> </FooterTitle>
        </FooterParent>
    )
}

export default Footer;

const FooterParent = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 8px 0;
    background-color: rgb(38,38,38);
    color: black !important;
    & > a {
        color: black !important;
    }
    & > a & p > {
        font-weight: bold;
        text-decoration: none;
    }
    & > a:hover {
        color: blue;
        text-decoration: underline;
    }
`

const FooterTitle = styled.h4`
    color: white;
    & > a {
        color: white;
    }
`