import { UserContext } from "@/component/login/AuthContext"
import { useAppSelector } from "@/feature/Hooks"
import { createContext, useContext, useEffect, useState } from "react"

const cartInit = {
    cart: null,
    getCart: () => {},
    createCart: () => {},
    insertCartItem: () => {},
    updateCartItem: () => {},
}

export const CartContext = createContext(cartInit)
export default function CartProvider({children} : any) {
    const [currentCart, setCurrentCart] = useState<any>(null)
    const { user } = useContext(UserContext)
    const alert = useAppSelector(state => state.alert)
    const cart = currentCart
    const getCart = async() => {

    }
    const createCart = async() => {

    }
    const insertCartItem = async() => {

    }
    const updateCartItem =async () => {

    }
    useEffect(() => {
        user === null ? setCurrentCart(null) : getCart()
    }, [user, alert])
    return (
        <CartContext.Provider
        value={{cart, getCart, createCart, insertCartItem, updateCartItem}}>
            {children}
        </CartContext.Provider>
    )
}