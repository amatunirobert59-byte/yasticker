"use client"

import { useCart } from "@/context/CartContext"

export default function CartPage() {

  const {
    cart,
    removeFromCart,
    clearCart
  } = useCart()

  const total = cart.reduce(
    (sum: number, item: any) =>
      sum + Number(item.price),
    0
  )

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        padding: "40px"
      }}
    >

      <h1>Корзина</h1>

      {cart.map((item: any) => (

        <div
          key={item.id}
          style={{
            background: "#111",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "20px"
          }}
        >

          <h2>{item.title}</h2>

          <p>{item.price} ₽</p>

          <button
            onClick={() =>
              removeFromCart(item.id)
            }
          >
            Удалить
          </button>

        </div>

      ))}

      <h2
        style={{
          marginTop: "40px"
        }}
      >
        Итого: {total} ₽
      </h2>

    </main>
  )
}