import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Global, css } from '@emotion/react'
import Shop from "./Shop";
import Home from "./Home";
import Cart from "./Cart";
import Product from "./Product"
import Items from "../resources/Items"

const Routes = () => {
    const [cartQty, setCartQty] = useState(0)
    const [cartItems, setCartItems] = useState([])

    function incrementQty() {
        setCartQty(cartQty + 1);
    }

    function addToCart(item) {
        incrementQty();
        let found = false;
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === item.id) {
                found = true;
                cartItems[i].quantity++;
                cartItems[i].price += cartItems[i].price;
                break;
            }
        }
        if (!found) {
            item.quantity = 1;
            setCartItems(cartItems => [...cartItems, item]);
        }
    }

    function handleCart(item) {
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === item.id) {
                let oldArray = cartItems;
                let originalPrice = oldArray[i].price / oldArray[i].quantity;
                oldArray[i].quantity = item.quantity;
                oldArray[i].price = originalPrice * item.quantity;
                setCartItems([...oldArray]);
                break;

            }
        }
    }

    function removeFromCart(id) {
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === id) {
                let oldArray = cartItems;
                oldArray.splice(i, 1);
                setCartItems([...oldArray]);
                break;
            }
        }
    }

    const findProduct = (id) => Items.find(element => element.id === id);

    return (
        <>
            <Global
                styles={css`
                *,*::after,*::before {
                    box-sizing: border-box;
                    margin: 0;
                    padding:0;
                }
                
                html {
                    height: 100vh;
                }
                body {
                    background: #f1f1f1;
                    color: #1c1c1c;
                }`
                }
            />
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home}>
                        <Home
                            cartItems={cartItems} />
                    </Route>
                    <Route exact path="/shop" component={Shop}>
                        <Shop
                            cartItems={cartItems}
                            addToCart={addToCart}
                        />
                    </Route>
                    <Route exact path="/cart" component={Cart}>
                        <Cart
                            cartItems={cartItems}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                            handleCart={handleCart} />
                    </Route>
                    <Route exact path="/shop/:productId" render={(routeProps) => (
                        <Product
                            product={{ ...findProduct(parseInt(routeProps.match.params.productId)) }}
                        />
                    )}>
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default Routes;