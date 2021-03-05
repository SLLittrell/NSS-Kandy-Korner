import React, {useState, createContext} from "react";


export const OrderContext = createContext()

export const OrderProvider = (props) => {
    const [orders, setOrders] = useState([])

    const getOrders = () => {
        return fetch("http://localhost:8088/orders")
        .then(res => res.json())
        .then(setOrders)
    }

    const addOrders = orderObj => {
        return fetch("http://localhost:8088/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderObj)
        })
        .then(getOrders)
    }

    return (
        <OrderContext.Provider value={{
            orders, getOrders, addOrders
        }}>
          {props.children}
        </OrderContext.Provider>
    )

}