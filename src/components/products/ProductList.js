import React, {useContext, useEffect} from "react";
import { ProductContext } from "./ProductProvider";
import { ProductCard } from "./Product";

//create function to use data from ProductContext and render to DOM
export const ProductList =() => {
    const {products, getProducts} =useContext(ProductContext)

    useEffect(() => {
        getProducts()
    }, [])

    return (
    <div className="products">
        {
            products.map(product => <ProductCard key={product.id} product={product} />)
        }
    </div>
    )
}