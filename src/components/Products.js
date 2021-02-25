import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Cart from './cart/Cart';
import './products.scss';
import Product from './products/Product';

// Fetch the product and add into state
const Products = () => {
    const [product, setProduct] = useState([]);
    useEffect(
        () => async () => {
            const callProduct = await fetch('https://fakestoreapi.com/products');
            const allProducts = await callProduct.json();
            // console.log(allProducts);
            setProduct(allProducts);
        },
        []
    );
    // Add into cart
    const [cartProduct, setCartProduct] = useState([]);
    const cartFun = (e) => {
        setCartProduct([...cartProduct, e]);
    };
    // Remove from cart
    const RemoveFromCart = (e) => {
        const removedItem = cartProduct.filter((item) => e.id !== item.id);
        setCartProduct(removedItem);
    };
    // Custom CSS
    const flex = {
        display: 'flex',
        flexWrap: 'wrap',
    };
    return (
        <Container>
            <Row>
                {/* Display Single Product Component */}
                <Col xs="8" style={flex}>
                    {product.map((pro) => (
                        <Product
                            key={pro.id}
                            productT={pro}
                            cartFun={cartFun}
                            RemoveFromCart={RemoveFromCart}
                            isCart={cartProduct}
                        />
                    ))}
                </Col>
                {/* Cart Option */}
                <Col xs="4" className="cart">
                    <Cart cartItems={cartProduct} />
                </Col>
            </Row>
        </Container>
    );
};

export default Products;
