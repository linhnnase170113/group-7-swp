import { UserContext } from "@/component/login/AuthContext"
import { createContext, useContext, useEffect, useState } from "react"

const cartInit = {
    cart: null,
    getCart: () => {},
    createCart: () => {},
    insertCartItem: () => {},
    updateCartItem: () => {}
}

export const CartContext = createContext(cartInit)
export default function CartProvider({children} : any) {
    const [currentCart, setCurrentCart] = useState<any>(null)
    const { user } = useContext(UserContext)
    const cart = currentCart
    const getCart = async() => {

    }
    const createCart = async() => {

    }
    const insertCartItem = async() => {
        getCart()
    }
    const updateCartItem =async () => {
        getCart()
    }
    useEffect(() => {
        user === null ? setCurrentCart(null) : getCart()
    }, [user])
    return (
        <CartContext.Provider
        value={{cart, getCart, createCart, insertCartItem, updateCartItem}}>
            {children}
        </CartContext.Provider>
    )
}