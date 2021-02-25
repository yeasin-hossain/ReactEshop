import React from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import './product.scss';

export default function Product(productT) {
    const { image, title, price, description, id } = productT.productT;
    const ShortDes = () => {
        const arrDes = description.split(' ');
        return arrDes.splice(0, 25);
    };

    const conditionalBtn = () => {
        const isIn = productT.isCart;
        const ye = isIn.filter((e) => e.id === id);
        if (ye.length === 0) {
            return <Button onClick={() => productT.cartFun(productT.productT)}>Add To Cart</Button>;
        }
        return (
            <Button
                onClick={() => productT.RemoveFromCart(productT.productT)}
                className="removeBtn"
            >
                Already In Cart
            </Button>
        );
    };
    return (
        <div style={{ width: '40%', margin: '25px' }}>
            <Card>
                <CardImg top width="100%" src={image} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{price}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                        {title}
                    </CardSubtitle>
                    {/* <CardText>{description}</CardText> */}
                    <CardText>{ShortDes()}</CardText>
                    {conditionalBtn()}
                    {/* <Button onClick={() => productT.cartFun(productT.productT)}>Add To Cart</Button> */}
                </CardBody>
            </Card>
        </div>
    );
}
