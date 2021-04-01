import React from "react"
import styled from "@emotion/styled"

const CartItem = (props) => {
    function handleChange(e) {
        let item = {
            id: props.id,
            quantity: e.target.value
        }
        props.handleCart(item);
    }

    function removeItem() {
        props.removeFromCart(props.id)
    }

    return (
        <CartItemWrapper>
            <CartItemImg src={props.image} />
            <CartItemTitle>{props.title}</CartItemTitle>
            <CartItemPrice>{props.price}€</CartItemPrice>
            <CartItemPrice>{props.quantity}</CartItemPrice>
            <ItemStackInput type={"number"} min={"1"} max={"100"} value={props.quantity} onChange={handleChange} />
            <RemoveItem onClick={removeItem}>Remove item</RemoveItem>
        </CartItemWrapper>
    )
}

export default CartItem;

const CartItemWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 8px;
    text-align: center;
`

const CartItemImg = styled.img`
    width: 100%;
    height: 250px;
`

const CartItemTitle = styled.h2`
    font-size: 22px;
    padding: 8px;
`

const CartItemPrice = styled.h2`
    font-weight: bold;
    text-align: center;
    margin-bottom: 8px;
`

const ItemStackInput = styled.input`
    

`

const RemoveItem = styled.button`
    width: 100%;
    padding: 8px 24px;
    margin: 8px 0;
    background: transparent;
    border: 1px solid black;
    color: black;
    cursor: pointer;
    & hover > {
        background: black;
        color: white;
    }
`





