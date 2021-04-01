import React from "react"
import styled from "@emotion/styled"
import {Link} from "react-router-dom"

const ShopItem = (props) => {
    function addItem() {
        let item = {
            id: props.id,
            image: props.image,
            name: props.name,
            price: props.price
        }
        props.addToCart(item);
    }
    return (
        <ShopItemWrapper>
            <Link to={`/shop/${props.id}`}>
                <ShopItemImg src={props.image} />
            </Link>
                <ShopItemTitle>{props.name}</ShopItemTitle>
                <ShopItemPrice>{props.price}€</ShopItemPrice>
                <ShopItemBuy onClick={addItem}>Add to cart</ShopItemBuy>
        </ShopItemWrapper>
    )
}

export default ShopItem;

const ShopItemWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 8px;
    text-align: center;
    box-shadow: 3px 5px 10px black;
`

const ShopItemImg = styled.img`
    width: 100%;
    height: 250px;
`

const ShopItemTitle = styled.h2`
    font-size: 22px;
    padding: 8px;
`

const ShopItemPrice = styled.h2`
    font-weight: bold;
    text-align: center;
    margin-bottom: 8px;
`

const ShopItemBuy = styled.button`
    padding: 8px 24px;
    color: white;
    background-color: black;
    cursor: pointer;
`