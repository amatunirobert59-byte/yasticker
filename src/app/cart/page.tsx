"use client"

import { useCart } from "@/context/CartContext"

export default function CartPage() {

  const { cart, removeFromCart } = useCart()

  return (

    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        padding: "40px"
      }}
    >

      <h1
        style={{
          fontSize: "42px",
          marginBottom: "40px"
        }}
      >
        Корзина
      </h1>

      {cart.length === 0 ? (

        <p>Корзина пуста</p>

      ) : (

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}
        >

          {cart.map((item: any) => (

            <div
              key={item.id}
              style={{
                background: "#111",
                padding: "20px",
                borderRadius: "20px"
              }}
            >

              <h2>{item.title}</h2>

              <p>{item.price} ₽</p>

              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  marginTop: "15px",
                  padding: "10px 20px",
                  borderRadius: "12px",
                  border: "none",
                  background: "#ff3b30",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                Удалить
              </button>

            </div>

          ))}

        </div>

      )}

    </main>

  )
}