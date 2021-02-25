import React from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import './product.scss';

export default function Product(productT) {
    const { image, title, price, description } = productT.productT;
    const ShortDes = () => {
        const arrDes = description.split(' ');
        return arrDes.splice(0, 25);
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
                    <Button onClick={() => productT.cartFun(productT.productT)}>Add To Cart</Button>
                </CardBody>
            </Card>
        </div>
    );
}
