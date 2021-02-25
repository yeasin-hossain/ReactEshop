import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Cart from './cart/Cart';
import './products.scss';
import Product from './products/Product';

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
    const [cartProduct, setCartProduct] = useState([]);
    const cartFun = (e) => {
        setCartProduct([...cartProduct, e]);
    };
    const RemoveFromCart = (e) => {
        console.log(e);
        const removedItem = cartProduct.filter((item) => e.id !== item.id);
        console.log(removedItem);
        setCartProduct(removedItem);
        console.log(cartProduct);
    };
    const flex = {
        display: 'flex',
        flexWrap: 'wrap',
    };
    return (
        <Container>
            <Row>
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
                <Col xs="4" className="cart">
                    <Cart cartItems={cartProduct} />
                </Col>
            </Row>
        </Container>
    );
};

export default Products;
