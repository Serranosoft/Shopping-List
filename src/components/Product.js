import React from "react";
import styled from "@emotion/styled";


const Product = ({product}) => {
    console.log(product);
    return (
        <ProductWrapper>
            <ProductImageWrapper>
                <ProductImage src={product.image} />
            </ProductImageWrapper>
            <ProductDescriptionWrapper>
                <ProductTitle>{product.name}</ProductTitle>

            </ProductDescriptionWrapper>
        </ProductWrapper>
    )



}

export default Product;

const ProductWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 2fr;
    border: 2px solid red;
`

const ProductImageWrapper = styled.div`
    width: 100%;
`

const ProductImage = styled.img`
    width: 100%;
    height: 350px;
`

const ProductDescriptionWrapper = styled.div`
    width: 100%;
`

const ProductTitle = styled.h1`
    font-size: 62px;
`