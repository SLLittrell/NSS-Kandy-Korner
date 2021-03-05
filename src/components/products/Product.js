import  React  from "react";

export const ProductCard = ({productobj, productTypeobj}) => (
    <section className="product">
        <div className="product__address">Name: {productobj.name}</div>
        <div className="product__price">Price: {productobj.price}</div>
        <div className="product__type">Type: {productTypeobj.type}</div>
        <button className="add__cart" onClick="">Purchase</button>
    </section>
)