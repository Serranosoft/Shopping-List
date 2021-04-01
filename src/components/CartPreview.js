import React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

const CartPreview = (props) => {
    let qty = 0;
    if(props.cartItems !== undefined) {
        for (let i = 0; i < props.cartItems.length; i++) {
            qty += parseInt(props.cartItems[i].quantity);
        }
    }

    return (
        <CartPreviewWrapper>
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
            <CartPreviewCount>{qty}</CartPreviewCount>
            <Link to="/cart">
                <FontAwesomeIcon icon={faArrowCircleRight} size="2x" style={{ cursor: "pointer" }} />
            </Link>
        </CartPreviewWrapper>
    )
}

export default CartPreview;

const CartPreviewWrapper = styled.div`
    width: 100px;
    height: 130px;
    position: fixed;
    top: 80;
    right: 0;
    border: 1px solid black;
    border-radius: 50px;
    text-align: center;
    padding: 8px;
    margin: 32px;
`

const CartPreviewCount = styled.span`
    display: block;
    font-size: 28px;
    font-weight: bold;
    margin: 8px 0;
`