import React from "react"
import styled from "@emotion/styled"
import CartPreview from "./CartPreview"
import Items from "../resources/Items"
import ShopItem from "./ShopItem"

const Shop = (props) => {
    return (
        <>
            <CartPreview
                cartItems={props.cartItems}
            />
            <ShopTitle>Shop</ShopTitle>
            <ShopWrapper>
                {Items.map((el => {
                    return (
                        <ShopItem
                            key={el.id}
                            {...el}
                            addToCart={props.addToCart}
                        />
                    )
                }))}
            </ShopWrapper>
        </>
    )
}

export default Shop;

const ShopWrapper = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-rows: auto;
    gap: 16px;
    margin: 16px auto;
`

const ShopTitle = styled.h1`
    font-size: 42px;
    font-weight: bold;
    text-align: center;
`