import  React, {useState, createContext} from "react"

export const ProductContext = createContext()

//function to hold provider info/fetch call
export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])


    const getProducts = () => {
        return fetch ("http://localhost:8088/products")
        .then(response => response.json())
        .then(setProducts)
    }
return (
    <ProductContext.Provider value ={{
        products, getProducts
    }}>
        {props.children}
    </ProductContext.Provider>
)

}