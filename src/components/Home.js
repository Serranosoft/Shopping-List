import React from "react"
import CartPreview from "./CartPreview"
import styled from "@emotion/styled"

const Home = (props) => {
    return (
        <>
            <CartPreview
                cartItems={props.cartItems}
            />
            <HomeWrapper>
                <h1>Home</h1>
            </HomeWrapper>
        </>
    )
}

export default Home;

const HomeWrapper = styled.div`
width: 100%;
height: 100vh;
`