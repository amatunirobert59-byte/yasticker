"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react"

const CartContext = createContext<any>(null)

export function CartProvider({
  children
}: {
  children: React.ReactNode
}) {

  const [cart, setCart] = useState<any[]>([])

  useEffect(() => {

    const savedCart = localStorage.getItem("cart")

    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }

  }, [])

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    )

  }, [cart])

  const addToCart = (product: any) => {

    setCart((prev) => [...prev, product])

  }

  const removeFromCart = (id: number) => {

    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    )

  }

  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart
      }}
    >

      {children}

    </CartContext.Provider>

  )
}

export function useCart() {

  return useContext(CartContext)

}