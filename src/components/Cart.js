import React from "react"
import styled from "@emotion/styled"
import CartItem from "./CartItem"

const Cart = (props) => {
    return (
        <CartWrapper>
            {props.cartItems.map((el => {
                return (
                    <CartItem
                        {...el}
                        addToCart={props.addToCart}
                        removeFromCart={props.removeFromCart}
                        handleCart={props.handleCart}
                    />
                )
            }))}
        </CartWrapper>
    )
}

export default Cart;

const CartWrapper = styled.div`
    width: 80%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: auto;
    gap: 16px;
    margin: 16px auto;
`

