import React, {useContext, useEffect} from "react";
import { ProductContext} from "./ProductProvider";
import { ProductCard } from "./Product"

//create function to use data from ProductContext and render to DOM
export const ProductList =() => {
    const {products, getProducts, productTypes, getProductTypes} =useContext(ProductContext)
    

    useEffect(() => {
        getProductTypes()
            .then(getProducts)
    }, [])

    return (

    <>
        <div className="products">
            {
                products.map(product =>{
                    const relatedType = productTypes.find(prodType => prodType.id === product.productTypeId)
                    return <ProductCard key={product.id} productobj={product} productTypeobj={relatedType} />
                })
            }
        </div>
    </>

) 
}   
