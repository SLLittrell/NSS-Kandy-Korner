import  React, {useState, createContext} from "react"

export const ProductContext = createContext()


//function to hold provider info/fetch call
export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])
    const [productTypes, setProductTypes] = useState([])


    const getProducts = () => {
        return fetch ("http://localhost:8088/products")
        .then(response => response.json())
        .then(setProducts)
    }

    const getProductTypes = () => {
        return fetch ("http://localhost:8088/productTypes")
        .then(response => response.json())
        .then(setProductTypes)
    }
return (
    <ProductContext.Provider value ={{
        products, getProducts, productTypes, getProductTypes
    }}>
        {props.children}
    </ProductContext.Provider>
)

}