import  React  from "react";

export const ProductCard = ({product}) => (
    <section className="product">
        <div className="product__address">Name: {product.name}</div>
        <div className="product__price">Price: {product.price}</div>
    </section>
)