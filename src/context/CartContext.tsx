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

  // Загрузка корзины из localStorage
  useEffect(() => {

    const savedCart =
      localStorage.getItem("cart")

    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }

  }, [])

  // Сохранение корзины
  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    )

  }, [cart])

  // Добавление товара
  const addToCart = (product: any) => {

    setCart((prev) => [...prev, product])

  }

  // Удаление товара
  const removeFromCart = (id: number) => {

    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    )

  }

  // Очистка корзины
  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () =>
  useContext(CartContext)